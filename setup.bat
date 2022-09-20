@echo off
cls
echo Make sure you have node.js version 16.9 and npm installed and working. This project will now install/load Discord.js and other dependencies.
PAUSE
npm i discordjs@14
echo Discord.js and other dependencies have been installed.
echo Would you like to run the bot? (Y or N)
read varname
cls
if [$varname = y]
then
  runBot.bat
fi
PAUSE
