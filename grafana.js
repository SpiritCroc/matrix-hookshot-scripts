test_data = {
  "receiver": "",
  "status": "firing",
  "alerts": [
    {
      "status": "firing",
      "labels": {
        "alertname": "TestAlert",
        "instance": "Grafana"
      },
      "annotations": {
        "summary": "Notification test"
      },
      "startsAt": "2022-04-05T22:16:47.085355886+02:00",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "",
      "fingerprint": "57c6d9296de2ad39",
      "silenceURL": "https://example.com/grafana/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana",
      "dashboardURL": "",
      "panelURL": "",
      "valueString": "[ metric='foo' labels={instance=bar} value=10 ]"
    }
  ],
  "groupLabels": {},
  "commonLabels": {
    "alertname": "TestAlert",
    "instance": "Grafana"
  },
  "commonAnnotations": {
    "summary": "Notification test"
  },
  "externalURL": "https://example.com/grafana/",
  "version": "1",
  "groupKey": "{alertname=\"TestAlert\", instance=\"Grafana\"}2022-04-05 22:16:47.085355886 +0200 CEST m=+100931.297103947",
  "truncatedAlerts": 0,
  "orgId": 1,
  "title": "[FIRING:1]  (TestAlert Grafana)",
  "state": "alerting",
  "message": "**Firing**\n\nValue: [ metric='foo' labels={instance=bar} value=10 ]\nLabels:\n - alertname = TestAlert\n - instance = Grafana\nAnnotations:\n - summary = Notification test\nSilence: https://example.com/grafana/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana\n"
};
fail_data =
{
  "receiver": "hookshot",
  "status": "firing",
  "alerts": [
    {
      "status": "firing",
      "labels": {
        "alertname": "systemd failures"
      },
      "annotations": {
        "description": "systemctl list-units --failed ;\nsystemctl reset-failed"
      },
      "startsAt": "2022-04-08T13:02:06.136489624+02:00",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "https://example.com/grafana/alerting/6-WtnS8nk/edit",
      "fingerprint": "93070e04dcab3ea0",
      "silenceURL": "https://example.com/grafana/alerting/silence/new?alertmanager=grafana&matcher=alertname%3Dsystemd+failures",
      "dashboardURL": "https://example.com/grafana/d/hyFvC6y7z",
      "panelURL": "https://example.com/grafana/d/hyFvC6y7z?viewPanel=2",
      "valueString": "[ metric='test-grafana-fail-service.service' labels={name=test-grafana-fail-service.service, state=failed} value=1 ]"
    }
  ],
  "groupLabels": {},
  "commonLabels": {
    "alertname": "systemd failures"
  },
  "commonAnnotations": {
    "description": "systemctl list-units --failed ;\nsystemctl reset-failed"
  },
  "externalURL": "https://example.com/grafana/",
  "version": "1",
  "groupKey": "{}:{}",
  "truncatedAlerts": 0,
  "orgId": 1,
  "title": "[FIRING:1]  (systemd failures)",
  "state": "alerting",
  "message": "**Firing**\n\nValue: [ metric='test-grafana-fail-service.service' labels={name=test-grafana-fail-service.service, state=failed} value=1 ]\nLabels:\n - alertname = systemd failures\nAnnotations:\n - description = systemctl list-units --failed ;\nsystemctl reset-failed\nSource: https://example.com/grafana/alerting/6-WtnS8nk/edit\nSilence: https://example/grafana/alerting/silence/new?alertmanager=grafana&matcher=alertname%3Dsystemd+failures\nDashboard: https://example/grafana/d/hyFvC6y7z\nPanel: https://example.com/grafana/d/hyFvC6y7z?viewPanel=2\n"
};
multi_fail_data = {
  "receiver": "hookshot \\+ email",
  "status": "firing",
  "alerts": [
    {
      "status": "firing",
      "labels": {
        "alertname": "systemd failures"
      },
      "annotations": {
        "description": "systemctl list-units --failed ;\nsystemctl reset-failed"
      },
      "startsAt": "2022-04-09T11:57:56.136489624+02:00",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "https://example.com/grafana/alerting/6-WtnS8nk/edit",
      "fingerprint": "93070e04dcab3ea0",
      "silenceURL": "https://example.com/grafana/alerting/silence/new?alertmanager=grafana&matcher=alertname%3Dsystemd+failures",
      "dashboardURL": "https://example.com/grafana/d/hyFvC6y7z",
      "panelURL": "https://example.com/grafana/d/hyFvC6y7z?viewPanel=2",
      "valueString": "[ metric='test-grafana-fail-service.service' labels={name=test-grafana-fail-service.service, state=failed} value=1 ], [ metric='test-grafana-fail-service2.service' labels={name=test-grafana-fail-service2.service, state=failed} value=1 ], [ metric='failrate' labels={instance=localhost:9100, job=node, state=failed} value=2.6666666666666665 ]"
    }
  ],
  "groupLabels": {},
  "commonLabels": {
    "alertname": "systemd failures"
  },
  "commonAnnotations": {
    "description": "systemctl list-units --failed ;\nsystemctl reset-failed"
  },
  "externalURL": "https://example.com/grafana/",
  "version": "1",
  "groupKey": "{}:{}",
  "truncatedAlerts": 0,
  "orgId": 1,
  "title": "[FIRING:1]  (systemd failures)",
  "state": "alerting",
  "message": "**Firing**\n\nValue: [ metric='test-grafana-fail-service.service' labels={name=test-grafana-fail-service.service, state=failed} value=1 ], [ metric='test-grafana-fail-service2.service' labels={name=test-grafana-fail-service2.service, state=failed} value=1 ], [ metric='failrate' labels={instance=localhost:9100, job=node, state=failed} value=2.6666666666666665 ]\nLabels:\n - alertname = systemd failures\nAnnotations:\n - description = systemctl list-units --failed ;\nsystemctl reset-failed\nSource: https://example.com/grafana/alerting/6-WtnS8nk/edit\nSilence: https://example.com/grafana/alerting/silence/new?alertmanager=grafana&matcher=alertname%3Dsystemd+failures\nDashboard: https://example.com/grafana/d/hyFvC6y7z\nPanel: https://example.com/grafana/d/hyFvC6y7z?viewPanel=2\n"
};
resolved_data = {
  "receiver": "hookshot",
  "status": "resolved",
  "alerts": [
    {
      "status": "resolved",
      "labels": {
        "alertname": "systemd failures"
      },
      "annotations": {
        "description": "systemctl list-units --failed ;\nsystemctl reset-failed"
      },
      "startsAt": "2022-04-08T13:10:46.136489624+02:00",
      "endsAt": "2022-04-08T13:14:56.136489624+02:00",
      "generatorURL": "https://example.com/grafana/alerting/6-WtnS8nk/edit",
      "fingerprint": "93070e04dcab3ea0",
      "silenceURL": "https://example.com/grafana/alerting/silence/new?alertmanager=grafana&matcher=alertname%3Dsystemd+failures",
      "dashboardURL": "https://example.com/grafana/d/hyFvC6y7z",
      "panelURL": "https://example.com/grafana/d/hyFvC6y7z?viewPanel=2",
      "valueString": "[ metric='test-grafana-fail-service.service' labels={name=test-grafana-fail-service.service, state=failed} value=1 ]"
    }
  ],
  "groupLabels": {},
  "commonLabels": {
    "alertname": "systemd failures"
  },
  "commonAnnotations": {
    "description": "systemctl list-units --failed ;\nsystemctl reset-failed"
  },
  "externalURL": "https://example.com/grafana/",
  "version": "1",
  "groupKey": "{}:{}",
  "truncatedAlerts": 0,
  "orgId": 1,
  "title": "[RESOLVED]  (systemd failures)",
  "state": "ok",
  "message": "**Resolved**\n\nValue: [ metric='test-grafana-fail-service.service' labels={name=test-grafana-fail-service.service, state=failed} value=1 ]\nLabels:\n - alertname = systemd failures\nAnnotations:\n - description = systemctl list-units --failed ;\nsystemctl reset-failed\nSource: https://example.com/grafana/alerting/6-WtnS8nk/edit\nSilence: https://example.com/grafana/alerting/silence/new?alertmanager=grafana&matcher=alertname%3Dsystemd+failures\nDashboard: https://example.com/grafana/d/hyFvC6y7z\nPanel: https://example.com/grafana/d/hyFvC6y7z?viewPanel=2\n"
};
//data = multi_fail_data;
//data = test_data;
///data = resolved_data;
require('fs').writeFile("test.html", "", (err) => { if (err) throw err; });
[test_data, fail_data, multi_fail_data, resolved_data].forEach(data => {

// HEADER END

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

// https://github.com/grafana/grafana/discussions/45457
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

//if (data.ruleUrl !== undefined) {
//    html += '<a style="font-weight: bold; font-style: italic" href="' + data.ruleUrl + '">';
//}
colorTitle(data.title, data.state, "<h2>", "</h2>");
//if (data.ruleUrl !== undefined) {
//    html += '</a>';
//}
//
plain += "\n";
html += "\n";

//if (data.state != "ok" && data.message !== undefined) {
//    plain += data.message;
//    html += "\n<p>" + data.message + "</p>";
//}

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
        //console.log(values);
    });
}

result = {
  "version": "v2",
  "empty": false,
  "plain": plain,
  "html": html,
  "msgtype": notice ? "m.notice" : "m.text",
}


// FOOTER START

console.log(result);
require('fs').appendFile("test.html", html, (err) => { if (err) throw err; });
});
