# 📟 Mukesh Rawat's Telegram Coding Bot

A simple Telegram bot built using Telegraf and Axios. It sends coding-related messages and C++ code snippets on command.

---

## 🚀 Features

- `/start` — Welcomes the user
- `/binarysearch` — Sends a "BinarySearch" message
- `/binarytree` — Fetches a binary tree C++ code from an online Gist and sends it
- Sticker response — Replies with 👍

---

## 🛠 Tech Stack

- Node.js
- Telegraf
- Axios

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/telegram-coding-bot.git
cd telegram-coding-bot

# 2. Install dependencies
npm install

# 3. Create a .env file with your bot token
echo "API_KEY=your_telegram_bot_token_here" > .env

# 4. Run the bot
node index.js
