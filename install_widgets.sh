#!/bin/bash

printf "\nInstalling the Widgets-App!\n\n"

# create the location for the database to be housed locally
mkdir mongodb
cd mongodb

# create the data folder to hold the database, then run the mongo daemon in the background (log file is mongod.log)
mkdir data
mongod --dbpath=data --fork --logpath mongod.log

cd ..
