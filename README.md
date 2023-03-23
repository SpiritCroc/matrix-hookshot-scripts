# matrix-hookshot-scripts

My `transformationFunction` scripts for [matrix-hookshot](https://github.com/matrix-org/matrix-hookshot).  

Currently includes:
- [grafana 8 alerts](https://grafana.com/docs/grafana/latest/alerting/unified-alerting/)
- [rageshake](https://github.com/matrix-org/rageshake/blob/master/docs/generic_webhook.md)

Testing and writing happens e.g. in `grafana.js`, then run `make` to generate `grafana_hookshot.js` (without testing header and footer) and `grafana_hookshot.txt` (escaped js for easier pasting into `/devtools`).
