/*
  main.js is the entry point: index.html loads this file, and this file
  decides what runs. Notice it contains almost no logic of its own —
  it imports and orchestrates. That is the habit to build.
*/

import "./style.css";
import { runLesson } from "./lessons/lesson-44-dom-basics.js";
import { runExercise } from "./exercise/exercise.js";

runLesson();
runExercise();
