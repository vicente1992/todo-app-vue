<script setup lang="ts">
import { useTodoStore } from '../stores/todoStore'
import TodoForm from './TodoForm.vue'
import TodoItem from './TodoItem.vue'

const todoStore = useTodoStore()
</script>

<template>
  <div class="todo-list">
    <TodoForm />
    <ul class="space-y-2 mt-4">
      <TodoItem
        v-for="todo in todoStore.todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
  </div>
</template>