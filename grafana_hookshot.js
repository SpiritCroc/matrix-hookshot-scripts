notice = true;
function colorTitle(title, state, html_pre = "", html_post = "") {
    html += html_pre;
    if (state == "alerting" || state == "firing") {
        html += '<font color="#ed2e18">';
        colored = true;
        notice = false;
    } else if (state == "ok" || state == "resolved") {
        html += '<font color="#10a345">';
        colored = true;
    } else {
        colored = false;
    }
    plain += title;
    html += title;
    if (colored) {
        html += "</font>";
    }
    html += html_post;
}
function parseValueString(valueString) {
    let resultValues = [];
    for (let match of valueString.matchAll(/\[\s*(var|metric)='([^']+)'\s+labels={([^}]*)}\s+value=([^\s]+)\s*\]/g)) {
        let value = {
            type: match[1],
            metric: match[2],
            labels: {},
            value: parseFloat(match[4])
        };
        if (match[3].length > 0) {
            for (let labelPair of match[3].split(",")) {
                let labelParts = labelPair.split("=");
                if (labelParts.length === 2) {
                    value.labels[labelParts[0].trim()] = labelParts[1].trim();
                }
            }
        }
        resultValues.push(value);
    }
    return resultValues;
}
plain = "";
html = "";
colorTitle(data.title, data.state, "<h2>", "</h2>");
plain += "\n";
html += "\n";
if (Array.isArray(data.alerts)) {
    data.alerts.forEach(al => {
        colorTitle(al.labels.alertname, al.status, "<h4>", "</h4>");
        if (al.annotations !== undefined && al.annotations.description !== undefined) {
            html += "\n<p>" + al.annotations.description + "</p>";
            plain += "\n" + al.annotations.description;
        }
        html += "\n<p><ul>";
        values = parseValueString(al.valueString);
        if (Array.isArray(values)) {
            values.forEach(val => {
                plain += "\n- " + val.metric + ": " + val.value;
                html += "<li>" + val.metric + ": " + val.value;
            })
        }
        html += "</ul></p>";
    });
}
result = {
  "version": "v2",
  "empty": false,
  "plain": plain,
  "html": html,
  "msgtype": notice ? "m.notice" : "m.text",
}
