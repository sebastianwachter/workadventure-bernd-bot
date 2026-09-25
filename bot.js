const e = { scope: "bubble" }, s = {
  x: 0,
  y: 0
}, o = "https://1020993654.rsc.cdn77.org/Stromberg/867/1080-HLS/867_1080-HLS_.m3u8";
function r() {
  WA.chat.sendChatMessage("Der Papa ist hier!", e);
}
const c = {
  run: async (i) => {
    await WA.onInit(), WA.chat.open(), r(), WA.chat.onChatMessage((n) => {
      n === "Ping" && WA.chat.sendChatMessage("Pong!", e);
    }, { scope: "bubble" });
    const t = await WA.player.getPosition(), a = new URL("stream.html", import.meta.url);
    a.searchParams.set("src", o), WA.room.website.create({
      name: "Bernd",
      url: a.toString(),
      position: {
        x: t.x + s.x,
        y: t.y + s.y,
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
  c as default
};
