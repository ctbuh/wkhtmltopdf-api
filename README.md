# wkhtmltopdf-api

http://wkhtmltopdf.api.ctbuh.org

## Using

https://wkhtmltopdf.org/docs.html

https://www.npmjs.com/package/wkhtmltopdf

## Setup

```shell
sudo apt-get update && apt-get upgrade

sudo apt-get install fontconfig libxrender1 xfonts-base xfonts-75dpi libjpeg-turbo8 libxext6
sudo apt-get install ttf-mscorefonts-installer

sudo apt-get -f install

wget https://downloads.wkhtmltopdf.org/0.12/0.12.5/wkhtmltox_0.12.5-1.bionic_amd64.deb
dpkg -i wkhtmltox_0.12.5-1.bionic_amd64.deb

# optional SSL

sudo apt-get install libssl-dev libssl1.0-dev libssl1.0.0 libssl1.1
```

### Deploy

Once:

```shell
git config --global credential.helper cache
git pull
```

```shell
bash deploy.sh
```


### AWS Pricing

CPU/GPU Optimized

| Instance    | ECUs | vCPUs | GB memory | On-Demand Price | Reserved Price |
|-------------|------|-------|-----------|-----------------|----------------|
| c5n.large   | 8    | 2     | 5.25      | $78             | $50            |
| c5n.xlarge  | 16   | 4     | 10.5      | $158            | $100           |
| c5n.2xlarge | 31   | 8     | 21        | $315            | $200           |
| g2.2xlarge  | 26   | 8     | 15        | $475            | $346           |



### Future/ideas

https://docs.paperplane.app/

