all: fmt types-dnscontrol.d.ts

fmt: types-dnscontrol.d.ts
	prettier -w dnsconfig.js creds.json

.PHONY: types-dnscontrol.d.ts
types-dnscontrol.d.ts:
	dnscontrol write-types

preview:
	dnscontrol preview

push:
	dnscontrol push
