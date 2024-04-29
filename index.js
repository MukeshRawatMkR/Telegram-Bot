const  axios  = require('axios');
const { Telegraf } = require('telegraf')

require('dotenv').config()

let binarysearch="BinarySearch";

const bot = new Telegraf(process.env.API_KEY);

bot.start((ctx)=>ctx.reply("Welcome to our Coding Bot from Mukesh Rawat"));

bot.command('binarysearch', (ctx)=>ctx.reply(binarysearch));

bot.on('sticker',(ctx)=>ctx.reply('👍'));

bot.command('binarytree',async function(ctx){
const response=await axios.get('https://gist.githubusercontent.com/toboqus/def6a6915e4abd66e922/raw/73ccc51f5482a1aa07e68310807dddcd32258c3e/btree.cpp');
return ctx.reply(response.data);
})

bot.launch();