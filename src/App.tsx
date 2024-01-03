import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal ={
  title:string;
  description:string;
  id:number
};

export default function App() {

  const [goals,setGoals] = useState<CourseGoal[]>([]);

  const goalHandler = (title:string,summary:string)=>{

    setGoals((prevGoals)=>{
      const newGoal:CourseGoal ={
        title:title,
        description:summary,
        id: Math.random()
      };
      return [...prevGoals,newGoal]
    });

  };

  const goalDeleteHandler = (id:number)=>{

    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id != id))};

  return (
    <main>
        <Header image={{src:goalsImg,alt:"Header Image"}}>
            <h1>Your Goal Courses</h1>
        </Header>
        <NewGoal onGoal={goalHandler}/>
        {/* <button onClick={goalHandler}>Add Goal</button> */}
        <CourseGoalList goals={goals} onDelete = {goalDeleteHandler}/>
        
      </main>
  )
}
