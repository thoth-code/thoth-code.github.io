function component() {
    const element = document.createElement("div");

    element.innerHTML = "fuck ya";

    return element;
}

document.body.appendChild(component());