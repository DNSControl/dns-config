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
    "best-spaghetti-sauce-ever.com", // Domain or zone
    REG_GANDI_MAIN, // Registrar
    DnsProvider(DSP_GANDI_MAIN), // DNS Service

    // Records:

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

    // demo
    //CNAME("test", "@"),
    //CNAME("test2", "@"),
    //A("ip1", IP("135.181.247.240")),
    //A("ip2", IP("135.181.247.240")),
    //MX("foo", 20, "best-spaghetti-sauce-ever.com.")
);
