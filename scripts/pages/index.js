import { recipes } from '../../data/recipes.js'
import { RecipeFactory } from '../factory/recipeFactory.js'
import { mainRecherche } from '../utils/mainRecherche.js'


export const updateRecipes = (recipes) => {
  //console.log(recipes)
  const cardRecipes = document.querySelector('.container__recipes .row')
  cardRecipes.innerHTML = ''
  recipes.forEach(recipe => {
    const cardModel = new RecipeFactory(recipe)
    cardRecipes.innerHTML += cardModel.createHtml()
  })
}

const updateDropbox = (recipes) => {
  const ingredients = []
  const newIngredients = []
  const ustensils = []
  const appliance = []

  recipes.forEach(recipe => {
    // Ingredients
    ingredients.push(...recipe.ingredients)
    ingredients.forEach(ingredient => {
      // console.log(ingredient.ingredient)
      newIngredients.push(ingredient.ingredient)
    })
    // Ustensils
    ustensils.push(...recipe.ustensils) // tableau
    // Appliance
    appliance.push(recipe.appliance)
    
  })
  console.log(newIngredients)
  console.log(ustensils)
  console.log(appliance)
}

const btnIngredients = document.getElementById('ingredient')

btnIngredients.addEventListener('click', openDropbox)
function openDropbox() {
  const dropdownMenu = document.querySelector('.dropdown-menu')

}
document.querySelector('.fa-circle-xmark').addEventListener('click', (e) => {
  console.log('close tag')
  const tagName = document.querySelector('.tag-filter')
  tagName.style.display = 'none'
})
// *** init GLOBAL *** //
const init = async () => {

  updateRecipes(recipes)

  mainRecherche(recipes)
  
  updateDropbox(recipes)
}

init()

const dropdownMenu = document.querySelector('.dropdown-menu')