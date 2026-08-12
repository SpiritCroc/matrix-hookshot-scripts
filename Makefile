.PHONY: all clean test

all: grafana_hookshot.js grafana_hookshot.txt rageshake_sc_legacy_hookshot.js rageshake_sc_legacy_hookshot.txt rageshake_sc_next_hookshot.js rageshake_sc_next_hookshot.txt rageshake_sc_revenge_hookshot.js rageshake_sc_revenge_hookshot.txt

rageshake_sc_legacy.js: rageshake.js
	cat $< | sed 's|MAKE_WILL_REPLACE_THIS_STRING_DONT_TOUCH|schildichat-android|g' > $@

rageshake_sc_next.js: rageshake.js
	cat $< | sed 's|MAKE_WILL_REPLACE_THIS_STRING_DONT_TOUCH|schildichat-android-next|g' > $@

rageshake_sc_revenge.js: rageshake.js
	cat $< | sed 's|MAKE_WILL_REPLACE_THIS_STRING_DONT_TOUCH|schildi-revenge|g' > $@

%_hookshot.js: %.js
	cat $< | sed '0,/HEADER END/d;0,/FOOTER START/!d;s|//.*||g' | grep -v "^\( \|\t\)*$$" > $@

%_hookshot.txt: %_hookshot.js
	jq -R -s '.' < $< > $@
	cat $@

clean:
	rm -f *_hookshot.js
	rm -f *_hookshot.txt
	rm -f test.html

%_test: %.js
	node $<
	firefox test.html
