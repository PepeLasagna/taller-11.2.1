
function registro() {
    // Obtiene los valores del formulario
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const birthdate = document.getElementById('birthdate').value;

    // Crea un objeto que almacena los datos
    const formData = {
        name: name,
        lastname: lastname,
        birthdate: birthdate
    };

    // Realiza una solicitud POST a la URL especificada usando fetch
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
