import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
type CourseGoalProps ={
      goals:CGoal[],
      onDelete : (id:number)=>void
    };

export default function CourseGoalList ({goals,onDelete}:CourseGoalProps) {

      return (
            <ul>
            {goals.map((goals)=> (
              <li key={goals.id}>
                  <CourseGoal title={goals.title} id={goals.id} onDelete={onDelete}>
                      <p>{goals.description}</p>
                  </CourseGoal>
              </li>
            ))}
            </ul>


      )


}