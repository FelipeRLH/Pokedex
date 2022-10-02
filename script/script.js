// ---------- SELEÇÃO ------------
let btn = document.getElementById("pesquisarPok")
let form = document.getElementById("formBusca")
let urlApi = "https://pokeapi.co/api/v2/pokemon/";

// VIEWPORT1
let view1 = document.getElementById("view1")

// VIEWPOR2
let type = document.querySelector("#type")
let sts = document.querySelector("#stats")






// ------- 1 - BOTÃO DE ENVIO ---------
btn.addEventListener("mousedown", (e) => {
    e.preventDefault();
    btn.innerHTML = `<img id="imgBtnPress" src="./style/botão pressionado.png">`

})


// -------- 2 - FORM DE BUSCA ---------
btn.addEventListener("mouseup", () => {
    btn.innerHTML = `<img id="imgbtn" src="./style/botão normal.png">`

    let nameInput = document.getElementById("inputBusca")
    let nameValue = nameInput.value.trim().toLocaleLowerCase()


    // FETCH TRATAMENTO
    let fetchPokemon = async e => {
        let response = await fetch(`${urlApi}${nameValue}`)
        let data = await response.json()

        View1name(data)

        View2Type(data)
        View2STATS(data)


        console.log(data)
    }
    fetchPokemon()

})


// -------- 3 - FUNÇÕES NAS VIEWPORTS ---------
// VIEWPORT1
let View1name = (e) => {
    let fotoPokemon = e.sprites.front_default
    let namePokemon = e.name[0].toUpperCase() + e.name.substring(1);

    if (e.height <= 9) {
        view1.innerHTML = `<img id="menor9cm" src="${fotoPokemon}" alt="">`
    }
    else if (e.height <= 15) {
        view1.innerHTML = `<img id="menor15cm" src="${fotoPokemon}" alt="">`
    }
    else{
        view1.innerHTML = `<img id="outroscm" src="${fotoPokemon}" alt="">`
    }

    view1.innerHTML += `<h2 class="namePokemon">#${e.id}-${namePokemon}</h2>`
}


// VIEWPORT2
let View2Type = (e) => {
    let lgh = e.types.length

    if (lgh == 2) {
        type.innerHTML = `<h4><span class="spanView2">Tipo:</span> ${e.types[0].type.name} ${e.types[1].type.name}</h4>`
    }
    else {
        type.innerHTML = `<h4><span class="spanView2">Tipo:</span> ${e.types[0].type.name}</h4>`
    }
}

let View2STATS = (e) => {
    sts.innerHTML = `
    <div class="hp">${e.stats[0].base_stat}<br><span class="spanView2">HP</span></div>
    <div class="atk">${e.stats[1].base_stat}<br><span class="spanView2">ATK</span></div>
    <div class="def">${e.stats[2].base_stat}<br><span class="spanView2">DEF</span></div>
    <div class="speed">${e.stats[5].base_stat}<br><span class="spanView2">SPEED</span></div>
    `
}

