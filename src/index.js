// write your code here
const spiceUrl = `http://localhost:3000/spiceblends`
const ingredientUrl = `http://localhost:3000/ingredients`
const mainImg = document.querySelector('#spice-blend-detail')
const imgBar = document.querySelector('#spice-images')
const updateForm = document.querySelector('#update-form')
const ingredientForm = document.querySelector('#ingredient-form')
console.log(ingredientForm)
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
     }



//##########Logic###########//


function titleFormUpdate(spice) {
    updateForm.dataset.id = spice.id
    updateForm.title.value = spice.title
}

function addSpiceIngredient(e){
    e.preventDefault()
    console.log(e)
    let ingName = `<li>${e.target.name.value}</li>`
    
    // const name = e.target.name.value
    // const spiceId = e.target.spiceId
    // const id = e.target.dataset.id 
    // fetch(`${spiceUrl}/${id}`, {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({ingredients: name})
    // })
    // .then(fetchSpice)
   
    
}

function updateSpiceInfo(e){
    e.preventDefault()
    const title = e.target.title.value
    const id = e.target.dataset.id 
    fetch(`${spiceUrl}/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title})
    })
    .then(fetchSpice)
   
    
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
        
        titleFormUpdate(spice)
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
    
    
    //###########Event Handling#########//
    updateForm.addEventListener("submit", updateSpiceInfo)
    ingredientForm.addEventListener("submit", addSpiceIngredient)
    
    fetchSpice()