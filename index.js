let pins = ["iau4v", "mffg7", "xoejn", "a6u2m", "qh2y4", "b2w8c", "wa3op", "gk0eq", "b4tni", "x9xva", "ii1af", "z46es", "s6b39", "gtgy4", "zjlu7", "hf07p", "l22k3", "wflej", "r74xz", "tb1n0", "mw9uy", "z8866", "uoxzs", "hqimh", "up42d", "m3h8b", "g0xfp", "g1nl8", "op5qe", "hofc4", "veyrb", "dg6x1", "bipp0", "i17i9", "fjwo3", "s0y3a", "t2rkc", "l37aw", "cosv5", "lb2dc"]

let twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
let client = new twilio('AC8c9abcaca74f515953ac8fa7f6a86719', 'eee7240213391e0df6df7967228da8f2');

// Send the text message.
let message  = `https://lokbiswa.github.io/newYears-BibleVerses/. 
                pin: xoejn`;
let to = '+19136050470';
function sent(to, message){
  client.messages.create({
    to: to,
    from: '+12566854535',
    body: message
  });
}
sent(to,message);