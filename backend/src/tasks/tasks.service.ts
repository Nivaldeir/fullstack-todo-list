import { Task } from './task';

export class TaskService {
  private tasks: Task[] = [];
  getAll(): Task[] {
    return this.tasks
  }
  getById(id: string): Task {
    const task = this.tasks.find(task => task.id === id);
    return task
  }
  create(title: string): Task {
    const id = crypto.randomUUID()
    const taksCreate: Task = {
      id: id,
      title: title,
      status: 'Progress'
    };
    this.tasks.push(taksCreate)
    return taksCreate
  }
  update(task: Task): Task {
    if (!task.id) throw new Error("Id not found")
    const taskFind = this.tasks.findIndex(el => el.id === task.id);
    this.tasks[taskFind] = task
    return this.tasks[taskFind]
  }
  delete(id: string): void {
    const taskFind = this.tasks.findIndex(el => el.id === id);
    if (taskFind !== -1) {
      this.tasks.splice(taskFind, 1);
    }
  }
};
