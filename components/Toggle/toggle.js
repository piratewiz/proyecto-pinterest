/* Abajo he creado un pequeño toggle que al ser pulsado por el usuario
pueda cambiar los modos CLARO/OSCURO. Sería interesante crear algo
semejante en un proyecto para que dependiendo de la hora del día
haya una función que pueda cambiarse automáticamente */
var toggle = document.getElementById('container')
var body = document.querySelector('body')
var links = document.querySelectorAll('a')
var spans = document.querySelectorAll('span')
var moon = document.getElementById('moon')
var sun = document.getElementById('sun')

export const toggleClickFunction = () => {
  toggle.onclick = function () {
    this.classList.toggle('bi-moon')
    if (this.classList.toggle('bi-brightness-high-fill')) {
      body.style.background = '#30253d'
      body.style.color = 'white'
      body.style.transition = '2s'
      links.forEach(function (link) {
        link.style.color = 'whitesmoke'
      })
      moon.style.display = 'none' // Esconde la luna
      sun.style.display = 'block'
    } else {
      body.style.background = 'white'
      body.style.color = 'black'
      body.style.transition = '2s'
      links.forEach(function (link) {
        link.style.color = '#30253d'
      })
      spans.forEach(function (span) {
        span.style.color = '#929bd3'
      })
      moon.style.display = 'block' // Muestra la luna
      sun.style.display = 'none' // Esconde el sol
    }
  }
}
