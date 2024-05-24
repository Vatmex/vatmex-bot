require('dotenv').config();

const updateRigoberto = async (bot, callback) => {
  const server = bot.guilds.cache.get(process.env.GUILD_ID);
  const rigoberto = await server.members.fetch('776324184874680331');

  if (rigoberto.nickname !== 'Rigo el Puma - 1523823') {
    bot.channels.cache
      .get('1225472784218718238')
      .send(`<@${rigoberto.id}> no seas necio!`);
    rigoberto.setNickname('Rigo el Puma - 1523823');
  }
};

module.exports = { updateRigoberto };
