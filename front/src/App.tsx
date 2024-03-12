import "./index.css";
import { ITodoListProps, TodoList } from "./components/todo-list";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { getAllList } from "./services/methods";
import { InputHeader } from "./components/Input-header";

function App() {
  const [data, setData] = useState<ITodoListProps[]>([]);
  const [newTask, setNewTask] = useState<boolean>(false);
  useEffect(() => {
    const request = async () => {
      const output = await getAllList();
      setData(output);
      setNewTask(false);
    };
    request();
  }, [newTask]);
  return (
    <div className="bg-[#454545]">
      <Header />
      <InputHeader newFunctionTasks={setNewTask} />
      <main className=" w-full h-full">
        <div className="flex flex-col items-center gap-2">
          {data &&
            data.map((todoList) => (
              <TodoList
                id={todoList.id}
                status={todoList.status}
                title={todoList.title}
                newFunctionTasks={setNewTask}
              />
            ))}
        </div>
      </main>
    </div>
  );
}

export default App;
