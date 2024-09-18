<template>
  <div class="flex gap-2 justify-center mt-2">
    <!-- 给每个字母创建一个路由，使用：to绑定一个对象，name要和路由中设置的一样，params传递一个参数，参数是后面的字母 -->
    <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="letter in letters" :key="letter">
      {{ letter }}
    </router-link>
  </div>
  <!-- <div>
    <pre>{{ meals }}</pre>
  </div> -->

  <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal"></MealItem>
  </div> -->
  <Meals :meals="meals" :search="search" />
</template>

<script setup>

import { computed, onMounted, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store'; // 导入 store
import Meals from '../components/Meals.vue';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const route = useRoute();
const meals = computed(()=>store.state.mealsByLetter || []);
const search = ref(route.params.letter || '');




// onMounted(()=>{
//   store.dispatch('searchMealsByLetter',route.params.letter);
// })

// 使用 watch 监听路由参数变化
watch(() => route.params.letter, (newLetter) => {
  if (newLetter) {
    search.value = newLetter;
    store.dispatch('searchMealsByLetter', newLetter);
  } 
}, { immediate: true }); // `immediate` 确保组件挂载时也会触发一次

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>