<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const todoStore = useTodoStore()
const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value.trim())
    newTodo.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="addTodo" class="mb-4">
    <input
      v-model="newTodo"
      placeholder="Add a new todo"
      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
    />
    <button
      type="submit"
      class="mt-2 w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
    >
      Add
    </button>
  </form>
</template>