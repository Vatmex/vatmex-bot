require('dotenv').config();

const updateRigoberto = async (bot, callback) => {
  const server = bot.guilds.cache.get(process.env.GUILD_ID);
  const rigoberto = await server.members.fetch('611929847601823760');

  if (rigoberto.nickname !== 'Rigo el Puma - 1523823') {
    bot.channels.cache
      .get('693320172760596523')
      .send(`<@${rigoberto.id}> no seas necio!`);
    rigoberto.setNickname('Rigo el Puma - 1523823');
  }
};

module.exports = { updateRigoberto };
