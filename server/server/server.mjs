import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import portionSizes from "../data/portionSizes.mjs";
import smoothieTemplates from "../data/smoothieTemplates.mjs";
import ingredientsList from "../data/ingredientsList.mjs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = fastify();

server.setNotFoundHandler((_, reply) => {
  return reply.sendFile("index.html");
});

server.register(fastifyStatic, {
  root: path.join(__dirname, "../../dist"),
});

server.get("/smoothie-templates", (_, reply) => {
  return reply.send(smoothieTemplates);
});

server.get("/ingredients", (_, reply) => {
  return reply.send(ingredientsList);
});

server.get("/portion-sizes", (_, reply) => {
  return reply.send(portionSizes);
});

const port = process.env.PORT || 9999;
const host = process.env.HOST || "localhost";

server
  .listen({ port, host })
  .then(() => {
    console.log("Server is running");
  })
  .catch((error) => {
    console.error(error);
  });
