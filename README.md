# wkhtmltopdf-api

http://wkhtmltopdf.api.ctbuh.org

## Using

https://wkhtmltopdf.org/docs.html

https://www.npmjs.com/package/wkhtmltopdf

## Install

[install.sh](./etc/install.sh)

Run as super-user  
sudo su

```shell
bash <(curl -s https://raw.githubusercontent.com/ctbuh/wkhtmltopdf-api/master/etc/install.sh)
```

## Deploy

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


### Additional Notes

available 'pageSize' options:  
- https://doc.qt.io/archives/qt-4.8/qprinter.html#PaperSize-enum

### Future/ideas

https://docs.paperplane.app/

