import { useTodoStore } from '../stores/todoStore'

export function useTodoActions() {
  const todoStore = useTodoStore()

  const addTodo = (text: string) => {
    if (text.trim()) {
      todoStore.addTodo(text.trim())
    }
  }

  const toggleTodo = (id: number) => {
    todoStore.toggleTodo(id)
  }

  const removeTodo = (id: number) => {
    todoStore.removeTodo(id)
  }

  return {
    addTodo,
    toggleTodo,
    removeTodo
  }
}