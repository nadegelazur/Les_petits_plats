import { recipes } from '../../data/recipes.js'
import { updateRecipes } from '../pages/index.js'

const mainInput = document.querySelector('.form-control')

export const resultSearchRecipes = (recipes) => {
  console.log(recipes)

  function filterList (recipes) {
    const filter = mainInput.value.toLowerCase()
    const listRecipes = document.querySelectorAll('.card')

    listRecipes.forEach(recipe => {
      const text = recipe.textContent
      if (text.toLowerCase().includes(filter.toLowerCase())) {
        listRecipes.style.display = ''
      } else {
        listRecipes.style.display('none')
      }
    })
  }
  mainInput.addEventListener('input', filterList)
  updateRecipes(recipes)
}