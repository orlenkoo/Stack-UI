const fs = require("fs-extra");
const concat = require("concat");

build = async () => {
  const files = [
    "./scripts/add-app-stackbot-elem.js",
    "./dist/stack-bot/runtime.js",
    "./dist/stack-bot/polyfills.js",
    "./dist/stack-bot/main.js",
  ];

  await concat(files, "./dist/stack-bot/stack-bot.js");
};
build();
