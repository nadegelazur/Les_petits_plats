/* eslint-disable no-constant-condition */
export class RecipeFactory {
  constructor (data) {
    // console.log(data.ingredients)
    this.id = data.id
    this.name = data.name
    this.servings = data.servings
    this.ingredients = data.ingredients
    this.time = data.time
    this.description = data.description
    this.appliance = data.appliance
    this.ustensils = data.ustensils

    // console.log(this.ingredients)
    // console.log(this.ingredients.length)
  }

  ingridientsHtml () {
    let htmlContent = ''
    for (const ingridient of this.ingredients) {
      // console.log(ingridient)
      let ingridientQuantity = ingridient.quantity
      let ingridientUnit = ingridient.unit
      if (ingridient.unit === undefined) {
        ingridientUnit = ' '
      }
      if (ingridient.quantity === undefined) {
        ingridientQuantity = ' '
      }
      if (ingridient.unit === 'grammes') {
        ingridientUnit = 'g'
      }
      if (ingridient.unit === ('cuillères à soupe') || ('cuillère à soupe')) {
        ingridientUnit = 'càs'
      }
      if (ingridient.unit === 'sachets') {
        ingridientUnit = 'sc'
      }
      if (ingridient.unit === 'litre') {
        ingridientUnit = 'l'
      }
      if (ingridient.unit === 'boites') {
        ingridientUnit = 'bts'
      }
      if (ingridient.unit === 'tranches') {
        ingridientUnit = 'trchs'
      }
      if (ingridient.unit === ('cuillères à café') && ('cuillère à café')) {
        ingridientUnit = 'càf'
      }
      if (ingridient.unit === 'gousses') {
        ingridientUnit = 'gouss'
      }
      if (ingridient.unit === 'verres') {
        ingridientUnit = 'verr'
      }
      if (ingridient.unit === 'tasses') {
        ingridientUnit = 'tass'
      }
      htmlContent += `
                      <strong>${ingridient.ingredient}:</strong>
                      <span>${ingridientQuantity}
                      ${ingridientUnit}<br></span>                      
                      `
    }

    return htmlContent
  }

  createHtml () {
    return `      
          <div class="col-12 col-sm-6 col-md-4 mb-4 template-card">
            <div class="card w-100 h-100">
                <img src="" alt="" class="card-img-top rounded-top">
                <div class="card-body">
                  <div class="row">
                    <h5 class="col-9 col-sm-6 col-md-8 card-title text-md-start">${this.name}</h5>
                    <h5 class="col-3 col-sm-6 col-md-4 card-time  text-end">
                      <i class="fa-regular fa-clock"></i>${this.time} min
                    </h5>
                  </div>
                  <div class="row">  
                      <p class="col-4 col-sm-6 col-md-6 card-ingridients">              
                      ${this.ingridientsHtml()}</p>
                      <p class="col-8 col-sm-6 col-md-6 card-description">
                      ${this.description}</p>                 
                  </div>
                </div>   
            </div>
          </div> 
    `
  }
}

{/* <p class="col-md-6 card-ingridients">${this.ingridientsHtml()}</p> */}