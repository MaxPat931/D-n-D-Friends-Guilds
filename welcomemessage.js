Hooks.on("ready", () =>
{if(game.user.isGM) return;
ChatMessage.create({
    content: "Hello! This GM has the D&D Friends Guild module installed, if you would like to add Guild Features to your character, click this button to open the @Compendium[d-n-d-friends-guilds.macros.W3byrfKHXkvaVnk0]{Guild Features Compendium} <p>If you have already added guild features to your actor, and would like to update them to the latest version, this button will replace any item on your owned actor with a matching name to an item from the compendium, this cannot be reversed. @Compendium[d-n-d-friends-guilds.macros.ZCVISNNFjmeuwj3I]{Update Actor's Guild Items}</p>",
    whisper : [game.user.id],
   })
});