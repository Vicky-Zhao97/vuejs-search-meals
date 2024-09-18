<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
    <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full mb-3"
      placeholder="Search For Ingredients" @change="searchMeals">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <router-link :to="{ name: 'byIngredient', params: { ingredient: ingredient.strIngredient } }"
        v-for="ingredient in computedIngredients" :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow">
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </router-link>
    </div>

    <!-- <pre>{{ ingredients }}</pre> -->
  </div>
</template>

<script setup>
import axiosClient from '../axiosClient';
import { computed, onMounted, ref } from 'vue';

const ingredients = ref([]);
const keyword = ref('');
const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()));
})

onMounted(async () => {
  axiosClient.get('/list.php?i=list')
    .then(({ data }) => {
      ingredients.value = data.meals
    })
})
</script>