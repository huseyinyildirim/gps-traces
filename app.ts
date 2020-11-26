import { Application } from "https://deno.land/x/oak/mod.ts";
import * as flags from 'https://deno.land/std/flags/mod.ts';
import { router } from "./router/router.ts"
import { client } from "./configs/database.ts";

const {args, exit} = Deno;

const DEFAULT_PORT = 5000;
const argPort = flags.parse(args).port;
const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)){
    console.log("Bu bağlantı noktası numarası değil!");
    exit(1);
};

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await client.connect();

console.log(`Uygulama başladı ve ${port} portu dinleniyor!`);

await app.listen({ port: port });

await client.end();

// Deno, biz istemediğimiz sürece dosya okuma ve internete erişme izni vermez.
// deno run --allow-env --allow-net --allow-read app.ts