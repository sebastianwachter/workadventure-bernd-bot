/// <reference types="@workadventure/iframe-api-typings" />

class Bernd {
  init() {
    WA.chat.onChatMessage((message, event) => {
      console.log(`Received chat message: ${message}`, event);
      WA.chat.sendChatMessage(`Ich habe deine Nachricht erhalten: "${message}"`, { scope: "bubble" as const });
      if (message.includes("Ping")) {
        WA.chat.sendChatMessage(`Pong!`, { scope: "bubble" as const });
      }
    })
  }
}

export const bernd = new Bernd();
