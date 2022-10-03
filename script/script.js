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


// -------- VIEWPORT 1 ---------

let View1name = (e) => {
    let fotoPokemon = e.sprites.front_default
    let namePokemon = e.name[0].toUpperCase() + e.name.substring(1);

    if (e.height <= 9) {
        view1.innerHTML = `<img id="menor9cm" src="${fotoPokemon}" alt="">`
    }
    else if (e.height <= 15) {
        view1.innerHTML = `<img id="menor15cm" src="${fotoPokemon}" alt="">`
    }
    else {
        view1.innerHTML = `<img id="outroscm" src="${fotoPokemon}" alt="">`
    }

    view1.innerHTML += `<h2 class="namePokemon">#${e.id}-${namePokemon}</h2>`
}


// -------- VIEWPORT 2 ---------
let View2Type = (e) => {
    let lgh = e.types.length
    if (lgh == 2) {
        type.innerHTML = `<h4><span class="spanView2">Tipo:</span> 
                        <span id="spanType">${e.types[0].type.name}</span> <span id="spanType1">${e.types[1].type.name}</span></h4>`

        let spanType = document.getElementById("spanType")
        let spanType1 = document.getElementById("spanType1")
        switch (e.types[0].type.name) {

            case "normal":
                spanType.style.backgroundImage = "linear-gradient(#dbd8d0, #8d8c83, #dbd8d0)"
                break;
            case "poison":
                spanType.style.backgroundImage = "linear-gradient(#aa6fab, #69276c, #aa6fab)"
                break;
            case "psychic":
                spanType.style.backgroundImage = "linear-gradient(#ef92af, #d93568, #ef92af)"
                break;
            case "grass":
                spanType.style.backgroundImage = "linear-gradient(#7dc844, #285e1c, #7dc844)"
                break;
            case "ground":
                spanType.style.backgroundImage = "linear-gradient(#d7b964, #695927, #d7b964)"
                break;
            case "ice":
                spanType.style.backgroundImage = "linear-gradient(#b4edff, #6bd4f2, #b4edff)"
                break;
            case "fire":
                spanType.style.backgroundImage = "linear-gradient(#f07b56, #c91f03, #f07b56)"
                break;
            case "rock":
                spanType.style.backgroundImage = "linear-gradient(#bea85e, #9f893e, #bea85e)"
                break;
            case "dragon":
                spanType.style.backgroundImage = "linear-gradient(#a99ae8, #221c45, #a99ae8)"
                break;
            case "water":
                spanType.style.backgroundImage = "linear-gradient(#87c1fb, #0b68c4, #87c1fb)"
                break;
            case "bug":
                spanType.style.backgroundImage = "linear-gradient(#cad36e, #879708, #cad36e)"
                break;
            case "dark":
                spanType.style.backgroundImage = "linear-gradient(#90807c, #1c1712, #90807c)"
                break;
            case "fighting":
                spanType.style.backgroundImage = "linear-gradient(#91513b, #5f2716, #91513b)"
                break;
            case "ghost":
                spanType.style.backgroundImage = "linear-gradient(#5f60b6, #211e40, #5f60b6)"
                break;
            case "steel":
                spanType.style.backgroundImage = "linear-gradient(#bdbbc9, #8f8e9d, #bdbbc9)"
                break;
            case "flying":
                spanType.style.backgroundImage = "linear-gradient(#c0c9f5, #5d74d3, #c0c9f5)"
                break;
            case "electric":
                spanType.style.backgroundImage = "linear-gradient(#e98f07, #e98f07, #e98f07)"
                break;
            case "fairy":
                spanType.style.backgroundImage = "linear-gradient(#fbe9fe, #cd89d2, #fbe9fe)"
                break;
        }
        switch (e.types[1].type.name) {

            case "normal":
                spanType1.style.backgroundImage = "linear-gradient(#dbd8d0, #8d8c83, #dbd8d0)"
                break;
            case "poison":
                spanType1.style.backgroundImage = "linear-gradient(#aa6fab, #69276c, #aa6fab)"
                break;
            case "psychic":
                spanType1.style.backgroundImage = "linear-gradient(#ef92af, #d93568, #ef92af)"
                break;
            case "grass":
                spanType1.style.backgroundImage = "linear-gradient(#7dc844, #285e1c, #7dc844)"
                break;
            case "ground":
                spanType1.style.backgroundImage = "linear-gradient(#d7b964, #695927, #d7b964)"
                break;
            case "ice":
                spanType1.style.backgroundImage = "linear-gradient(#b4edff, #6bd4f2, #b4edff)"
                break;
            case "fire":
                spanType1.style.backgroundImage = "linear-gradient(#f07b56, #c91f03, #f07b56)"
                break;
            case "rock":
                spanType1.style.backgroundImage = "linear-gradient(#bea85e, #9f893e, #bea85e)"
                break;
            case "dragon":
                spanType1.style.backgroundImage = "linear-gradient(#a99ae8, #221c45, #a99ae8)"
                break;
            case "water":
                spanType1.style.backgroundImage = "linear-gradient(#87c1fb, #0b68c4, #87c1fb)"
                break;
            case "bug":
                spanType1.style.backgroundImage = "linear-gradient(#cad36e, #879708, #cad36e)"
                break;
            case "dark":
                spanType1.style.backgroundImage = "linear-gradient(#90807c, #1c1712, #90807c)"
                break;
            case "fighting":
                spanType1.style.backgroundImage = "linear-gradient(#91513b, #5f2716, #91513b)"
                break;
            case "ghost":
                spanType1.style.backgroundImage = "linear-gradient(#5f60b6, #211e40, #5f60b6)"
                break;
            case "steel":
                spanType1.style.backgroundImage = "linear-gradient(#bdbbc9, #8f8e9d, #bdbbc9)"
                break;
            case "flying":
                spanType1.style.backgroundImage = "linear-gradient(#c0c9f5, #5d74d3, #c0c9f5)"
                break;
            case "electric":
                spanType1.style.backgroundImage = "linear-gradient(#e98f07, #e98f07, #e98f07)"
                break;
            case "fairy":
                spanType1.style.backgroundImage = "linear-gradient(#fbe9fe, #cd89d2, #fbe9fe)"
                break;
        }
    }

    else {
        type.innerHTML = `<h4><span class="spanView2">Tipo:</span> 
                        <span id="spanType" class="tipos">${e.types[0].type.name}</span></h4>`

        switch (e.types[0].type.name) {
            case "normal":
                spanType.style.backgroundImage = "linear-gradient(#dbd8d0, #8d8c83, #dbd8d0)"
                break;
            case "poison":
                spanType.style.backgroundImage = "linear-gradient(#aa6fab, #69276c, #aa6fab)"
                break;
            case "psychic":
                spanType.style.backgroundImage = "linear-gradient(#ef92af, #d93568, #ef92af)"
                break;
            case "grass":
                spanType.style.backgroundImage = "linear-gradient(#7dc844, #285e1c, #7dc844)"
                break;
            case "ground":
                spanType.style.backgroundImage = "linear-gradient(#d7b964, #695927, #d7b964)"
                break;
            case "ice":
                spanType.style.backgroundImage = "linear-gradient(#b4edff, #6bd4f2, #b4edff)"
                break;
            case "fire":
                spanType.style.backgroundImage = "linear-gradient(#f07b56, #c91f03, #f07b56)"
                break;
            case "rock":
                spanType.style.backgroundImage = "linear-gradient(#bea85e, #9f893e, #bea85e)"
                break;
            case "dragon":
                spanType.style.backgroundImage = "linear-gradient(#a99ae8, #221c45, #a99ae8)"
                break;
            case "water":
                spanType.style.backgroundImage = "linear-gradient(#87c1fb, #0b68c4, #87c1fb)"
                break;
            case "bug":
                spanType.style.backgroundImage = "linear-gradient(#cad36e, #879708, #cad36e)"
                break;
            case "dark":
                spanType.style.backgroundImage = "linear-gradient(#90807c, #1c1712, #90807c)"
                break;
            case "fighting":
                spanType.style.backgroundImage = "linear-gradient(#91513b, #5f2716, #91513b)"
                break;
            case "ghost":
                spanType.style.backgroundImage = "linear-gradient(#5f60b6, #211e40, #5f60b6)"
                break;
            case "steel":
                spanType.style.backgroundImage = "linear-gradient(#bdbbc9, #8f8e9d, #bdbbc9)"
                break;
            case "flying":
                spanType.style.backgroundImage = "linear-gradient(#c0c9f5, #5d74d3, #c0c9f5)"
                break;
            case "electric":
                spanType.style.backgroundImage = "linear-gradient(#e98f07, #e98f07, #e98f07)"
                break;
            case "fairy":
                spanType.style.backgroundImage = "linear-gradient(#fbe9fe, #cd89d2, #fbe9fe)"
                break;
        }
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
