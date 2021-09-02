const { readdirSync } = require("fs");
const { join } = require('path');

module.exports = (client) => {
  const eventFiles = readdirSync(join("src/events")).filter((file) => file.endsWith(".js"));
    
  for (const file of eventFiles) { //for para cada arquivo
    const event = require(join("../src/events", `${file}`)); // pega o arquivo
    let eventName = file.split(".")[0]; // pega o nome dele
    client.on(eventName, (...args) => event.run(client, ...args))// agora seta o evento
    console.log(`[EVENTS] - ${eventName}.js Carregado com sucesso.`)
  }

}