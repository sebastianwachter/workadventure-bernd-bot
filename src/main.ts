/// <reference types="@workadventure/iframe-api-typings" />
import { bernd } from './bernd'

const VIDEO_ID = "2yJgwwDcgV8";
const STREAM_NAME = "bernd-test-stream";
const THERAPY_ROOM_AREA = "therapy-room";
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=1`;
const CHAT_OPTIONS = { scope: "bubble" as const };

WA.onInit().then(async () => {
    bernd.init();
})

export {}

export default {
    // run: async (metadata: any) => {
    //     await WA.onInit();

    //     const therapyRoom = await WA.room.area.get(THERAPY_ROOM_AREA).catch(() => undefined);

    //     if (!therapyRoom) {
    //         WA.chat.sendChatMessage(`Hab den "${THERAPY_ROOM_AREA}" nicht auf der Karte gefunden, ich bleib stehen wo ich bin.`, CHAT_OPTIONS);
    //     } else {
    //         const position = await WA.player.getPosition();
    //         const isInside =
    //             position.x >= therapyRoom.x &&
    //             position.x <= therapyRoom.x + therapyRoom.width &&
    //             position.y >= therapyRoom.y &&
    //             position.y <= therapyRoom.y + therapyRoom.height;

    //         if (!isInside) {
    //             WA.chat.sendChatMessage(`Bin nicht im "${THERAPY_ROOM_AREA}", ich lauf da mal hin.`, CHAT_OPTIONS);
    //             await WA.player.moveTo(therapyRoom.x + therapyRoom.width / 2, therapyRoom.y + therapyRoom.height / 2);
    //         }
    //     }

    //     WA.room.website.create({
    //         name: STREAM_NAME,
    //         url: EMBED_URL,
    //         position: {
    //             x: metadata?.streamX ?? therapyRoom?.x ?? 0,
    //             y: metadata?.streamY ?? therapyRoom?.y ?? 0,
    //             width: metadata?.streamWidth ?? 1280,
    //             height: metadata?.streamHeight ?? 720,
    //         },
    //         visible: true,
    //         allow: "autoplay; encrypted-media; fullscreen",
    //         origin: "map",
    //     });

    //     WA.chat.sendChatMessage(`Ich zeig jetzt "${STREAM_NAME}" für immer`, CHAT_OPTIONS);
    // }
}
