import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client();

client.connect({
  hostname: "mysql10.trwww.com",
  username: "gpstrace",
  db: "biletyo1_gpstrace",
  poolSize: 3,
  port: 3306,
  password: "4uF@m3@5"
});

export { client };