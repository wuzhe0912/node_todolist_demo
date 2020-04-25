import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'

let moon = document.querySelector('.moon')

window.addEventListener('scroll', () => {
  const value = window.scrollY / 2

  moon.style.left = -value * 0.8 + 'px'
})