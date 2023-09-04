document.addEventListener('DOMContentLoaded', function () {

document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const birthdate = document.getElementById("birthdate").value;


    const data = {
        name: name,
        lastname: lastname,
        birthdate: birthdate
    };

    postData("https://jsonplaceholder.typicode.com/users", data)
        .then((response) =>{
            console.log(response);
        })
        .catch((error) =>{
            console.log("Error: ", error);
        });
})

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
                "Content-Type": "aplication/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
    console.log(response)
}

});