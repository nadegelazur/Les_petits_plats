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
      console.log(currentRecipes.recipes)
        // tout ça en boucle for ==== currentRecipes.recipes = recipes.filter

      if (currentRecipes.recipes.length == 0) {
        errorMessage.style.display = 'block'
      }        
    } else {
      // j'enleve le msg d'error
      errorMessage.style.display = 'none'
      //j'afiche la liste de recettes
    }
  updateRecipes(currentRecipes)   
  updateDropbox(currentRecipes.recipes)
  })
}
