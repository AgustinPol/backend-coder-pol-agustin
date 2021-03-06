const path = require("path");
const express = require('express');
const apiRoutes = require("./routers/index");
const app = express();
const PORT = process.env.PORT || 8080;

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.use("/api", apiRoutes);

const connectedServer = app.listen(PORT, ()=> {
  try {
    console.log(`Servidor levantado y funcionando en puerto ${PORT}`);
  } 
  catch {
    console.log("hubo un error al levantar servidor");
  }
  });
  
  connectedServer.on('error', (error) => {
    console.error('Error: ', error);
  })
  