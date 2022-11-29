import { recipes } from '../../data/recipes.js'
import { RecipeFactory } from '../factory/recipeFactory.js'
import { mainRecherche } from '../utils/mainRecherche.js'
import { listDropdown } from '../utils/tagRecherche.js'
//array of 50 recipes
export let currentRecipes = { recipes: recipes }

// console.log(currentRecipes.recipes)

// afiche tout les recettes sur la page grace à RecipeFactory
export const updateRecipes = (currentRecipes) => {
  const cardRecipes = document.querySelector('.container__recipes .row')
  cardRecipes.innerHTML = ''
  currentRecipes.recipes.forEach(recipe => {
    const cardModel = new RecipeFactory(recipe)
    cardRecipes.innerHTML += cardModel.createHtml() 
  })
}

// Open DROPDOWN liste
export const updateDropbox = (recipes) => {
  // console.log(recipes)
  let ingredients = []
  let ustensils = []
  let appliance = []

  recipes.forEach(recipe => {
    
    recipe.ingredients.forEach(ingredient => {
      ingredients.push(ingredient.ingredient)
    })
    ustensils.push(...recipe.ustensils) // tableau
    appliance.push(recipe.appliance)
  })
  // console.log(ingredients)
  // new Set supprime repetitions
  ingredients = [...new Set(ingredients)].sort()
  ustensils = [...new Set(ustensils)].sort()
  appliance = [...new Set(appliance)].sort()

  listIngredients(ingredients)
  listAppliance(ustensils)
  listUstensils(appliance)
}
// creation des Dropdown list's => ingredient - appareil - ustensile
const listIngredients = (listIngredients) => { 
  const ul = document.getElementById('ingredient-list')
  ul.innerHTML = ''
  listIngredients.forEach(ing => {
    listDropdown (ing, ul, 'ingredients')
  })
}
const listAppliance = (listAppliance) => {
  const ul = document.getElementById('appareil-list')
  listAppliance.forEach(appl => {
    listDropdown (appl, ul, 'appliance')
  })
}
const listUstensils = (listUstensils) => {
  const ul = document.getElementById('ustensil-list')
  listUstensils.forEach(ust => {
    listDropdown (ust, ul, 'ustensils')
  })
}

// *** init GLOBAL *** //
const init = async () => {
  // console.log(currentRecipes)

  updateRecipes(currentRecipes)

  mainRecherche(recipes)
  
  updateDropbox(recipes)

}

init()

