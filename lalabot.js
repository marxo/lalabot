if (Meteor.isClient) {

}
if (Meteor.isServer) {
    Meteor.startup(function() {
        var SlackBot = Meteor.npmRequire('slackbots');
        var bot = new SlackBot({
            token: Meteor.settings.slackbotToken, // Add a bot https://my.slack.com/services/new/bot and put the token
            name: Meteor.settings.name
        });
        bot.on('team_join', function(user) {
            // more information about additional params https://api.slack.com/methods/chat.postMessage
            var params = {
                icon_emoji: ':balloon:'
            };

            bot.postMessageToChannel('general', user.name + _.sample(Meteor.settings.welcomeMessage), params);
            // bot.postMessageToUser('username', 'meow!', params);
            // bot.postMessageToGroup('private_group', 'meow!', params);
        });
        bot.on('start', function() {
            var params = {
                icon_emoji: ':barber:'
            };

            // Notify the closest relative on bot starts
            bot.postMessageToUser(Meteor.settings.closestRelative, Meteor.settings.startMessage + (new Date()), params);

        });
    });
}
