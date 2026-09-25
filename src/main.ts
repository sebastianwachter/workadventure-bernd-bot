/// <reference types="@workadventure/iframe-api-typings" />

const CHAT_OPTIONS = { scope: "bubble" as const };
const WEBSITE_OFFSET = {
    x: 0,
    y: 0,
};

function announce () {
    WA.chat.sendChatMessage('Der Papa ist hier!', CHAT_OPTIONS);
}

export default {
    run: async (_metadata: any) => {
        await WA.onInit();

        WA.chat.open()
        announce();

        WA.chat.onChatMessage((message) => {
            if (message === "Ping") {
                WA.chat.sendChatMessage(`Pong!`, CHAT_OPTIONS);
            }
        }, { scope: "bubble" });

        // const therapyRoom = await WA.room.area.get(THERAPY_ROOM_AREA).catch(() => undefined);

        // if (!therapyRoom) {
        //     WA.chat.sendChatMessage(`Hab den "${THERAPY_ROOM_AREA}" nicht auf der Karte gefunden, ich bleib stehen wo ich bin.`, CHAT_OPTIONS);
        // } else {
        //     const position = await WA.player.getPosition();
        //     const isInside =
        //         position.x >= therapyRoom.x &&
        //         position.x <= therapyRoom.x + therapyRoom.width &&
        //         position.y >= therapyRoom.y &&
        //         position.y <= therapyRoom.y + therapyRoom.height;

        //     if (!isInside) {
        //         WA.chat.sendChatMessage(`Bin nicht im "${THERAPY_ROOM_AREA}", ich lauf da mal hin.`, CHAT_OPTIONS);
        //         await WA.player.moveTo(therapyRoom.x + therapyRoom.width / 2, therapyRoom.y + therapyRoom.height / 2);
        //     }
        // }

        const botPosition = await WA.player.getPosition();

        WA.room.website.create({
            name: "Bernd",
            url: "https://1020993654.rsc.cdn77.org/Stromberg/867/1080-HLS/867_1080-HLS_.m3u8",
            position: {
                x: botPosition.x + WEBSITE_OFFSET.x,
                y: botPosition.y + WEBSITE_OFFSET.y,
                width: 1280,
                height: 720,
            },
            visible: true,
            allowApi: true,
            allow: "autoplay; encrypted-media; fullscreen",
            origin: "map",
            scale: 1
        });

        WA.chat.sendChatMessage(`Ich zeig jetzt den Stream`, CHAT_OPTIONS);
    }
}
