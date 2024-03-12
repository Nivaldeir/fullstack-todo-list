import { Trash, FilePenLine } from "lucide-react";
import { deleteList, updateList } from "../services/methods";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { useState } from "react";
export interface ITodoListProps extends ITodoList {
  newFunctionTasks: Function;
}
export interface ITodoList {
  id: string;
  title: string;
  status: string;
}
export function TodoList({
  id,
  status,
  title,
  newFunctionTasks,
}: ITodoListProps) {
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updatestatus, setUpdatestatus] = useState(status);
  const handleDelete = async () => {
    await deleteList(id);
    newFunctionTasks(true);
  };
  const handleUpdate = async () => {
    await updateList({
      id,
      status,
      title,
    });
    console.log("Teste")
    newFunctionTasks(true);
  };
  return (
    <div
      className={`bg-[#333333] p-4 flex justify-between items-center rounded-md w-2/3 border-b-green-600 ${
        updatestatus === "Completed" && "border-b-2"
      }`}
    >
      <h1 className="text-xl text-[#F2F2F2]">{title}</h1>
      <div className="flex gap-1">
        <Trash
          color="#F2F2F2"
          size={18}
          className="cursor-pointer"
          onClick={handleDelete}
        />
        <AlertDialog>
          <AlertDialogTrigger>
            <FilePenLine color="#F2F2F2" size={18} className="cursor-pointer" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Edição</AlertDialogTitle>
              <AlertDialogDescription className="flex flex-col gap-4">
                <Input
                  value={updateTitle}
                  onChange={(e) => setUpdateTitle(e.target.value)}
                />
                <Select
                  value={updatestatus}
                  onValueChange={(value) => setUpdatestatus(value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Progress">Em andamento</SelectItem>
                    <SelectItem value="Completed">Completo</SelectItem>
                  </SelectContent>
                </Select>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleUpdate}>
                Atualizar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
