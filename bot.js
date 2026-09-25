const e = { scope: "bubble" }, s = {
  x: 0,
  y: 0
}, n = "https://1020993654.rsc.cdn77.org/Stromberg/867/1080-HLS/867_1080-HLS_.m3u8", o = "https://sebastianwachter.github.io/workadventure-bernd-bot/";
function r() {
  WA.chat.sendChatMessage("Der Papa ist hier!", e);
}
const i = {
  run: async (c) => {
    await WA.onInit(), WA.chat.open(), r(), WA.chat.onChatMessage((t) => {
      t === "Ping" && WA.chat.sendChatMessage("Pong!", e);
    }, { scope: "bubble" });
    const a = await WA.player.getPosition();
    try {
      const t = new URL("stream.html", o);
      t.searchParams.set("src", n), WA.room.website.create({
        name: "Bernd",
        url: t.toString(),
        position: {
          x: a.x + s.x,
          y: a.y + s.y,
          width: 1280,
          height: 720
        },
        visible: !0,
        allowApi: !0,
        allow: "autoplay; encrypted-media; fullscreen",
        origin: "map",
        scale: 1
      }), WA.chat.sendChatMessage("Ich zeig jetzt den Stream", e);
    } catch (t) {
      WA.chat.sendChatMessage(`Stream ging nicht auf: ${t}`, e);
    }
  }
};
export {
  i as default
};
