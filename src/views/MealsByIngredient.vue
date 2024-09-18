<template>
  <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem 
      v-for="meal in meals" 
      :key="meal.idMeal" 
      :meal="meal">
    </MealItem>
    <div v-if="!meals.length">
      <p>No meals found for {{ route.params.ingredient }}.</p>
    </div>
  </div> -->
  <!-- <h3 class="text-2xl font-bold mb-2">{{ route.params.ingredient }}</h3> -->
  <Meals :meals="meals" :search="search" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import store from '../store';
import MealItem from '../components/MealItem.vue';
import Meals from '../components/Meals.vue';

const meals = computed(() => store.state.mealsByIngredient)
const route = useRoute();
const search = computed(() => route.params.ingredient || '').value


onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
})
</script>