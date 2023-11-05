import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from './dto/todo.dto';


@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getAllTodos(): TodoDto[] {
    return this.todoService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return this.todoService.getTodoById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTodo(@Body() todo: TodoDto) {
    return this.todoService.createTodo(todo);
  }

  @Put(':id')
  updateTodo(@Param('id') id: string, @Body() updatedTodo: TodoDto) {
    return this.todoService.updateTodo(id, updatedTodo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }
}
