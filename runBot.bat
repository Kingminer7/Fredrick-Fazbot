@echo off
cls
node bot.js
echo Do you want to restart the bot?
read varname
if [$varname = y]
then
  runBot.bat
fi
