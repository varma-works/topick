const input = document.querySelector(".chat-input");
const button = document.querySelector(".send-btn");
const resultsContainer = document.querySelector(".results-container");

button.addEventListener("click", async () => {
    const userText = input.value;

    // Clear old results
    resultsContainer.innerHTML = "";

    const response = await fetch("https://topick.onrender.com/task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: userText
        })
    });

    const data = await response.json();

    resultsContainer.innerHTML = "";
    resultsContainer.style.display = "flex";

    data.reply.forEach((tool, index) => {
        const toolCard = document.createElement("div");
        toolCard.innerHTML = `
            <h3>${index + 1}. ${tool.name}</h3>
            <a href="${tool.url}" target="_blank">${tool.url}</a>
            <p>${tool.reason}</p>
        `;
        resultsContainer.appendChild(toolCard);
    });

});

