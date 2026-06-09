console.log("Bot file started!");
const mineflayer = require('mineflayer');

const config = {
  host: 'sgp2.bytenut.cc:16290',
  port: 25565,
  username: 'SadSMP_Bot',
  version: false
};

function startBot() {
  const bot = mineflayer.createBot(config);

  bot.on('spawn', () => {
  console.log('Bot joined!');

 setTimeout(() => {
  bot.chat('/login 27/7bot');
}, 50);

 setTimeout(() => {
  bot.chat('/supervanish');
  }, 80);
    
    bot.on('messagestr', (msg) => {
  console.log('[CHAT]', msg);
});

    bot.on('end', () => {
  console.log('Disconnected');
});
    
    // Random movement
    setInterval(() => {
      const actions = ['forward', 'back', 'left', 'right'];

      const action = actions[Math.floor(Math.random() * actions.length)];

      bot.setControlState(action, true);

      setTimeout(() => {
        bot.setControlState(action, false);
      }, Math.floor(Math.random() * 4000) + 1000);
    }, 15000);

    // Random jump
    setInterval(() => {
      bot.setControlState('jump', true);

      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 350);
    }, 500);

    // Random sneak
    setInterval(() => {
      bot.setControlState('sneak', true);

      setTimeout(() => {
        bot.setControlState('sneak', false);
      }, 300);
    }, 600);

    // Random look around
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      const pitch = (Math.random() - 0.5) * 0.5;

      bot.look(yaw, pitch, true);
    }, 12000);

    // Chat messages every 5 minutes
    const messages = [
  "🎮 Welcome to SadSMP! Have fun, survive, and enjoy your adventure ⚔️",
  "🌟 Tip: Use /kit starter to get your free starter gear!",
  "🔥 Join events, build bases, and team up with friends!",
  "💬 Need help? Ask staff in chat or Discord!"
];

    setInterval(() => {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      bot.chat(msg);
    }, 300000);
  });

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 10 seconds...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', err => {
    console.log(err.message);
  });
}

startBot();
