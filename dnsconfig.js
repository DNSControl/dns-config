/// <reference path="types-dnscontrol.d.ts" />
// To update types-dnscontrol.d.ts run: dnscontrol write-types

// Keep this pretty:
// $ brew install prettier
// $ prettier --write dnsconfig.js

// Services:

var REG_GANDI_MAIN = NewRegistrar("gandi_main");
var DSP_GANDI_MAIN = NewDnsProvider("gandi_main");

var PROVIDER_NONE = NewRegistrar("none");
var PROVIDER_BIND = NewDnsProvider("bind");

// Macros:

var GOOGLE_WORKPLACE_MX = [MX("@", 1, "smtp.google.com.", TTL("7d"))];

// Domains:

D(
    // The domain, the registrar, and DNS Provider(s):
    "best-spaghetti-sauce-ever.com",
    REG_GANDI_MAIN,
    DnsProvider(DSP_GANDI_MAIN),

    // DNS Records:

    A("@", "142.93.29.52"),
    AAAA("@", "2604:a880:2:d1:0:1:2907:8001"),
    MX("@", 1, "jj2.whatexit.org."),
    SPF_BUILDER({
        parts: [
            "v=spf1", // Beginning of SPF
            "-all", // If you reach this, reject.
        ],
        flatten: ["*"], // Flatten all components (in this example, there are none)
    }),

    CNAME("www", "@"),
);
