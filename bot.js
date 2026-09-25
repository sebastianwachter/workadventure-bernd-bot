const e = { scope: "bubble" }, a = {
  x: 0,
  y: 0
};
function s() {
  WA.chat.sendChatMessage("Der Papa ist hier!", e);
}
const i = {
  run: async (o) => {
    await WA.onInit(), WA.chat.open(), s(), WA.chat.onChatMessage((n) => {
      n === "Ping" && WA.chat.sendChatMessage("Pong!", e);
    }, { scope: "bubble" });
    const t = await WA.player.getPosition();
    WA.room.website.create({
      name: "Bernd",
      url: "https://1020993654.rsc.cdn77.org/Stromberg/867/1080-HLS/867_1080-HLS_.m3u8",
      position: {
        x: t.x + a.x,
        y: t.y + a.y,
        width: 1280,
        height: 720
      },
      visible: !0,
      allowApi: !0,
      allow: "autoplay; encrypted-media; fullscreen",
      origin: "map",
      scale: 1
    }), WA.chat.sendChatMessage("Ich zeig jetzt den Stream", e);
  }
};
export {
  i as default
};
