function escapeHTML(unsafe) {
  if (!unsafe) {
      return "";
  }
  return unsafe.replace(
    /[\u0000-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u00FF]/g,
    c => '&#' + ('000' + c.charCodeAt(0)).slice(-4) + ';'
  )
}
plain_user = data.data.user_id;
if (data.data.can_contact != "true") {
    plain_user = plain_user.replace(":", "/");
    html_user = escapeHTML(plain_user) + ": ";
    html_user = '<font color="#808080">' + html_user.replace("&#58;", "/") + "</font>";
} else {
    html_user = escapeHTML(plain_user) + ": ";
}
plain = plain_user + ": " + data.user_text.replace(/\n\n\n\n.*/s, ' [...]');
html = html_user + data.user_text.replace(/\n\n\n\n(.*)/s, '');
if (data.user_text.includes("\n\n\n\n")) {
    html += "<br/>" + data.user_text.replace(/.*\n\n\n\n(.*)/s, ' <details><summary>[...]</summary><pre><code>$1</code></pre></details>');
}
/*
if (data.data.is_debug_build == "true") {
    html = '<font color="#00ffff">' + html + "</font>";
}
*/
function appendValue(key, value = undefined, html_value = undefined, omitIfEmpty = false) {
    if (value === undefined) {
        value = Reflect.get(data.data, key);
    }
    if (omitIfEmpty && !value) {
        return;
    }
    if (html_value === undefined) {
        html_value = "<code>" + escapeHTML(value) + "</code>";
    }
    if (key === undefined) {
        key = "";
    } else {
        key += ": ";
    }
    html += key + html_value + "<br/>\n";
    plain += key + value + "\n";
}
html += "<hr/>";
plain += "\n\n";
labels = data.labels.filter(label =>
    !label.startsWith("mxid:") &&
    !label.startsWith("hs:")
).join(", ") + " | " + data.app;
appendValue(undefined, labels);
appendValue("os", undefined, undefined, true);
issue_name = data.report_url.replace(new RegExp(".*issues/"), '#');
if (issue_name == data.report_url) {
    issue_name = "Report";
}
html += '<a href="' + escapeHTML(data.report_url) + '">' + escapeHTML(issue_name) + "</a><br/>";
if (data.logs) {
    log_count = data.logs.length;
} else {
    log_count = 0;
}
plain += log_count + " logs\n";
html += '<a href="' + escapeHTML(data.listing_url) + '">' + log_count + " logs</a>";
plain += "\n\n";
html += "\n<p><details><summary>Raw data</summary><pre><code class=\"language-json\">" +
    JSON.stringify(data, null, 2) +
    "</code></pre></details>";
result = {
  "version": "v2",
  "empty": false,
  "plain": plain,
  "html": html,
  "msgtype": "m.text",
}
