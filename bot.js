const s = { scope: "bubble" };
console.log("Script started successfully");
const t = {
  run: async (a) => {
    console.log("Script started successfully 2 ", a), await WA.onInit(), WA.chat.open(), WA.chat.sendChatMessage("PiPiPiPing", s), WA.chat.onChatMessage((e, c) => {
      console.log(`Received chat message: ${e}`, c), WA.chat.sendChatMessage(`Ich habe deine Nachricht erhalten: "${e}"`, s), e === "Ping" && WA.chat.sendChatMessage("Pong!", s);
    }, { scope: "bubble" });
  }
};
export {
  t as default
};
