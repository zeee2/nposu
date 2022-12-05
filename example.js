module.exports = {
    // enable nowplaying feature
    np_on: false,

    // https://twitchapps.com/tmi/
    ttv_username: "",
    ttv_token: "",

    /*
        *Please disable nowplaying feature if you want to connect multiple channels*
        Twitch username: osu! username
        "mrekkosu": "mrekk",
        "whitecatosu": "whitecat",
        ...
    */
    channels: {},

    // https://osu.ppy.sh/p/irc
    osuirc_username: "",
    osuirc_password: "",

    /*
        - Personal accounts can send 10 messages every 5 seconds
        - Bot accounts can send 300 messages every 60 seconds
    */
    osuirc_cooldown: 5,

    // https://osu.ppy.sh/home/account/edit -> OAuth -> New OAuth Application
    osuv2_client_id: "",
    osuv2_client_secret: ""
}