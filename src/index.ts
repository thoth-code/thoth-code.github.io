import './style/App.css';

function component() {
    const element = document.createElement("div");

    element.innerHTML = "fuck ya";
    element.classList.add("claaas")

    return element;
}

document.body.appendChild(component());