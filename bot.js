const e = { scope: "bubble" }, s = "https://1020993654.rsc.cdn77.org/Stromberg/867/1080-HLS/867_1080-HLS_.m3u8", n = "https://sebastianwachter.github.io/workadventure-bernd-bot/";
function r() {
  WA.chat.sendChatMessage("Der Papa ist hier!", e);
}
const i = {
  run: async (o) => {
    await WA.onInit(), WA.chat.open(), r(), WA.chat.onChatMessage((t) => {
      t === "Ping" && WA.chat.sendChatMessage("Pong!", e);
    }, { scope: "bubble" });
    try {
      const t = new URL("stream.html", n);
      t.searchParams.set("src", s), WA.room.website.create({
        name: "Bernd",
        url: t.toString(),
        position: {
          x: 0,
          y: 0,
          width: 1280,
          height: 720
        },
        visible: !0,
        allowApi: !0,
        allow: "autoplay; encrypted-media; fullscreen",
        origin: "player",
        scale: 1
      });
      const a = await WA.player.getPosition();
      WA.chat.sendChatMessage(`Stream läuft bei x=${a.x}, y=${a.y}`, e);
    } catch (t) {
      WA.chat.sendChatMessage(`Stream ging nicht auf: ${t}`, e);
    }
  }
};
export {
  i as default
};
