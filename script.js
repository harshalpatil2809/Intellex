const { createElement } = require("react")

async function sendmessage(){
    const input = document.getElementById("User")
    const chatbox = document.getElementById("chatbot")
    const userinput = input.value.trim()

    if (userinput === "") return

    const Userdiv = document.createElement("div")
    Userdiv.className = "message user"
    Userdiv.textContent = userinput
    chatbox.appendChild(Userdiv)
    
    input.value = ""

    const response = await fetch("/chat", {
        method : "POST",
        headers : {"content-type": "application/json"},
        body: JSON.stringify({message : userinput})
    })

    const data = await response.json()

    const botdiv = document.createElement("div")
    botdiv.className = "message bot"
    botdiv.textContent = data.reply
    botdiv.appendChild(botdiv)

    chatbox.scrollTop = chatbox.scrollHeight
}