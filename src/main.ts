/// <reference types="@workadventure/iframe-api-typings" />

const CHAT_OPTIONS = { scope: "bubble" as const };
const STREAM_URL = "https://1020993654.rsc.cdn77.org/Stromberg/867/1080-HLS/867_1080-HLS_.m3u8";
const BOT_BASE_URL = "https://sebastianwachter.github.io/workadventure-bernd-bot/";

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

        await WA.players.configureTracking({ players: true, movement: true });

        WA.players.onPlayerEnters.subscribe((player) => {
            WA.chat.sendChatMessage(`${player.name} taucht auf bei x=${player.position.x}, y=${player.position.y}`, CHAT_OPTIONS);
        });

        WA.players.onPlayerMoves.subscribe(({ player, newPosition }) => {
            WA.chat.sendChatMessage(`${player.name} steht jetzt bei x=${newPosition.x}, y=${newPosition.y}`, CHAT_OPTIONS);
        });

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

        try {
            const playerUrl = new URL("stream.html", BOT_BASE_URL);
            playerUrl.searchParams.set("src", STREAM_URL);

            WA.room.website.create({
                name: "Bernd",
                url: playerUrl.toString(),
                position: {
                    x: 0,
                    y: 0,
                    width: 1280,
                    height: 720,
                },
                visible: true,
                allowApi: true,
                allow: "autoplay; encrypted-media; fullscreen",
                origin: "player",
                scale: 1
            });

            const botPosition = await WA.player.getPosition();
            WA.chat.sendChatMessage(`Stream läuft bei x=${botPosition.x}, y=${botPosition.y}`, CHAT_OPTIONS);
        } catch (error) {
            WA.chat.sendChatMessage(`Stream ging nicht auf: ${error}`, CHAT_OPTIONS);
        }
    }
}
