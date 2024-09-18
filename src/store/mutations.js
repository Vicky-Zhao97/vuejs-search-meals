export  function setSearchedMeals(state, meals) {
  state.searchedMeals = meals;
  console.log( meals);
  
}

export  function setMealsByLetter(state, meals) {
  state.mealsByLetter = meals;
}

export  function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals;
}