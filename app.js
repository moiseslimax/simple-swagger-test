const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 5000;
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Swagger test API",
      description: "Uma api teste para testar swagger",
      contact: {
        name: "Moisés Maldaner de Lima"
      },
      servers: ["http://localhost:5000"]
    }
  },
  apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/**
 * @swagger
 * /customers:
 *  get:
 *      description: Use to request all customers
 *      responses:
 *          '200':
 *              description: A sucessfull request
 */
app.get("/customers", (req, res) => {
  res.send("Customer results");
});

//Routes
/**
 * @swagger
 * /customer:
 *  put:
 *      description: Use to request all customers
 *      responses:
 *          '200':
 *              description: A sucessfull put
 */
app.put("/customer", (req, res) => {
  res.send("Customer results");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
