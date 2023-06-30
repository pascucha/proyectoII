  const name = prompt("¿Cuál es tu nombre?");
  alert(`¡Hola ${name}, que disfrutes tu paseo!`);

const menuItems = document.querySelectorAll('.nav');
menuItems.forEach(function (el){
    el.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.active');
        e.target.classList.add('active');
        currentItem.classList.remove('active');
});
});

const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

botonAceptarCookies.addEventListener('click', () => {
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

  })
