import Pusher from 'pusher';
import ClientPusher from 'pusher-js';

export const serverPusher = new Pusher({
    appId: "1506541",
    key: 'a0a406f44af7f807f116',
    secret: 'fbee5163b3338166a024',
    cluster: "ap2",
    useTLS: true
})

export const clientPusher = new ClientPusher('a0a406f44af7f807f116', {
    cluster: 'ap2'
})