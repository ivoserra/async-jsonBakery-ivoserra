import data  from './data.js'

const dataJS= JSON.parse(data)
console.log(dataJS)

const cakeList = dataJS.cakes
// const biscuitList = dataJS.biscuits
// const breadList = dataJS.bread
// console.log(cakeList)

// function card(array){

const card = Object.values(dataJS).forEach((array)=>{

array.forEach(({type,author,title, ingredients,image})=>{

    const mainDiv =document.createElement('div')
    mainDiv.classList.add(`'mainCard','${type}'`)
    mainDiv.innerHTML= 
    `
    <div class="card" style="width: 18rem;">
        <img src="${image}" class=" image card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">${title}</p>
                <p class="card-text">${author}</p>
                <p class="card-text">Ingredients: ${ingredients}</p>
            </div>
     </div>
    `
        if(type === 'cakes'){
            document.querySelector('#cakes').appendChild(mainDiv)
        }
        if(type === 'biscuits'){
            document.querySelector('#biscuits').appendChild(mainDiv)
        }
        if(type === 'bread'){
            document.querySelector('#bread').appendChild(mainDiv)
        }
    })
})
// }
// card(cakeList)
// card(biscuitList)
// card(breadList)




