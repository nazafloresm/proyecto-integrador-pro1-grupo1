let form = document.querySelector('.formulario');
let busqueda = document.querySelector('.busqueda');

form.addEventListener('submit', function(event){
    event.preventDefault();

    if (busqueda.value == '' || busqueda.value.length <3){
        alert('El campo está vacío o tiene menos de 3 caracteres')
    }
    else {
        this.submit();
    }
}
)