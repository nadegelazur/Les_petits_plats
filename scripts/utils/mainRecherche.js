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
      let results = []
       
      currentRecipes.recipes = [...recipes];
      console.log(currentRecipes)
      for(let i = 0; currentRecipes.recipes.length > i; i++) {

              if(currentRecipes.recipes[i].name.toLowerCase().includes(valueInput) ||
                currentRecipes.recipes[i].description.toLowerCase().includes(valueInput)) {
                  results.push(currentRecipes.recipes[i]);
                  
                } else {
                  for(let y = 0; currentRecipes.recipes[i].ingredients.length > y; y++) {      
                    if(currentRecipes.recipes[i].ingredients[y].ingredient.toLowerCase().includes(valueInput)) {
                      results.push(currentRecipes.recipes[i]);
                      break;
                    }
                  }               
                }   
            }
      currentRecipes.recipes = [...results]

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
