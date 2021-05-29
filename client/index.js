window.onload = () => {
    const url = "http://localhost:3000/message";

    const buttonGetMessage = document.querySelector("button");

    buttonGetMessage.onclick = () => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const messageElement = document.querySelector("h1");
            messageElement.innerText = "Message: " + data.message;
        });
    }
}

