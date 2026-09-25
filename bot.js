class c {
  init() {
    WA.chat.onChatMessage((e, a) => {
      console.log(`Received chat message: ${e}`, a), WA.chat.sendChatMessage(`Ich habe deine Nachricht erhalten: "${e}"`, { scope: "bubble" }), e.includes("Ping") && WA.chat.sendChatMessage("Pong!", { scope: "bubble" });
    });
  }
}
const n = new c();
console.log("Script started successfully");
const t = {
  run: async (s) => {
    console.log("Script started successfully 2 ", s), await WA.onInit(), WA.chat.open(), WA.chat.sendChatMessage("PiPing", { scope: "bubble" }), WA.chat.sendChatMessage("PoPong", { scope: "local", author: "Bernd (Papa)" }), n.init();
  }
};
export {
  t as default
};
