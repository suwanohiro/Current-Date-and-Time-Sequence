window.onload = () => {
    const dateElement = document.getElementById("date");

    setInterval(() => {
        dateElement.textContent = createDateString();
    }, 100);

    const copy = document.getElementById("copy");
    copy.onclick = () => {
        navigator.clipboard.writeText(dateElement.textContent);
        createPopup();
    };
}

function createDateString() {
    const now = new Date();
    let writeString = "";
    writeString += now.getFullYear().toString().padStart(4, '0');
    writeString += (now.getMonth() + 1).toString().padStart(2, '0');
    writeString += now.getDate().toString().padStart(2, '0');
    writeString += now.getHours().toString().padStart(2, '0');
    writeString += now.getMinutes().toString().padStart(2, '0');
    writeString += now.getSeconds().toString().padStart(2, '0');
    return writeString;
}

function createPopup() {
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = "✔&emsp;クリップボードにコピーしました";
    popup.addEventListener("animationend", () => {
        popup.remove();
    });
    document.getElementById("popups").appendChild(popup);
}