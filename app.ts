import { Application } from "https://deno.land/x/oak/mod.ts";
import * as flags from 'https://deno.land/std/flags/mod.ts';
import {viewEngine, engineFactory, adapterFactory } from "https://deno.land/x/view_engine/mod.ts";
import { green, yellow } from "https://deno.land/std@0.53.0/fmt/colors.ts";

import { router } from "./router/router.ts"
import { client } from "./configs/mysql.ts";
import errorMiddleware from "./middlewares/error.ts";

const {args, exit} = Deno;

const DEFAULT_PORT = 5000;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)){
    console.log("Bu bağlantı noktası numarası değil!");
    exit(1);
};

const ejsEngine = engineFactory.getEjsEngine();
const oakAdapter = adapterFactory.getOakAdapter();

const app = new Application();

app.use(viewEngine(oakAdapter, ejsEngine, {
    viewRoot: "./views",
    viewExt: ".ejs",
}));

app.use(errorMiddleware)
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ secure, hostname, port }) => {
    const protocol = secure ? "https://" : "http://";
    const url = `${protocol}${hostname ?? "localhost"}:${port}`;
    console.log(`${green("Uygulama başladı.")} ${yellow(url)} portu dinleniyor!`);
  });

await app.listen({ port: port });

await client.close();

// Deno, biz istemediğimiz sürece dosya okuma ve internete erişme izni vermez.
// deno run --allow-env --allow-net --allow-read app.ts

// Live Reload
// denon run --allow-env --allow-net --allow-read app.ts