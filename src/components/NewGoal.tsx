import { FormEvent, useRef } from "react";

type onGoalHandler ={
      onGoal:(title:string,summary:string) => void;
}

export default function NewGoal({onGoal}:onGoalHandler){

      const goal = useRef<HTMLInputElement>(null);
      const summary = useRef<HTMLInputElement>(null);

      const submitHandler=(event:FormEvent<HTMLFormElement>)=>
      {
                  event.preventDefault();

                  const goalTitle = goal.current!.value;
                  const goalSummary = goal.current!.value;

                  event.currentTarget.reset();
                  onGoal(goalTitle,goalSummary);
      }

      return (
            <form onSubmit={submitHandler}>
                  <p>
                        <label htmlFor="title">Your Goal</label>
                        <input type="text" id="title" ref={goal}/>
                  </p>
                  <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" ref={summary} />
                  </p>
                  <p>
                        <button>Add Goal</button>
                  </p>

            </form>
      )




}

