import { updateRecipes } from '../pages/index.js'
import { currentRecipes } from '../pages/index.js'
import { updateDropbox } from '../pages/index.js'

export const mainRecherche = (recipes) => {
  const mainInput = document.querySelector('.form-control')
  const errorMessage = document.querySelector('.error-msg')

  mainInput.addEventListener('input', (e) => {
    
    let valueInput = e.target.value.toLowerCase()
    // console.log(valueInput)
    if (valueInput.length > 2) {
      // Objet - currentRecipes.recipes
      currentRecipes.recipes = recipes.filter(recipe =>       
        recipe.name.toLowerCase().includes(valueInput) || 
        recipe.description.toLowerCase().includes(valueInput) ||
        recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(valueInput)))       
    
      if (currentRecipes.recipes.length == 0) {
        errorMessage.style.display = 'block'
      }        
    } else {
      errorMessage.style.display = 'none'
    }
  updateRecipes(currentRecipes)   
  updateDropbox(currentRecipes.recipes)
  })
}
