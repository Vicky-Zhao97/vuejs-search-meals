import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue"
import DefaultLayout from "../components/DefaultLayout.vue";
const routes = [
  {
    path:'/',
    component:DefaultLayout,
    children:[
      {
        path: '/',
        name: "home",
        component: Home
      },
      {
        path: '/letter/:letter?',
        name: "byLetter",
        component: () => import('../views/MealsByLetter.vue') 
      },
      {
        // 需要加上？，不然会报错，name参数是必须的
        path: '/by-name/:name?',
        name: "byName",
        component: () => import('../views/MealsByName.vue') 
      },
      {
        path: '/ingredient/:ingredient?',
        name: "byIngredient",
        component: () => import('../views/MealsByIngredient.vue') 
      },
      {
        path: '/ingredients',
        name: "ingredients",
        component: () => import('../views/Ingredients.vue') 
      },
      {
        path:"/meal/:id?",
        name:"mealDetails",
        component:()=>import('../views/MealDetails.vue')
      }
    ]
  },
  {
    path:'/guest',
    component:()=>import('../components/GuestLayout.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;