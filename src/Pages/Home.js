import React, { useState } from "react";
import HeroBanner from "../Components/HeroBanner";
import { Box } from "@mui/material";
import Exercises from "../Components/Exercises";
import SearchExercises from "../Components/SearchExercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
};

export default Home;
