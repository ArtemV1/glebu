const Discord = require(`discord.js`);
const bot = new Discord.Client();

const token = `NjQxNzI2NzcxNTY1MTY2NjI0.XcMk1Q.YR2jjAfv18Fjkg3jKPFnE0AH4Js`;




bot.on("ready",() => 
 {   console.log(`${bot.user.username} is ready!`);
    bot.user.setActivity("nigga"),{type: "PLAYING"}})


bot.on(`message`,async message=>{
    if(message.author.bot) return;

   
        bot.channels.get("641724968538865685").send(message + ` nigga`);
    

})

bot.login(token);

