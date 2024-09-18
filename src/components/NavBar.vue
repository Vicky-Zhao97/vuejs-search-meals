<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch px-4">
    <router-link :to="{ name: 'home' }" class="inline-flex items-center px-5 h-full text-orange-500 font-bold" >
      Home
    </router-link>
    <div class="flex items-center gap-1">
      <router-link :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors:bg-orange-200 hover:bg-orange-500 hover:text-white">
        Search Meals
      </router-link>
      <router-link :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors:bg-orange-200 hover:bg-orange-500 hover:text-white" >
        Meals By Letter
      </router-link>
      <router-link :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors:bg-orange-200 hover:bg-orange-500 hover:text-white" >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>

<style scoped>


</style>