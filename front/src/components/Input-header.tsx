import {  useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { createList } from "../services/methods";

interface InputHeaderProps {
  newFunctionTasks: Function;
}

export function InputHeader({ newFunctionTasks }: InputHeaderProps) {
  const [newTask, setNewTask] = useState("");
  const handleAddTask = async () => {
    await createList(newTask);
    setNewTask("");
    newFunctionTasks(true);
  };
  return (
    <div className="top-[-15px] relative flex gap-6 w-2/3 items-center justify-center mx-auto ">
      <Input
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button onClick={handleAddTask}>Adicionar</Button>
    </div>
  );
}
