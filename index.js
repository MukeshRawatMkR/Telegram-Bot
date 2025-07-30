const axios = require('axios');
const { Telegraf } = require('telegraf');
require('dotenv').config();

const binarysearch = "BinarySearch";//hard coded, to-dos 
const bot = new Telegraf(process.env.API_KEY);

bot.start(ctx => ctx.reply("Welcome to our Coding Bot from Mukesh Rawat"));

bot.command('binarysearch', ctx => ctx.reply(binarysearch));

bot.on('sticker', ctx => ctx.reply('👍'));

bot.command('binarytree', async ctx => {
  try {
    const response = await axios.get('https://gist.githubusercontent.com/toboqus/def6a6915e4abd66e922/raw/73ccc51f5482a1aa07e68310807dddcd32258c3e/btree.cpp');//to-dos 
    ctx.reply(response.data);
  } catch (error) {
    ctx.reply('Failed to fetch binary tree code.');//to-dos 
  }
});

bot.launch();//launching the telegram bot.
