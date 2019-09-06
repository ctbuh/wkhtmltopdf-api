#!/usr/bin/env bash

sudo apt-get update && sudo apt-get -y upgrade

sudo apt-get -y install fontconfig libxrender1 xfonts-base xfonts-75dpi libjpeg-turbo8 libxext6

# TODO: auto tab + enter
sudo apt-get install ttf-mscorefonts-installer

## Not needed anymore?
# sudo apt-get -f install

## Actually install wkhtmltopdf
wget https://downloads.wkhtmltopdf.org/0.12/0.12.5/wkhtmltox_0.12.5-1.bionic_amd64.deb
dpkg -i wkhtmltox_0.12.5-1.bionic_amd64.deb

## Fails
# sudo apt-get install libssl-dev libssl1.0-dev libssl1.0.0 libssl1.1


# Install Node
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# has to be global for now...
npm install -g forever

## Install server
git clone https://github.com/ctbuh/wkhtmltopdf-api.git

# go there!
cd wkhtmltopdf-api

npm install

### using port 80
wget -O ".env" "https://raw.githubusercontent.com/ctbuh/wkhtmltopdf-api/master/.env.production"

