/// <reference path="types-dnscontrol.d.ts" />

// To update types-dnscontrol.d.ts run: dnscontrol write-types

var REG_GANDI_TAL = NewRegistrar("gandi_main");
var DNS_GANDI_TAL = NewDnsProvider("gandi_main");

var SPF_MXONLY = [TXT("@", "v=spf1 mx -all", TTL(3600))];

D("best-spaghetti-sauce-ever.com", REG_GANDI_TAL,
    DnsProvider(DNS_GANDI_TAL),
    SPF_MXONLY,

    A("@", "142.93.29.52"),
    AAAA("@", "2604:a880:2:d1:0:1:2907:8001"),
    MX("@", 1, "jj2.whatexit.org."),

    CNAME("www", "@"),
);
