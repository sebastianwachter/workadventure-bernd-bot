const c = "2yJgwwDcgV8", h = "bernd-test-stream", n = "therapy-room", r = `https://www.youtube.com/embed/${c}?autoplay=1&mute=1&loop=1&playlist=${c}&controls=1`, o = { scope: "bubble" }, l = {
  run: async (s) => {
    await WA.onInit();
    const i = await WA.room.area.get(n).catch(() => {
    });
    if (!i)
      WA.chat.sendChatMessage(`Hab den "${n}" nicht auf der Karte gefunden, ich bleib stehen wo ich bin.`, o);
    else {
      const e = await WA.player.getPosition();
      e.x >= i.x && e.x <= i.x + i.width && e.y >= i.y && e.y <= i.y + i.height || (WA.chat.sendChatMessage(`Bin nicht im "${n}", ich lauf da mal hin.`, o), await WA.player.moveTo(i.x + i.width / 2, i.y + i.height / 2));
    }
    WA.room.website.create({
      name: h,
      url: r,
      position: {
        x: (s == null ? void 0 : s.streamX) ?? (i == null ? void 0 : i.x) ?? 0,
        y: (s == null ? void 0 : s.streamY) ?? (i == null ? void 0 : i.y) ?? 0,
        width: (s == null ? void 0 : s.streamWidth) ?? 1280,
        height: (s == null ? void 0 : s.streamHeight) ?? 720
      },
      visible: !0,
      allow: "autoplay; encrypted-media; fullscreen",
      origin: "map"
    }), WA.chat.sendChatMessage(`Ich zeig jetzt "${h}" für immer`, o);
  }
};
export {
  l as default
};
