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
fs_fail_data = {
  "receiver": "hookshot-only",
  "status": "firing",
  "alerts": [
    {
      "status": "firing",
      "labels": {
        "alertname": "FS used"
      },
      "annotations": {},
      "startsAt": "2022-07-03T18:34:02.868808278+02:00",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "https://example.com/alerting/grafana/le6Ay187k/view",
      "fingerprint": "d3efc7f8672067f6",
      "silenceURL": "https://example.com/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DFS+used",
      "dashboardURL": "https://example.com/d/hyFvC6y7z",
      "panelURL": "https://example.com/d/hyFvC6y7z?viewPanel=4",
      "valueString": "[ var='B0' metric='localhost:9100/' labels={device=/dev/mapper/root, fstype=ext4, instance=localhost:9100, job=node, mountpoint=/} value=86.83759366878994 ]"
    }
  ],
  "groupLabels": {},
  "commonLabels": {
    "alertname": "FS used"
  },
  "commonAnnotations": {},
  "externalURL": "https://example.com/",
  "version": "1",
  "groupKey": "{}/{somelabel!=\"no-hookshot\"}:{}",
  "truncatedAlerts": 0,
  "orgId": 1,
  "title": "[FIRING:1]  (FS used)",
  "state": "alerting",
  "message": "**Firing**\n\nValue: [ var='B0' metric='localhost:9100/' labels={device=/dev/mapper/root, fstype=ext4, instance=localhost:9100, job=node, mountpoint=/} value=86.83759366878994 ]\nLabels:\n - alertname = FS used\nAnnotations:\nSource: https://example.com/alerting/grafana/le6Ay187k/view\nSilence: https://example.com/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DFS+used\nDashboard: https://example.com/d/hyFvC6y7z\nPanel: https://example.com/d/hyFvC6y7z?viewPanel=4\n"
}
no_data = {
  "receiver": "hookshot-only",
  "status": "firing",
  "alerts": [
    {
      "status": "firing",
      "labels": {
        "alertname": "DatasourceNoData",
        "datasource_uid": "Cbx8lpynz",
        "ref_id": "A",
        "rulename": "battery charge"
      },
      "annotations": {},
      "startsAt": "2022-07-19T06:07:07+02:00",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "https://example.com/alerting/grafana/3HwbuaU7z/view",
      "fingerprint": "583e2e8d8fdc7002",
      "silenceURL": "https://example.com/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DDatasourceNoData&matcher=datasource_uid%3DCbx8lpynz&matcher=ref_id%3DA&matcher=rulename%3Dbattery+charge",
      "dashboardURL": "https://example.com/d/_jnfQ-8nk",
      "panelURL": "https://example.com/d/_jnfQ-8nk?viewPanel=2",
      "valueString": ""
    },
    {
      "status": "firing",
      "labels": {
        "alertname": "DatasourceNoData",
        "datasource_uid": "Cbx8lpynz",
        "ref_id": "A",
        "rulename": "UPS status"
      },
      "annotations": {},
      "startsAt": "2022-07-19T14:37:07+02:00",
      "endsAt": "0001-01-01T00:00:00Z",
      "generatorURL": "https://example.com/alerting/grafana/IA_dr-8nz/view",
      "fingerprint": "9467ea41a4343aad",
      "silenceURL": "https://example.com/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DDatasourceNoData&matcher=datasource_uid%3DCbx8lpynz&matcher=ref_id%3DA&matcher=rulename%3DUPS+status",
      "dashboardURL": "https://example.com/d/_jnfQ-8nk",
      "panelURL": "https://example.com/d/_jnfQ-8nk?viewPanel=12",
      "valueString": ""
    }
  ],
  "groupLabels": {},
  "commonLabels": {
    "alertname": "DatasourceNoData",
    "datasource_uid": "Cbx8lpynz",
    "ref_id": "A"
  },
  "commonAnnotations": {},
  "externalURL": "https://example.com/",
  "version": "1",
  "groupKey": "{}/{somelabel!=\"no-hookshot\"}:{}",
  "truncatedAlerts": 0,
  "orgId": 1,
  "title": "[FIRING:2]  (DatasourceNoData Cbx8lpynz A)",
  "state": "alerting",
  "message": "**Firing**\n\nValue: [no value]\nLabels:\n - alertname = DatasourceNoData\n - datasource_uid = Cbx8lpynz\n - ref_id = A\n - rulename = battery charge\nAnnotations:\nSource: https://example.com/alerting/grafana/3HwbuaU7z/view\nSilence: https://example.com/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DDatasourceNoData&matcher=datasource_uid%3DCbx8lpynz&matcher=ref_id%3DA&matcher=rulename%3Dbattery+charge\nDashboard: https://example.com/d/_jnfQ-8nk\nPanel: https://example.com/d/_jnfQ-8nk?viewPanel=2\n\nValue: [no value]\nLabels:\n - alertname = DatasourceNoData\n - datasource_uid = Cbx8lpynz\n - ref_id = A\n - rulename = UPS status\nAnnotations:\nSource: https://example.com/alerting/grafana/IA_dr-8nz/view\nSilence: https://example.com/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DDatasourceNoData&matcher=datasource_uid%3DCbx8lpynz&matcher=ref_id%3DA&matcher=rulename%3DUPS+status\nDashboard: https://example.com/d/_jnfQ-8nk\nPanel: https://example.com/d/_jnfQ-8nk?viewPanel=12\n"
}
require('fs').writeFile("test.html", "", (err) => { if (err) throw err; });
[test_data, fail_data, multi_fail_data, resolved_data, fs_fail_data, no_data].forEach(data => {

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
            })
        }
        html += "</ul>";
        if (al.silenceURL !== undefined) {
            html += "<a href=\"" + al.silenceURL + "\">Mute " + title +"</a>";
        }
        html += "</p>";
        //console.log(values);
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


// FOOTER START

console.log(result);
require('fs').appendFile("test.html", html, (err) => { if (err) throw err; });
});
