import { ITodoList } from "../components/todo-list";
import http from "./axios";

export const deleteList = async (id: string) => {
  await http.delete(`tasks/${id}`);
};

export const updateList = async (input: ITodoList) => {
  await http.put(`tasks/${input.id}`, {
    title: input.title,
    status: input.status,
  });
};

export const getAllList = async () => {
  const response = await http.get("/tasks");
  return await response.data;
};
export const getByIdList = async (id: string) => {
  const response = await http.get(`tasks/${id}`);
  return await response.data;
};

export const createList = async (title: string) => {
  await http.post(`tasks`, {
    title: title,
  });
};
