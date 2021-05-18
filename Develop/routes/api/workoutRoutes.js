const app = require("express").Router();
const Workout = require("../../models/workout.js")


app.post("/workouts", ({ body }, res) => {
    Workout.create(body).then((newData => {
        res.json(newData);
    })).catch(err => {
        res.json(err);
    });
  });
  
app.get("/workouts", (req, res) => {
  Workout.find({})
  .then((data) => {
        console.log(data)
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  app.get("/workouts/range", (req, res) => {
    Workout.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  app.put('/workouts/:id', ({params, body},res) => {
    Workout.findOneAndUpdate({ _id: params.id}, 
        {$push: 
            { exercises: body } 
        },
        
        { 
            upsert: true,
            useFindAndModify: false 
        }, 
        workoutUpdate => {
            res.json(workoutUpdate);
        }
    );
  });
  
  module.exports = app
 
  