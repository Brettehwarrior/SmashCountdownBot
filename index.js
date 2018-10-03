/*

Hey this is the code of the best Discord Bot of all time known as the "smash contdown bot"
You can add it to your server using this link: https://discordapp.com/api/oauth2/authorize?client_id=496803425519140887&scope=bot&permissions=7168

This was created by Trent Baker during the long thrilling wait for Smash Bros Ultimate on Oct 2 2018

This is my first bot so I'm sorry that it isn't fantastic, I might add to it as the wait continues

If you have any issues or requests please let me know via https://old.reddit.com/r/smashbros/comments/9kwasa/i_have_created_a_discord_bot_to_count_down_the/

*/

const Discord = require('discord.js');
const bot = new Discord.Client();

// Roundabout way of getting token so you hackers can't cheese my bot
var tokenScript = require('./token.js');
const token = tokenScript.GetToken();

var days, hours, mins, secs;
var currentMonth, currentDay, currentHour, currentMin, currentSec;
var targetDay = 7;

bot.on('message', function(message) {

    // Not TTS
    if (message.content == "how long till smash" || message.content == "time till smash") {
        // Update variables
        UpdateTime();
        
        // Output
        message.channel.send("time till smash: " + days + " day " + hours + " hour " + mins + " minute " + secs + " second", {
            tts: false
        });
    }

    // TTS
    if (message.content == "now say it out loud") {
        // Update variables
        UpdateTime();
        
        // Output
        message.channel.send("time till smash: " + days + " day " + hours + " hour " + mins + " minute " + secs + " second", {
            tts: true
        });
        // If enough people find this a problem I can just remove it, I just think it's funny
    }

    // Sakurai
    if (message.content == "sakurai") {
        message.channel.send("you mean this guy", {
            file: "https://cdn.vox-cdn.com/thumbor/fBOJU5fctgnf76fX7ehGsCNpZ9w=/0x0:1920x1080/1200x800/filters:focal(1079x573:1385x879)/cdn.vox-cdn.com/uploads/chorus_image/image/60768409/super_smash_bros._ultimate_nintendo_direct_masahiro_sakurai_1920.0.png"
        });
    }
});

bot.on('ready', function() {
    console.log("readyfreddy");
});
bot.login(token);

function UpdateTime() {
    /// COUNTDOWN DATE ------------------------------
    /// DISCLAIMER: This is dumb and only functions for the specific purpose of the 3 month wait please don't do this yourself make it better
    var date = new Date();
        
    // Days (months accounted for)
    currentDay = date.getDay();
    currentMonth = date.getMonth()+1;
    targetDay = 7;
    switch (currentMonth) {
        case 10:
        targetDay += 61;
        break;

        case 11:
        targetDay += 30;
        break;

        case 12:
        targetDay = 7;
        break;
    }
    days = targetDay - currentDay-1;

    // Hours
    currentHour = date.getHours();
    hours = 24 - currentHour - 1;

    // Minutes
    currentMin = date.getMinutes();
    mins = 60 - currentMin - 1;

    // Minutes
    currentSec = date.getSeconds();
    secs = 60 - currentSec - 1;

}
