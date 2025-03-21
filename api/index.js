const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas
app.use("/api/users", require("./routes/userRoutes"));

app.get('/', (_req, res) => res.send('Hello World API'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});