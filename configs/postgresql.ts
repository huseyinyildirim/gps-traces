import { Client } from "https://deno.land/x/postgres/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const client = new Client({
	user: "whzkcdvucassse",
	database: "d6q7cc6bf08n3p",
	hostname: "ec2-54-247-107-109.eu-west-1.compute.amazonaws.com",
	port: 5432,
	password: "9fd3917d2eb02c16a4f54afa50967addd5b933eadbfbbccb9f36051d3232ac8a",
  });

export { client };