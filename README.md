# matrix-hookshot-scripts

My `transformationFunction` scripts for [matrix-hookshot](https://github.com/matrix-org/matrix-hookshot).  
Currently only includes a script for [grafana 8 alerts](https://grafana.com/docs/grafana/latest/alerting/unified-alerting/).

Testing and writing happens in `grafana.js`, then run `make` to generate `grafana_hookshot.js` (without testing header and footer) and `grafana_hookshot.txt` (escaped js for easier pasting into `/devtools`).
