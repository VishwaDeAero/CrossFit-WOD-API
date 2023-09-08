const express = require('express');
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const app = express()
const port = process.env.PORT || 3000;

// Display
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);

// Listen
app.listen(port, () => {
    console.log(`API app listening on port ${port}!`)
});