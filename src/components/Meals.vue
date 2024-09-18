<template>
  <div v-if="search !== '' && meals.length" class="p-8 font-bold text-4xl  text-orange-500">
    <h3>Meals for {{ search }} </h3>
  </div>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 ps-8 pe-8pt-4">
    <MealItem 
      v-for="meal in meals" 
      :key="meal.idMeal" 
      :meal="meal">
    </MealItem>
    <div v-if="!meals.length && searchInitialized" class="col-span-1 md:col-span-3 flex justify-center items-center mt-8">
      <p>Cannot find the meal '{{ search }}'</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import MealItem from './MealItem.vue';
const props = defineProps({
  meals:{
    required: true,
    type: Array,
    default: () => [] // Default to empty array if not provided
  },
  search:{
    required: true,
    type: String,
    default: '' // Default to empty string if not provided
  },
  searchInitialized: {
    type: Boolean,
    default: false // Default to false if not provided
  }
})
</script>