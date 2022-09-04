let mySearch = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const handlesFromLocalStorage = JSON.parse(localStorage.getItem("mySearch"))
// const tabBtn = document.getElementById("tab-btn")
const pegaBtn = document.getElementById("pegaBot")

if (handlesFromLocalStorage) {
    mySearch = handlesFromLocalStorage
    render(mySearch)
}

const dados = [
        {
            avatar: "https://user-images.githubusercontent.com/102765815/188288761-00166d5f-a014-48b1-9f62-54480b3edb5e.png",
            all: 18,
            info: "<p>Um dos critérios que mais teve peso na análise foi o índice Temporal</p>"
        },   
    
        {
            avatar: "https://user-images.githubusercontent.com/102765815/188288761-00166d5f-a014-48b1-9f62-54480b3edb5e.png",
            all: 74,
            info: "<p>Um dos critérios que mais teve peso na análise foi o índice Temporal</p>"
        }, 
    
        {
            avatar: "https://user-images.githubusercontent.com/102765815/188288761-00166d5f-a014-48b1-9f62-54480b3edb5e.png",
            all: 33,
            info: "<p>Um dos critérios que mais teve peso na análise foi o índice de Sentimento</p>"
        },

        {
            avatar: "https://user-images.githubusercontent.com/102765815/188288761-00166d5f-a014-48b1-9f62-54480b3edb5e.png",
            all: 57,
            info: "<p>Um dos critérios que mais teve peso na análise foi o índice Temporal</p>"
        },

        {
            avatar: "https://user-images.githubusercontent.com/102765815/188288761-00166d5f-a014-48b1-9f62-54480b3edb5e.png",
            all: 86,
            info: "<p>Um dos critérios que mais teve peso na análise foi o índice Temporal</p>"
        },

        {
            avatar: "https://user-images.githubusercontent.com/102765815/188288761-00166d5f-a014-48b1-9f62-54480b3edb5e.png",
            all: 29,
            info: "<p>Um dos critérios que mais teve peso na análise foi o índice de Sentimento</p>"
        },
    ];

// async function requisicao(i){
//     const response = await fetch (https://backend.pegabot.com.br/botometer?socialnetwork=twitter&profile=${i}&search_for=profile&limit=1`)
//     const dados = await response.json()
//     const profile = dados.profiles
//     const botProbability = profile[0].bot_probability
//     const porcentagem = Math.ceil(botProbability.all * 100)
//     const criterio = botProbability.info

//     document.getElementById('porcentagem').innerHTML = porcentagem
//     document.getElementById('info').innerHTML = criterio

//     console.log(porcentagem);
//     console.log(criterio);
// }

pegaBtn.addEventListener('click', function () {
    const inputI = inputEl.value
    const input = inputI.replace("@", '')
    console.log(input)
    // requisicao(input)

    const index = Math.floor(Math.random() * 7)
    
    const porcentagem = dados[index].all
    const criterio = dados[index].info
    const foto = dados[index].avatar

    mySearch.push(input)
    inputEl.value = ""
    localStorage.setItem("mySearch", JSON.stringify(mySearch) )
    render(mySearch)

    document.getElementById('porcentagem').innerHTML = porcentagem + '%'
    document.getElementById('info').innerHTML = criterio
    document.querySelector('#img').innerHTML = `<br><img width="70px" height="70px" src="${foto}">`;
    document.querySelector('#link').innerHTML = `<a href="http://https://pegabot.com.br/resultados?socialnetwork=twitter&profile=%40${input}&search_for=profile&limit=12">Clique aqui para acessar a análise completa.</a>`
})

// tabBtn.addEventListener("click", function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         mySearch.push(tabs[0].url)
//         localStorage.setItem("mySearch", JSON.stringify(mySearch))
//         render(mySearch)
//     })
// })

function render(handles) {
    let listItems = ""
    for (let i = 0; i < handles.length; i++) {
        listItems += `
            <li>
                    ${handles[i]}
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    mySearch = []
    render(mySearch)
})
