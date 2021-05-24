//Obteniendo el form.
var form = document.getElementById('form_email');

//Detector de Envento (En este caso el de submit)
form.addEventListener('submit' , (e) => {
    e.preventDefault() //Elimina su acción por defecto.
    var button = form.querySelector('button');
    button.innerText = 'Enviando...';
    button.disabled = true;

    //Obreniendo Valores

    var subject = document.querySelector('#subject').value //asunto
    var email = document.querySelector('#email_form').value //email
    var phone = document.querySelector('#phone').value //telefono
    var names = document.querySelector('#name').value //nombres

    //Creando el body del email

    var body = `<h1>${subject}</h1>
    <p>Te llego un nuevo mensaje de tu página web 
    <br> Email: ${email} <br>
    Teléfono: ${phone} <br>
    Nombres y Apellidos: ${names}
    </p>`

    Email.send({
        SecureToken: "843ed0a0-b06c-4582-a16e-c8402505f089", //Token de seguridad
        To: "info@alercasystems.com", //A quién se lo envia.
        From: email, //De donde viene el correo
        Subject: subject, //Asunto
        Body: body //Cuerpo del corréo
    }).then(msg => {
        button.innerText = 'Enviar'
        button.disabled = false;
    });
})