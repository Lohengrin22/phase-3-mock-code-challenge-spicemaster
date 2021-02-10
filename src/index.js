// write your code here
const spiceUrl = `http://localhost:3000/spiceblends`
const ingredientUrl = `http://localhost:3000/ingredients`
const mainImg = document.querySelector('#spice-blend-detail')
const imgBar = document.querySelector('#spice-images')

//##########Fetch Requests##########//
function fetchSpice(){
    fetchIngredients()
    fetch(spiceUrl)
        .then(res => res.json())
        .then(spicesArray => {
            renderSpice(spicesArray[0])
            renderAllSpices(spicesArray)})
        // .then(spicesArray => {
        //     spicesArray.forEach(spice => {renderSpice(spice)});
        // })
    }

function fetchIngredients(spiceId){
        fetch(ingredientUrl)
            .then(res => res.json())
            .then(ingredientsArray => {
                renderIngredients(ingredientsArray)
                // renderAllSpices(spicesArray)
            })
            // .then(spicesArray => {
            //     spicesArray.forEach(spice => {renderSpice(spice)});
            // })
     }



//##########Logic###########//

function renderIngredients(ingredient){
    
}


function renderAllSpices(spicesArray){
    imgBar.innerHTML = ""

    spicesArray.forEach(spice => {
        addSpiceToBar(spice)
      })
}

function addSpiceToBar(spice){
    imgBar.innerHTML += `
    <img class="detail-image" src="${spice.image}" alt="${spice.title}" />
    `
}


function renderSpice(spice){
    let spiceIngredient = []
    fetch(ingredientUrl)
    .then(res => res.json())
    .then(ingredientsArray => { 
        ingredientsArray.forEach(ingredient =>{
            if(ingredient.spiceblendId === spice.id)
            spiceIngredient.push(ingredient.name)
            
            mainImg.innerHTML = `
            <img class="detail-image" src="${spice.image}" alt="${spice.title}" />
              <h2 class="title">${spice.title}</h2>
              <div class="ingredients-container">
                <h4>Ingredients:</h4>
                <ul class="ingredients-list">
                <li>${spiceIngredient[0]}</li>
                <li>${spiceIngredient[1]}</li>
                <li>${spiceIngredient[2]}</li>
                <li>${spiceIngredient[3]}</li>
                <li>${spiceIngredient[4]}</li>
                </ul>
            `
        })
        
        // renderAllSpices(spicesArray)
    })
    // .then(spicesArray => {
    //     spicesArray.forEach(spice => {renderSpice(spice)});
    // })

}

function getIngredients(ingredientsArr){
    ingredientsArr.forEach(ingredients => {
        addIngredientsToSpice(ingredients)
    })
}

function addIngredientsToSpice(ingredients){

}


fetchSpice()