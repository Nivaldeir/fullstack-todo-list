import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from 'src/tasks/task';
import { TaskService } from 'src/tasks/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TaskService) { }
  @Get()
  getAll(): Task[] {
    return this.tasksService.getAll();
  }
  @Get(":id")
  getById(@Param('id') id: string): Task {
    return this.tasksService.getById(id);
  }
  @Post()
  create(@Body("title") title: string): Task {
    return this.tasksService.create(title);
  }
  @Put(":id")
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('status') status: "Progress" | "Completed"
  ): Task {
    return this.tasksService.update({
      id,
      title, status
    });
  }
  @Delete(":id")
  delete(@Param('id') id: string): void {
    return this.tasksService.delete(id)
  }
}
