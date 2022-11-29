import { recipes } from '../../data/recipes.js'
import { currentRecipes, updateRecipes } from '../pages/index.js'
import { updateDropbox } from '../pages/index.js'

// creation du li avec les mots clés
export function listDropdown (ing, ul, type) {
    const li = document.createElement('li')
    li.setAttribute('class', `dropdown-item ${type}`)  
    li.innerText = ing
    ul.appendChild(li)
    // when we click on dropdown li
    li.addEventListener('click', e => { 
        let contentTag = e.target.textContent.toLowerCase()
        console.log(contentTag)
        
        // filtrer les recettes
        if(li.classList.contains('ingredients')) { 
            currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                recipe.ingredients.some(ingredient => 
                    ingredient.ingredient.toLowerCase().includes(contentTag)))
            console.log(currentRecipes.recipes)

            ul.removeChild(li)
            updateRecipes(currentRecipes)  
            btnTagsCreate() 
        } 
        else if (li.classList.contains('appliance')) {
            currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                recipe.appliance.toLowerCase().includes(contentTag))
            console.log(currentRecipes.recipes)

            ul.removeChild(li)
            updateRecipes(currentRecipes)
            btnTagsCreate()     
        }
        else if (li.classList.contains('ustensils')) {
           currentRecipes.recipes = currentRecipes.recipes.filter(recipe =>
                recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(contentTag)))
            console.log(currentRecipes.recipes)

            ul.removeChild(li)
            updateRecipes(currentRecipes)    
            btnTagsCreate() 
        }
        
        //*** Button Tags Filter Search creation ***// 
        
        function btnTagsCreate() {
            const ingredientsTags = document.querySelector('.row_tags')
            let btnTagFilter = document.createElement('button')
        
            btnTagFilter.setAttribute('class', `btn-tags btn-${type}`)
            btnTagFilter.innerText = e.target.textContent

            let iconClose = document.createElement('i')
            iconClose.setAttribute('class', 'fa-regular fa-circle-xmark')
            iconClose.style.paddingLeft = '5px'

            iconClose.addEventListener('click', () => {
                const valueInput = document.querySelector('.form-control').value.toLowerCase()
                console.log(valueInput)

                btnTagFilter.remove()

                // этот фильтр предназначен для возврата на основной поиск (MainRecherche), исп. тот же код
                currentRecipes.recipes = recipes.filter(recipe =>       
                    recipe.name.toLowerCase().includes(valueInput) || 
                    recipe.description.toLowerCase().includes(valueInput) ||
                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(valueInput)))

                    // je liste les tags - je récupère les tag actifs
                    const btnTags = document.querySelectorAll('.btn-tags')
                    console.log(btnTags)
                    // je parcour la liste des tags -  
                    btnTags.forEach(tag => {
                        console.log(tag.textContent)
                        // si c'est le tag ingredient je utilise le filtre d'ingredient
                        if(tag.classList.contains('btn-ingredients')){
                            currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                                recipe.ingredients.some(ingredient => 
                                    ingredient.ingredient.toLowerCase().includes(tag.textContent.toLowerCase())))
                            console.log(currentRecipes.recipes) 
                        }
                        if(tag.classList.contains('.btn-appliance')){
                            currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                                recipe.appliance.toLowerCase().includes(tag.textContent.toLowerCase()))
                            console.log(currentRecipes.recipes)
                        }
                        // si c'est tag ustensil ...
                        if(tag.classList.contains('.btn-ustensils')){
                            currentRecipes.recipes = currentRecipes.recipes.filter(recipe =>
                                recipe.ustensils.some(ustensil => ustensil.toLowerCase().includestag.textContent.toLowerCase()))
                                console.log(currentRecipes.recipes)
                        }
                    })
   
                    updateRecipes(currentRecipes)
                    updateDropbox(currentRecipes.recipes) 
            })

            ingredientsTags.prepend(btnTagFilter)
            btnTagFilter.appendChild(iconClose) 
            
        } 
    })
}

//**  Button Click - Ingredient */
const btnIng = document.getElementById('ingredient')
btnIng.addEventListener('click', ingredientBtnSearchInput)
function ingredientBtnSearchInput() {
    const btnFilterIng = document.querySelector('.filter-ingredient')
    const inputSearchIng = document.getElementById('search-ingredients')
    
    let value = btnIng.getAttribute('aria-expanded')
    if(value == 'true') {
        console.log('close ul')
        inputSearchIng.setAttribute('value', 'Ingrédients')
        inputSearchIng.setAttribute('type', 'button')
        btnFilterIng.classList.replace('col-md-5', 'col-md-3')

    } else {
        console.log('open ul') 
        inputSearchIng.removeAttribute('value')
        inputSearchIng.setAttribute('type', 'search')
        btnFilterIng.classList.replace('col-md-3', 'col-md-5')
    }
}

//**  Button Click - Appareil */
const btnApp = document.getElementById('appareil')
btnApp.addEventListener('click', appareilBtnSearchInput)
function appareilBtnSearchInput() {
    const btnFilterApp = document.querySelector('.filter-appareil')
    
    let value = btnApp.getAttribute('aria-expanded')
    if(value == 'true') {
        console.log('close ul')
        inputSearchApp.setAttribute('value', 'Appareils')
        inputSearchApp.setAttribute('type', 'button')
        btnFilterApp.classList.replace('col-md-5', 'col-md-3')

    } else {
        console.log('open ul')
        const inputSearchApp = document.getElementById('search-appareils')
        inputSearchApp.removeAttribute('value')
        inputSearchApp.setAttribute('type', 'search')
        btnFilterApp.classList.replace('col-md-3', 'col-md-5')
    }
}

//**  Button Click - Unstensiles */
const btnUst = document.getElementById('ustensil')
btnUst.addEventListener('click', ustensileBtnSearchInput)
function ustensileBtnSearchInput() {
    const btnFilterUst = document.querySelector('.filter-ustensil')
   
    let value = btnUst.getAttribute('aria-expanded')
    if(value == 'true') {
        console.log('close ul')
        inputSearchUst.setAttribute('value', 'Ustensils')
        inputSearchUst.setAttribute('type', 'button')
        btnFilterUst.classList.replace('col-md-5', 'col-md-3')

    } else {
        console.log('open ul')
        const inputSearchUst = document.getElementById('search-ustensils')
        inputSearchUst.removeAttribute('value')
        inputSearchUst.setAttribute('type', 'search')
        btnFilterUst.classList.replace('col-md-3', 'col-md-5')
    }
}


//*** Input Click for INGREDIENTS */ 
const inputSearchIng = document.getElementById('search-ingredients')
inputSearchIng.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    const listIng = document.querySelectorAll('.ingredients')
    listIng.forEach(item => {
        console.log(item.textContent)
        if(item.textContent.toLowerCase().includes(e.target.value)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})
    
//*** Input Click for APPAREILS */ 
const inputSearchApp = document.getElementById('search-appareils')
inputSearchApp.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    const listApp = document.querySelectorAll('.appliance')
    listApp.forEach(item => {
        console.log(item.textContent)
        if(item.textContent.toLowerCase().includes(e.target.value)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})

//*** Input Click for UNSTENSILE */ 
const inputSearchUst = document.getElementById('search-ustensils')
inputSearchUst.addEventListener('keyup', (e) => {
    console.log(e.target.value)
    const listUst = document.querySelectorAll('.ustensils')
    listUst.forEach(item => {
        console.log(item.textContent)
        if(item.textContent.toLowerCase().includes(e.target.value)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
})
