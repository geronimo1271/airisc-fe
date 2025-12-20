import strapi from "@strapi/strapi";
import { config } from "./config/server.js";
const app = strapi({ config });
app.start();
