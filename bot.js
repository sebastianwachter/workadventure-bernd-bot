class s {
  init() {
    WA.chat.onChatMessage((e, n) => {
      console.log(`Received chat message: ${e}`, n), WA.chat.sendChatMessage(`Ich habe deine Nachricht erhalten: "${e}"`, { scope: "bubble" }), e.includes("Ping") && WA.chat.sendChatMessage("Pong!", { scope: "bubble" });
    });
  }
}
const a = new s();
console.log("Script started successfully");
WA.onInit().then(async () => {
  console.log("Scripting API ready"), console.log("Player tags: ", WA.player.tags), a.init();
}).catch((c) => console.error(c));
