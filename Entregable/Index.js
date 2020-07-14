var resultado = document.getElementById("resultado")
var link = document.getElementById("portafolio")

var primera = document.getElementById('primera')
var segunda = document.getElementById('segunda')
var tercera = document.getElementById('tercera')
var cuarta = document.getElementById('cuarta')
var quinta = document.getElementById('quinta')
var sexta = document.getElementById('sexta')

var btn_calc = document.getElementById('btn_calc')

function calc() {
    var primer_valor = Number(primera.value)
    var segundo_valor = Number(segunda.value)
    var tercer_valor = Number(tercera.value)
    var cuarto_valor = Number(cuarta.value)
    var quinto_valor = Number(quinta.value)
    var sexto_valor = Number(sexta.value)

    var suma = primer_valor + segundo_valor + tercer_valor + cuarto_valor + quinto_valor + sexto_valor;

    if (suma >= 1 && suma <= 18) {
        resultado.innerText = 'Tu Perfil es Corto Plazo Conservador'
        link.href = "https://ibb.co/D53K4ym"

    } else if (suma > 18 && suma <= 25) {
        resultado.innerText = "Tu Perfil es Corto Plazo Especulativo"
        link.href = "https://ibb.co/ftTrdW0"

    } else if (suma > 25 && suma <= 31) {
        resultado.innerText = "Tu Perfil es Corservador"
        link.href = "https://ibb.co/f8HQ67d"

    } else if (suma > 31 && suma <= 42) {
        resultado.innerText = "Tu Perfil es Un Tanto Corservador"
        link.href = "wwwhttps://ibb.co/mDWs636"

    } else if (suma > 42 && suma <= 50) {
        resultado.innerText = "Tu Perfil es Moderado"
        link.href = "https://ibb.co/0nY4RrX"

    } else if (suma > 50 && suma <= 54) {
        resultado.innerText = "Tu Perfil es Dinamico"
        link.href = "https://ibb.co/KsXLF70"

    } else if (suma > 54) {
        resultado.innerText = "Tu Perfil es Tolerante"
        link.href = "https://ibb.co/JKgvhPH"
    }
}

btn_calc.addEventListener('click', calc)