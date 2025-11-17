import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

export function setupSwagger(app: Express) {
  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "News API",
        version: "1.0.0",
        description: "API documentation for the News service",
      },
      servers: [
        {
          url: "https://news-api-fjm7.onrender.com",
          description: "Local server",
        },
      ],
    },
    apis: ["./src/routes/*.ts"], // path to your route files
  };

  const swaggerSpec = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log("✅ Swagger docs running at http://localhost:3000/api-docs");
}
