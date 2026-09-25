const a = { scope: "bubble" }, n = {
  x: 0,
  y: 0
}, r = "https://1020993654.rsc.cdn77.org/Stromberg/867/1080-HLS/867_1080-HLS_.m3u8", i = "https://sebastianwachter.github.io/workadventure-bernd-bot/";
function o() {
  WA.chat.sendChatMessage("Der Papa ist hier!", a);
}
const h = {
  run: async (c) => {
    await WA.onInit(), WA.chat.open(), o(), WA.chat.onChatMessage((t) => {
      t === "Ping" && WA.chat.sendChatMessage("Pong!", a);
    }, { scope: "bubble" });
    const s = await WA.player.getPosition();
    try {
      const t = new URL("stream.html", i);
      t.searchParams.set("src", r), WA.room.website.create({
        name: "Bernd",
        url: t.toString(),
        position: {
          x: s.x + n.x,
          y: s.y + n.y,
          width: 1280,
          height: 720
        },
        visible: !0,
        allowApi: !0,
        allow: "autoplay; encrypted-media; fullscreen",
        origin: "map",
        scale: 1
      }), WA.chat.sendChatMessage("Ich zeig jetzt den Stream", a);
      try {
        const e = await WA.room.website.get("Bernd");
        WA.chat.sendChatMessage(
          `Debug: WA kennt "Bernd" bei x=${e.x} y=${e.y} w=${e.width} h=${e.height} visible=${e.visible} url=${e.url}`,
          a
        );
      } catch (e) {
        WA.chat.sendChatMessage(`Debug: WA.room.website.get("Bernd") ist explodiert: ${e}`, a);
      }
    } catch (t) {
      WA.chat.sendChatMessage(`Stream ging nicht auf: ${t}`, a);
    }
  }
};
export {
  h as default
};
