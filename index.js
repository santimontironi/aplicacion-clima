let apiKey = "d4d507f61d04d76f9d6404de1156a99b"
let difKelvin = 273.15

let btnBusqueda = document.getElementById("btnBusqueda")
let inputCiudad = document.getElementById("ciudadEntrada")
let datosClima = document.getElementById("datosClima")

btnBusqueda.addEventListener("click",function(){
    const ciudad = inputCiudad.value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}
        `)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response){
    datosClima.innerHTML = ''

    let nombreCiudad = response.name
    let nombrePais = response.sys.country
    let temperatura = response.main.temp
    let icono = response.weather[0].icon
    let humedad = response.main.humidity

    const tituloCiudad = document.createElement('h2')
    tituloCiudad.textContent = `Ciudad: ${nombreCiudad}, ${nombrePais}`

    const numTemperatura = document.createElement('h3')
    numTemperatura.textContent = `Temperatura: ${Math.floor(temperatura - difKelvin)}°C`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`
    iconoInfo.width = 150;

    const numHumedad = document.createElement('h3')
    numHumedad.textContent = `Humedad: ${humedad}%`

    datosClima.appendChild(tituloCiudad)
    datosClima.appendChild(numTemperatura)
    datosClima.appendChild(iconoInfo)
    datosClima.appendChild(numHumedad)
}