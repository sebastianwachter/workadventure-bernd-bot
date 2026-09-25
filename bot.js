const a = { scope: "bubble" }, i = "https://1020993654.rsc.cdn77.org/Stromberg/867/1080-HLS/867_1080-HLS_.m3u8", c = "https://sebastianwachter.github.io/workadventure-bernd-bot/", r = "Bernd", h = "Sebastian Wachter";
function l() {
  WA.chat.sendChatMessage("Der Papa ist hier!", a);
}
async function o(n, e) {
  const t = new URL("stream.html", c);
  t.searchParams.set("src", i), await WA.room.website.delete(r).catch(() => {
  }), WA.room.website.create({
    name: r,
    url: t.toString(),
    position: {
      x: n,
      y: e,
      width: 1280,
      height: 720
    },
    visible: !0,
    allowApi: !0,
    allow: "autoplay; encrypted-media; fullscreen",
    origin: "map",
    scale: 1
  });
}
const u = {
  run: async (n) => {
    await WA.onInit(), WA.chat.open(), l(), WA.chat.onChatMessage((e) => {
      e === "Ping" && WA.chat.sendChatMessage("Pong!", a);
    }, { scope: "bubble" }), await WA.players.configureTracking({ players: !0, movement: !0 }), WA.players.onPlayerEnters.subscribe((e) => {
      WA.chat.sendChatMessage(`${e.name} taucht auf bei x=${e.position.x}, y=${e.position.y}`, a);
    }), WA.players.onPlayerMoves.subscribe(({ player: e, newPosition: t }) => {
      WA.chat.sendChatMessage(`${e.name} steht jetzt bei x=${t.x}, y=${t.y}`, a);
    }), WA.players.onPlayerMoves.subscribe(async ({ player: e, newPosition: t }) => {
      if (e.name === h)
        try {
          await WA.player.moveTo(t.x, t.y);
          const s = await WA.player.getPosition();
          await o(s.x, s.y);
        } catch (s) {
          WA.chat.sendChatMessage(`Hinterherlaufen ging schief: ${s}`, a);
        }
    });
    try {
      const e = await WA.player.getPosition();
      await o(e.x, e.y), WA.chat.sendChatMessage(`Stream läuft bei x=${e.x}, y=${e.y}`, a);
    } catch (e) {
      WA.chat.sendChatMessage(`Stream ging nicht auf: ${e}`, a);
    }
  }
};
export {
  u as default
};
