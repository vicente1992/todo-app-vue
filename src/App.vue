<script setup lang="ts">
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <h1 class="text-3xl font-bold mb-6 text-gray-900">Vue 3 + TypeScript + Pinia Todo App</h1>
        <TodoList />
      </div>
    </div>
  </div>
</template>