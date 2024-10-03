<script setup lang="ts">
import { useTodoStore } from '../stores/todoStore'

const todoStore = useTodoStore()

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  }
}

const props = defineProps<TodoItemProps>()
</script>

<template>
  <li class="flex items-center bg-white p-3 rounded-md shadow-sm">
    <input
      type="checkbox"
      :checked="props.todo.completed"
      @change="todoStore.toggleTodo(props.todo.id)"
      class="mr-2 form-checkbox h-5 w-5 text-cyan-500"
    />
    <span
      :class="{ 'line-through text-gray-400': props.todo.completed, 'text-gray-700': !props.todo.completed }"
      class="flex-grow"
    >
      {{ props.todo.text }}
    </span>
    <button
      @click="todoStore.removeTodo(props.todo.id)"
      class="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </li>
</template>