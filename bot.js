const n = { scope: "bubble" };
function a() {
  WA.chat.sendChatMessage("Der Papa ist hier!", n);
}
const s = {
  run: async (t) => {
    await WA.onInit(), WA.chat.open(), a(), WA.player.proximityMeeting.onFollowed().subscribe(async (e) => {
      (await WA.player.moveTo(e.position.x, e.position.y)).cancelled || (WA.chat.open(), a());
    }), WA.chat.onChatMessage((e) => {
      e === "Ping" && WA.chat.sendChatMessage("Pong!", n);
    }, { scope: "bubble" });
  }
};
export {
  s as default
};
