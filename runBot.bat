@echo off
cls
npm run start
echo Do you want to restart the bot?
read varname
if [$varname = y]
then
  runBot.bat
fi
