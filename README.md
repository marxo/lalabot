# lalabot
Lalabot is a welcoming Slackbot written in Meteor

## Usage

### Register a new bot

Go to `https://***yourteamname***.slack.com/services/new/bot` and register a new bot.
There you'll get a token for the bot integration.

Edit `settings.json` with data about your bot.

Run with `meteor --settings settings.json`

### Deployment

If you wish to deploy this bot to Meteor.com as a free app when deploying do
`meteor deploy ***yourappname***.meteor.com --settings settings.json` to include settnigs.json with all you API info.

That's it, lalabot is now running in your team.
