import { Application } from "https://deno.land/x/oak/mod.ts";
import { router } from "./router/router.ts"
import { client } from "./configs/database.ts";
import errorMiddleware from "./middlewares/error.ts";

const env = Deno.env.toObject();

const PORT = env.PORT || 5000;
const HOST = env.HOST || 'localhost';

const app = new Application();

app.use(errorMiddleware)
app.use(router.routes());
app.use(router.allowedMethods());

await client.connect();

console.log(`Uygulama başladı ve ${PORT} portu dinleniyor! Açmak için ${HOST}:${PORT}`);

await app.listen(`${HOST}:${PORT}`);

await client.end();

// Deno, biz istemediğimiz sürece dosya okuma ve internete erişme izni vermez.
// deno run --allow-env --allow-net --allow-read app.ts