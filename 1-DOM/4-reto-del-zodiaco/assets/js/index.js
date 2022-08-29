const contenedor = document.querySelector('.contenedor')
const formulario = document.querySelector('form')
const diaNacimiento = document.querySelector('#dia')
const mesNacimiento = document.querySelector('#mes')
const btnEnviar = document.querySelector('button')
const respuesta = document.querySelector('#respuesta')

contenedor.style.height = '100vh'
contenedor.style.width = '100%'
contenedor.style.backgroundImage = "url('./assets/img/background.jpg')"
contenedor.style.backgroundSize = 'cover'
contenedor.style.backgroundPosition = 'center'
contenedor.style.backgroundRepeat = 'no-repeat'
contenedor.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-column')

formulario.classList.add('d-flex', 'flex-column')

mesNacimiento.style.marginTop = '10px'
mesNacimiento.classList.add('form-control')

btnEnviar.style.marginTop = '10px'
btnEnviar.classList.add('btn', 'btn-info')

diaNacimiento.classList.add('form-control')

const validacion = (validacion1, validacion2, signo1, signo2) => {
    if(validacion1){
        respuesta.innerHTML = `
                        <h2 class="text-info text-center">Eres ${signo1}</h2>
                        <img src="assets/img/${signo1}.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
    }else if(validacion2){
        respuesta.innerHTML = `
                        <h2 class="text-info text-center">Eres ${signo2}</h2>
                        <img src="assets/img/${signo2}.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
    }else{
        respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
    }
}

const validarDatos = () => {
    if(diaNacimiento.value != '' && mesNacimiento.value != 'opcion'){
        respuesta.innerHTML = ''
        switch (mesNacimiento.value) {
            case '1':
                /*
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 19){
                    respuesta.innerHTML = `
                        <h2 class="text-info text-center">Eres Capricornio</h2>
                        <img src="assets/img/capricornio.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 20 && diaNacimiento.value <= 31){
                    respuesta.innerHTML = `
                        <h2 class="text-info text-center">Eres Acuario</h2>
                        <img src="assets/img/acuario.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                */
                validacion(
                    diaNacimiento.value >= 1 && diaNacimiento.value <= 19,
                    diaNacimiento.value >= 20 && diaNacimiento.value <= 31,
                    'capricornio',
                    'acuario'
                    )
                break;
            case '2':
                /*
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 18){
                    respuesta.innerHTML = `
                        <h2 class="text-info text-center">Eres Acuario</h2>
                        <img src="assets/img/acuario.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 19 && diaNacimiento.value <= 29){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Piscis</h2>
                    <img src="assets/img/piscis.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido febrero tiene máximo 29 días</span>'
                }
                */
               validacion(diaNacimiento.value >= 1 && diaNacimiento.value <= 18,
                diaNacimiento.value >= 19 && diaNacimiento.value <= 29,
                'acuario',
                'piscis'                
                )
                break;
            case '3':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 20){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Piscis</h2>
                    <img src="assets/img/piscis.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 21 && diaNacimiento.value <= 31){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Aries</h2>
                    <img src="assets/img/aries.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
            case '4':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 19){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Aries</h2>
                    <img src="assets/img/aries.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 20 && diaNacimiento.value <= 30){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Tauro</h2>
                    <img src="assets/img/tauro.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
            case '5':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 21){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Tauro</h2>
                    <img src="assets/img/tauro.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 21 && diaNacimiento.value <= 31){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Geminis</h2>
                    <img src="assets/img/geminis.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
            case '6':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 20){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Geminis</h2>
                    <img src="assets/img/geminis.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 21 && diaNacimiento.value <= 30){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Cancer</h2>
                    <img src="assets/img/cancer.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
            case '7':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 22){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Cancer</h2>
                    <img src="assets/img/cancer.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 23 && diaNacimiento.value <= 31){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Leo</h2>
                    <img src="assets/img/leo.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
            case '8':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 22){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Leo</h2>
                    <img src="assets/img/leo.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 23 && diaNacimiento.value <= 31){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Virgo</h2>
                    <img src="assets/img/virgo.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
            case '9':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 22){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Virgo</h2>
                    <img src="assets/img/virgo.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 23 && diaNacimiento.value <= 30){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Libra</h2>
                    <img src="assets/img/libra.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
            case '10':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 22){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Libra</h2>
                    <img src="assets/img/libra.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 23 && diaNacimiento.value <= 31){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Escorpion</h2>
                    <img src="assets/img/escorpion.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
            case '11':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 21){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Escorpion</h2>
                    <img src="assets/img/escorpion.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 22 && diaNacimiento.value <= 30){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Sagitario</h2>
                    <img src="assets/img/sagitario.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
            case '12':
                if(diaNacimiento.value >= 1 && diaNacimiento.value <= 21){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Sagitario</h2>
                    <img src="assets/img/sagitario.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else if(diaNacimiento.value >= 22 && diaNacimiento.value <= 31){
                    respuesta.innerHTML = `
                    <h2 class="text-info text-center">Eres Capricornio</h2>
                    <img src="assets/img/capricornio.gif" class="img-thumbnail" style="margin-top: 10px; border-radius:50px;">
                    `
                }else{
                    respuesta.innerHTML = '<span class="text-danger">Ingresa un día válido</span>'
                }
                break;
        }
    }else{
        respuesta.innerHTML = '<span class="text-danger">Por favor ingresa un día de nacimiento y selecciona un mes!!</span>'
    }
}