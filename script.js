let input_hipodoge = document.getElementById("input_hipodoge")
let input_capipepo = document.getElementById("input_capipepo")
let input_ratigueya = document.getElementById("input_ratigueya")
let div_hipodoge = document.querySelector(".hipodoge");
let div_capipepo = document.querySelector(".capipepo");
let div_ratigueya = document.querySelector(".ratigueya");
let button_seleccionar_mascota = document.getElementById("button_seleccionar_mascota")
let span_mascota_jugador = document.getElementById("span_mascota_jugador")
let span_mascota_enemigo = document.getElementById("span_mascota_enemigo")
let button_ataque_fuego = document.getElementById("button_ataque_fuego")
let button_ataque_planta = document.getElementById("button_ataque_planta")
let button_ataque_agua = document.getElementById("button_ataque_agua")
let span_ataque_jugador = document.getElementById("span_ataque_jugador")
let span_ataque_enemigo = document.getElementById("span_ataque_enemigo")
let span_ganador = document.getElementById("span_ganador")
let span_vidas_mascota_jugador = document.getElementById("span_vidas_mascota_jugador")
let span_vidas_mascota_enemigo = document.getElementById("span_vidas_mascota_enemigo")

let mascota_jugador
let img_mascota_jugador
let mascota_enemigo
let img_mascota_enemigo
let ataque_jugador
let ataque_aleatorio
let vidas_mascota_jugador = 3
let vidas_mascota_enemigo = 3

button_seleccionar_mascota.addEventListener("click", imprimir_mascota_jugador)

function imprimir_mascota_jugador(){
    if(input_hipodoge.checked){
        mascota_jugador = "Hipodoge"
        img_mascota_jugador = '<img src="./assets/mokepons_mokepon_hipodoge_attack.png">'
    }
    else if(input_capipepo.checked){
        mascota_jugador = "Capipepo"
        img_mascota_jugador = '<img src="./assets/mokepons_mokepon_capipepo_attack.png" alt="">'
    }
    else if(input_ratigueya.checked){
        mascota_jugador = "Ratigueya"
        img_mascota_jugador = '<img src="./assets/mokepons_mokepon_ratigueya_attack.png" alt="">'
    }

    span_mascota_jugador.innerHTML = "Tu mascota es: " + mascota_jugador + "<br>" + img_mascota_jugador
    elegir_mascota_enemiga(1, 3)
    span_vidas_mascota_jugador.innerHTML = vidas_mascota_jugador+ " vidas."
    span_vidas_mascota_enemigo.innerHTML = vidas_mascota_enemigo+ " vidas."
}

function elegir_mascota_enemiga(min, max){
    let numero_aleatorio_mascota = Math.floor(Math.random() * (max - min + 1)) + min

    if(numero_aleatorio_mascota == 1){
        mascota_enemigo = "Hipodoge"
        img_mascota_enemigo = '<img src="./assets/mokepons_mokepon_hipodoge_attack.png">'
    }
    else if(numero_aleatorio_mascota == 2){
        mascota_enemigo = "Capipepo"
        img_mascota_enemigo = '<img src="./assets/mokepons_mokepon_capipepo_attack.png" alt="">'
    }
    else if(numero_aleatorio_mascota == 3){
        mascota_enemigo = "Ratigueya"
        img_mascota_enemigo= '<img src="./assets/mokepons_mokepon_ratigueya_attack.png" alt="">'
    }

    span_mascota_enemigo.innerHTML = "La mascota del enemigo es: " + mascota_enemigo + "<br>" + img_mascota_enemigo
}

button_ataque_fuego.addEventListener("click", ataque_fuego)
function ataque_fuego(){
    span_ataque_jugador.innerHTML = "Haz atacado con fuego"
    ataque_jugador = "Fuego"
    ataque_enemigo(1, 3)
    combate()
}

button_ataque_planta.addEventListener("click", ataque_planta)
function ataque_planta(){
    span_ataque_jugador.innerHTML = "Haz atacado con planta"
    ataque_jugador = "Planta"
    ataque_enemigo(1, 3)
    combate()
}

