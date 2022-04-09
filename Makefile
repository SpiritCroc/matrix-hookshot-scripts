.PHONY: all clean test

all: grafana_hookshot.js grafana_hookshot.txt

%_hookshot.js: %.js
	cat $< | sed '0,/HEADER END/d;0,/FOOTER START/!d;s|//.*||g' | grep -v "^\( \|\t\)*$$" > $@

%_hookshot.txt: %_hookshot.js
	jq -R -s '.' < $< > $@

clean:
	rm -f *_hookshot.js
	rm -f *_hookshot.txt
	rm -f test.html

test: grafana_test

%_test: %.js
	node $<
	firefox test.html
