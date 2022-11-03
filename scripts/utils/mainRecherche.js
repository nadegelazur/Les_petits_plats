import { updateRecipes } from '../pages/index.js'

export const mainRecherche = (recipes) => {
  const mainInput = document.querySelector('.form-control')

  mainInput.addEventListener('input', (e) => {

    const valueInput = e.target.value.toLowerCase()

    if (valueInput.length > 2) {
      // console.log('startRecherche')
      console.log(valueInput)
      
      // function getIngredients () {

      //   const ingredients = []
      //   recipes.forEach(recipe => {
      //     ingredients.push(...recipe.ingredients)
      //     // console.log(...recipe.ingredients)
      //   })
        
      //   const newIngredients = []
      //   ingredients.forEach(ingredient => {
      //     console.log(ingredient.ingredient)
      //     newIngredients.push(ingredient.ingredient)
      //   })
      //   console.log(newIngredients)
      // }
      

      const newArray = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(valueInput) || 
        recipe.description.toLowerCase().includes(valueInput)
      )  

      const newIngridient = (recipes) => {
        const ingredients = []
        recipes.forEach(recipe => {
            ingredients.push(...recipe.ingredients)
        })
        const newIngredients = []
        ingredients.forEach(ingredient => {
            console.log(ingredient.ingredient)
            newIngredients.push(ingredient.ingredient)
        })
        console.log(newIngredients)
      }
      newIngridient(recipes)

      updateRecipes(newArray)
    }
        
  })
  
}


//  || ingredients.ingredient.toLowerCase().includes(valueInput)