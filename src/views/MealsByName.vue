<template>
  <div class="p-8 pb-0">
    <input type="text" v-model="keyword" class="rounded border-2 border-gray-200 w-full" placeholder="Search For Meals"
      @change="searchMeals">
  </div>

  <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"></MealItem>
  </div> -->
  <Meals :meals="meals" :search="search" :searchInitialized="searchInitialized"/>
</template>

<script setup>

import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import Meals from '../components/Meals.vue';


const route = useRoute();
const keyword = ref('');
const search =ref('');
const searchInitialized = ref(false);
const meals = computed(() => store.state.searchedMeals || []);
function searchMeals() {
  if(keyword.value){
    search.value = keyword.value;
    store.dispatch('searchMeals', keyword.value);
    searchInitialized.value = true;
  } else{
    search.value = '';
    store.commit('setSearchedMeals', [])
  }
}

onMounted(() => {
  keyword.value = route.params.name; //绑定keyword和route的名字
  search.value = keyword.value
  if(keyword.value){
    searchMeals(); // 使得刷新页面也会显示搜索结果，使得页面不变
  }
});

</script>