const app = require('express').Router();
const apiRoutes = require('./api/workoutRoutes');
const path = require('path');
app.use('/api', apiRoutes);



 app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"));
  });
module.exports = app;