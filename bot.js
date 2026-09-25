const t = { scope: "bubble" }, s = "https://1020993654.rsc.cdn77.org/Stromberg/867/1080-HLS/867_1080-HLS_.m3u8", n = "https://sebastianwachter.github.io/workadventure-bernd-bot/";
function r() {
  WA.chat.sendChatMessage("Der Papa ist hier!", t);
}
const i = {
  run: async (o) => {
    await WA.onInit(), WA.chat.open(), r(), WA.chat.onChatMessage((e) => {
      e === "Ping" && WA.chat.sendChatMessage("Pong!", t);
    }, { scope: "bubble" }), await WA.players.configureTracking({ players: !0, movement: !0 }), WA.players.onPlayerEnters.subscribe((e) => {
      WA.chat.sendChatMessage(`${e.name} taucht auf bei x=${e.position.x}, y=${e.position.y}`, t);
    }), WA.players.onPlayerMoves.subscribe(({ player: e, newPosition: a }) => {
      WA.chat.sendChatMessage(`${e.name} steht jetzt bei x=${a.x}, y=${a.y}`, t);
    });
    try {
      const e = new URL("stream.html", n);
      e.searchParams.set("src", s), WA.room.website.create({
        name: "Bernd",
        url: e.toString(),
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
      WA.chat.sendChatMessage(`Stream läuft bei x=${a.x}, y=${a.y}`, t);
    } catch (e) {
      WA.chat.sendChatMessage(`Stream ging nicht auf: ${e}`, t);
    }
  }
};
export {
  i as default
};
