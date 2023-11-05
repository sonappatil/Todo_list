import { Injectable } from '@nestjs/common';
import { TodoDto } from './dto/todo.dto';


@Injectable()
export class TodoService {
  private todos: TodoDto[] = [];

  getAllTodos(): TodoDto[] {
    return this.todos;
  }

  getTodoById(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  createTodo(todo: TodoDto){
    todo.id = Date.now().toString();
    this.todos.push(todo);
    return todo;
  }

  updateTodo(id: string, updatedTodo: TodoDto){
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...updatedTodo };
      return this.todos[index];
    }
    return undefined;
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const deletedTodo = this.todos.splice(index, 1)[0];
      return ` The todo-list with id ${id} should be deleted` ;
    }
    return undefined;
  }
}
