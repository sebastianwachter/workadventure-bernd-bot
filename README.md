# Bot starter kit

The WorkAdventure bot starter kit is a starter kit to help you write custom bots in WorkAdventure.

WorkAdventure SAAS provides out of the box support for bots that are powered by OpenAI, or Tock.ai.
You can also provide your own Ollama compatible LLM model.

However, if you have very special needs, you can also build your own bot from the ground, using a custom script.
This starter kit will help you with this process.


## Coding the bot

The bot script should be put in `src/main.ts`, in the body of the `run` function.

Build your bot using `npm run build`.

The resulting file will be in `dist/bot.js`. You can host this file on any webserver with CORS enabled.

One easy solution is to use GitHub pages. This repository comes with a GitHub action that automatically publishes 
the script on GitHub pages.
