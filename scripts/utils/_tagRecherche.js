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
            btnTagsIngredients() 
           
        } 
        else if (li.classList.contains('appliance')) {
            currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                recipe.appliance.toLowerCase().includes(contentTag))
            console.log(currentRecipes.recipes)
            ul.removeChild(li)
            updateRecipes(currentRecipes)
            btnTagsAppliances()  
             
        }
        else if (li.classList.contains('ustensils')) {
           currentRecipes.recipes = currentRecipes.recipes.filter(recipe =>
                recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(contentTag)))
            console.log(currentRecipes.recipes)
            ul.removeChild(li)
            updateRecipes(currentRecipes)    
            btnTagsUstensils() 
           
        }
        // updateRecipes(currentRecipes)
        // console.log(currentRecipes)
        
        //*** Button Tags Filter Search creation ***// 
        
        function btnTagsIngredients() {
            const ingredientsTags = document.getElementById('ingredients_tags')
            let btnTagFilter = document.createElement('button')
        
            btnTagFilter.setAttribute('class', `btn-tags btn-${type}`)
            btnTagFilter.innerText = e.target.textContent

            for (let i = 0; i < btnTagFilter.length; i++) {
                btnTagFilter[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    let ulContent = this.nextElementSibling;
                    let span = this.firstElementChild
                    let inputFilter = this.lastElementChild

                    if (ulContent.style.display === "block") {
                        ulContent.style.display = "none";
                        inputFilter.style.display = "none"
                        span.style.display = "block"
                    } else {
                        inputFilter.style.display = "flex"
                        ulContent.style.display = "block";
                        span.style.display = "none"   
                    }
                });
            }
            let iconClose = document.createElement('i')
            iconClose.setAttribute('class', 'fa-regular fa-circle-xmark')
            iconClose.style.paddingLeft = '5px'

            iconClose.addEventListener('click', () => {
                const valueInput = document.querySelector('.form-control').value.toLowerCase()
                console.log(valueInput)

                btnTagFilter.remove()

                currentRecipes.recipes = recipes.filter(recipe =>       
                    recipe.name.toLowerCase().includes(valueInput) || 
                    recipe.description.toLowerCase().includes(valueInput) ||
                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(valueInput)))

                    // je liste les tags - je récupère les tag actifs
                    const btnTags = document.querySelectorAll('.btn-tags')
                    console.log(btnTags) 
                    btnTags.forEach(tag => {
                        console.log(tag.textContent)
                        // si c'est le tag ingredient je utilise le filtre d'ingredient
                        if(tag.classList.contains('btn-ingredients')){
                            currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                                recipe.ingredients.some(ingredient => 
                                    ingredient.ingredient.toLowerCase().includes(tag.textContent.toLowerCase())))
                            console.log(currentRecipes.recipes) 
                        }
                        // if(tag.classList.contains('.btn-appliance')){
                        //     currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                        //         recipe.appliance.toLowerCase().includes(tag.textContent.toLowerCase()))
                        //     console.log(currentRecipes.recipes)
                        // }
                        // if(tag.classList.contains('.btn-ustensils')){
                        //     currentRecipes.recipes = currentRecipes.recipes.filter(recipe =>
                        //         recipe.ustensils.some(ustensil => ustensil.toLowerCase().includestag.textContent.toLowerCase()))
                        //         console.log(currentRecipes.recipes)
                        // }
                    })
                    
                    // je parcour la list des tags - 
                    
                    //            si c'est tag tag ustensil ...
                    updateRecipes(currentRecipes)
                    updateDropbox(currentRecipes.recipes) 
            })

            if(btnTagFilter.classList.contains('btn-ingredients')) {
                ingredientsTags.prepend(btnTagFilter)
                btnTagFilter.appendChild(iconClose) 
            }
        } 

        function btnTagsAppliances() {
            const appliancesTags = document.getElementById('appliances_tags')
            let btnTagFilter = document.createElement('button')
        
            btnTagFilter.setAttribute('class', `btn-tags btn-${type}`)
            btnTagFilter.innerText = e.target.textContent
            
            for (let i = 0; i < btnTagFilter.length; i++) {
                btnTagFilter[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var ulContent = this.nextElementSibling;
                    var span = this.firstElementChild
                    var inputFilter = this.lastElementChild

                    if (ulContent.style.display === "block") {
                        ulContent.style.display = "none";
                        inputFilter.style.display = "none"
                        span.style.display = "block"
                    } else {
                        inputFilter.style.display = "flex"
                        ulContent.style.display = "block";
                        span.style.display = "none"   
                    }
                });
            }
            let iconClose = document.createElement('i')
            iconClose.setAttribute('class', 'fa-regular fa-circle-xmark')
            iconClose.style.paddingLeft = '5px'

            iconClose.addEventListener('click', () => {
                btnTagFilter.remove()
                const valueInput = document.querySelector('.form-control').value.toLowerCase()
                console.log(valueInput)

                btnTagFilter.remove()

                currentRecipes.recipes = recipes.filter(recipe =>       
                    recipe.name.toLowerCase().includes(valueInput) || 
                    recipe.description.toLowerCase().includes(valueInput) ||
                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(valueInput)))

                    // je liste les tags - je récupère les tag actifs
                    const btnTags = document.querySelectorAll('.btn-tags')
                    console.log(btnTags) 
                    btnTags.forEach(tag => {
                        console.log(tag.textContent)
                        // si c'est le tag ingredient je utilise le filtre d'ingredient
                        // if(tag.classList.contains('btn-ingredients')){
                        //     currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                        //         recipe.ingredients.some(ingredient => 
                        //             ingredient.ingredient.toLowerCase().includes(tag.textContent.toLowerCase())))
                        //     console.log(currentRecipes.recipes) 
                        // }
                        if(tag.classList.contains('.btn-appliance')){
                            currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                                recipe.appliance.toLowerCase().includes(tag.textContent.toLowerCase()))
                            console.log(currentRecipes.recipes)
                        }
                        // if(tag.classList.contains('.btn-ustensils')){
                        //     currentRecipes.recipes = currentRecipes.recipes.filter(recipe =>
                        //         recipe.ustensils.some(ustensil => ustensil.toLowerCase().includestag.textContent.toLowerCase()))
                        //         console.log(currentRecipes.recipes)
                        // }
                    })
                    
                    // je parcour la list des tags - 
                    
                    //  si c'est tag tag ustensil ...
                    updateRecipes(currentRecipes)
                    updateDropbox(currentRecipes.recipes) 
            })
            if(btnTagFilter.classList.contains('btn-appliance')) {
                appliancesTags.prepend(btnTagFilter)
                btnTagFilter.appendChild(iconClose) 
            }
        }   
        function btnTagsUstensils() {
            const ustensilsTags = document.getElementById('ustensils_tags')
            let btnTagFilter = document.createElement('button')
        
            btnTagFilter.setAttribute('class', `btn-tags btn-${type}`)
            btnTagFilter.innerText = e.target.textContent
            
            for (let i = 0; i < btnTagFilter.length; i++) {
                btnTagFilter[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var ulContent = this.nextElementSibling;
                    var span = this.firstElementChild
                    var inputFilter = this.lastElementChild

                    if (ulContent.style.display === "block") {
                        ulContent.style.display = "none";
                        inputFilter.style.display = "none"
                        span.style.display = "block"
                    } else {
                        inputFilter.style.display = "flex"
                        ulContent.style.display = "block";
                        span.style.display = "none"   
                    }
                });
            }
            let iconClose = document.createElement('i')
            iconClose.setAttribute('class', 'fa-regular fa-circle-xmark')
            iconClose.style.paddingLeft = '5px'

            iconClose.addEventListener('click', () => {
                btnTagFilter.remove()
                const valueInput = document.querySelector('.form-control').value.toLowerCase()
                console.log(valueInput)

                btnTagFilter.remove()

                currentRecipes.recipes = recipes.filter(recipe =>       
                    recipe.name.toLowerCase().includes(valueInput) || 
                    recipe.description.toLowerCase().includes(valueInput) ||
                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(valueInput)))

                    // je liste les tags - je récupère les tag actifs
                    const btnTags = document.querySelectorAll('.btn-tags')
                    console.log(btnTags) 
                    btnTags.forEach(tag => {
                        console.log(tag.textContent)
                        // si c'est le tag ingredient je utilise le filtre d'ingredient
                        // if(tag.classList.contains('btn-ingredients')){
                        //     currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                        //         recipe.ingredients.some(ingredient => 
                        //             ingredient.ingredient.toLowerCase().includes(tag.textContent.toLowerCase())))
                        //     console.log(currentRecipes.recipes) 
                        // }
                        // if(tag.classList.contains('.btn-appliance')){
                        //     currentRecipes.recipes = currentRecipes.recipes.filter(recipe => 
                        //         recipe.appliance.toLowerCase().includes(tag.textContent.toLowerCase()))
                        //     console.log(currentRecipes.recipes)
                        // }
                        if(tag.classList.contains('.btn-ustensils')){
                            currentRecipes.recipes = currentRecipes.recipes.filter(recipe =>
                                recipe.ustensils.some(ustensil => ustensil.toLowerCase().includestag.textContent.toLowerCase()))
                                console.log(currentRecipes.recipes)
                        }
                    })
                    
                    // je parcour la list des tags - 
                    
                    //            si c'est tag tag ustensil ...
                    updateRecipes(currentRecipes)
                    updateDropbox(currentRecipes.recipes)
                
            })
            if(btnTagFilter.classList.contains('btn-ustensils')) {
                ustensilsTags.prepend(btnTagFilter)
                btnTagFilter.appendChild(iconClose) 
            }
        } 
        
    })

    // rapeller updateDropbox à chaque fois   
}





