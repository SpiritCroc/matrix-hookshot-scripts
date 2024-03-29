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
    for (let match of valueString.matchAll(/\[(\s*var='.*?')??\s*(var|metric)='([^']+)'\s+labels={([^}]*)}\s+value=([^\s]+)\s*\]/g)) {
        let value = {
            type: match[2],
            metric: match[3],
            labels: {},
            value: parseFloat(match[5])
        };
        if (match[4].length > 0) {
            for (let labelPair of match[4].split(",")) {
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
        title = al.labels.alertname;
        if (al.labels.rulename !== undefined) {
            title += " (" + al.labels.rulename + ")";
        }
        colorTitle(title, al.status, "<h4>", "</h4>");
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
                if (val.labels !== undefined) {
                    plain += " (";
                    html += " (";
                    for (const [l, v] of Object.entries(val.labels)) {
                        if (l == "__name__" || val.metric.includes(v)) {
                            continue;
                        }
                        plain += " " + l + "=" + v;
                        html += " " + l + "=" + v;
                    }
                    plain += " )";
                    html += " )";
                }
                html += "</li>";
            })
        }
        html += "</ul>";
        if (al.silenceURL !== undefined) {
            html += "<a href=\"" + al.silenceURL + "\">Mute " + title +"</a>";
        }
        html += "</p>";
    });
}
html += "\n<p><details><summary>Raw data</summary><pre><code class=\"language-json\">" +
    JSON.stringify(data, null, 2) +
    "</code></pre></details>";
result = {
  "version": "v2",
  "empty": false,
  "plain": plain,
  "html": html,
  "msgtype": notice ? "m.notice" : "m.text",
}
