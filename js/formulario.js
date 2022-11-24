let form = document.querySelector('.formulario');
let busqueda = document.querySelector('.busqueda');
let loader = document.querySelector('.loader')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (busqueda.value == '' || busqueda.value.length < 3) {
        alert('El campo está vacío o tiene menos de 3 caracteres')
    }
    else {
        this.submit();
    }
})

window.addEventListener('load', function (e) {
    this.setTimeout(function () {
        loader.style.display = "none"
    }, 1100)
})