button_ataque_agua.addEventListener("click", ataque_agua)
function ataque_agua(){
    span_ataque_jugador.innerHTML = "Haz atacado con agua"
    ataque_jugador = "Agua"
    ataque_enemigo(1, 3)
    combate()
}

function ataque_enemigo(min, max){
    let numero_aleatorio_ataque = Math.floor(Math.random() * (max - min + 1)) + min

    if(numero_aleatorio_ataque == 1){
        ataque_aleatorio = "Fuego"
    }
    else if(numero_aleatorio_ataque == 2){
        ataque_aleatorio = "Planta"
    }
    else if(numero_aleatorio_ataque == 3){
        ataque_aleatorio = "Agua"
    }

    span_ataque_enemigo.innerHTML = "El enemigo ataco con " +ataque_aleatorio
    
}

function combate(){
    if(ataque_jugador == "Fuego" && ataque_aleatorio == "Planta"){
        span_ganador.innerHTML = "Haz ganado"
        vidas_mascota_enemigo = vidas_mascota_enemigo - 1
        span_vidas_mascota_enemigo.innerHTML = vidas_mascota_enemigo+ " vidas"
    }
    else if(ataque_jugador == "Fuego" && ataque_aleatorio == "Agua"){
        span_ganador.innerHTML = "Haz perdido"
        vidas_mascota_jugador = vidas_mascota_jugador  - 1
        span_vidas_mascota_jugador.innerHTML = vidas_mascota_jugador+ " vidas"
    }
    else if(ataque_jugador == "Planta" && ataque_aleatorio == "Agua"){
        span_ganador.innerHTML = "Haz ganado"
        vidas_mascota_enemigo = vidas_mascota_enemigo - 1
        span_vidas_mascota_enemigo.innerHTML = vidas_mascota_enemigo+ " vidas"
    }
    else if(ataque_jugador == "Planta" && ataque_aleatorio == "Fuego"){
        span_ganador.innerHTML = "Haz perdido"
        vidas_mascota_jugador = vidas_mascota_jugador  - 1
        span_vidas_mascota_jugador.innerHTML = vidas_mascota_jugador+ " vidas"
    }
    if(ataque_jugador == "Agua" && ataque_aleatorio == "Fuego"){
        span_ganador.innerHTML = "Haz ganado"
        vidas_mascota_enemigo = vidas_mascota_enemigo - 1
        span_vidas_mascota_enemigo.innerHTML = +vidas_mascota_enemigo+ " vidas"
    }
    else if(ataque_jugador == "Agua" && ataque_aleatorio == "Planta"){
        span_ganador.innerHTML = "Haz perdido"
        vidas_mascota_jugador = vidas_mascota_jugador  - 1
        span_vidas_mascota_jugador.innerHTML = vidas_mascota_jugador+ " vidas"
    }
    else if(ataque_jugador == ataque_aleatorio){
        span_ganador.innerHTML = "Empataron"
    }

    reiniciar_juego()
}

function reiniciar_juego(){
    if(vidas_mascota_jugador == 0 || vidas_mascota_enemigo == 0){
        vidas_mascota_jugador = 3
        vidas_mascota_enemigo = 3
        span_mascota_jugador.innerHTML = ""
        span_mascota_enemigo.innerHTML = ""
        span_ataque_jugador.innerHTML = ""
        span_ataque_enemigo.innerHTML = ""
        span_ganador.innerHTML = ""
        span_vidas_mascota_jugador.innerHTML = ""
        span_vidas_mascota_enemigo.innerHTML = ""
    }
}



input_hipodoge.addEventListener("change", () => seleccionarDivMascota(div_hipodoge));
input_capipepo.addEventListener("change", () => seleccionarDivMascota(div_capipepo));
input_ratigueya.addEventListener("change", () => seleccionarDivMascota(div_ratigueya));

function seleccionarDivMascota(divSeleccionado) {
    // Eliminar la clase 'seleccionado' de todos los divs
    div_hipodoge.classList.remove("seleccionado");
    div_capipepo.classList.remove("seleccionado");
    div_ratigueya.classList.remove("seleccionado");
    
    // Añadir la clase 'seleccionado' al div que ha sido seleccionado
    divSeleccionado.classList.add("seleccionado");
}