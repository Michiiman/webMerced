document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        function escapeInput(input) {
            return input.replace(/['"<>;]/g, "");
        }

        if (!isString(name)) {
            alert("El nombre debe ser un texto válido.");
            return;
        }

        if (!validateEmail(email)) {
            alert("El correo electrónico no es válido.");
            return;
        }

        if (!isPhoneNumber(phone)) {
            alert("El número de celular debe ser un número válido de 10 dígitos.");
            return;
        }

        const safeName = escapeInput(name);
        const safeEmail = escapeInput(email);
        const safePhone = escapeInput(phone);
        const safeMessage = escapeInput(message);

        console.log("Nombre:", safeName);
        console.log("Correo:", safeEmail);
        console.log("Celular:", safePhone);
        console.log("Mensaje:", safeMessage);
        alert("Formulario enviado correctamente y validado!");
    });

function isString(input) {
    return typeof input === "string" && input.trim() !== "";
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function isPhoneNumber(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
}
