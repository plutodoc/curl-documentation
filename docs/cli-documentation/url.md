# Url

The URL syntax is protocol-dependent. You find a detailed description in RFC 3986.

You can specify multiple URLs or parts of URLs by writing part sets within braces and quoting the URL as in:

_"http://site.{one,two,three}.com"_

or you can get sequences of alphanumeric series by using [] as in:

_"ftp://ftp.example.com/file[1-100].txt"_

_"ftp://ftp.example.com/file[001-100].txt" (with leading zeros)_

_"ftp://ftp.example.com/file[a-z].txt"_

Nested sequences are not supported, but you can use several ones next to each other:

_"http://example.com/archive[1996-1999]/vol[1-4]/part{a,b,c}.html"_

You can specify any amount of URLs on the command line. They will be fetched in a sequential manner in the specified order. You can specify command line options and URLs mixed and in any order on the command line.

You can specify a step counter for the ranges to get every Nth number or letter:

_"http://example.com/file[1-100:10].txt"_

_"http://example.com/file[a-z:2].txt"_

When using [] or {} sequences when invoked from a command line prompt, you probably have to put the full URL within double quotes to avoid the shell from interfering with it. This also goes for other characters treated special, like for example '&', '?' and '*'.

Provide the IPv6 zone index in the URL with an escaped percentage sign and the interface name. Like in

_"http://[fe80::3%25eth0]/"_

If you specify URL without protocol:// prefix, curl will attempt to guess what protocol you might want. It will then default to HTTP but try other protocols based on often-used host name prefixes. For example, for host names starting with "ftp." curl will assume you want to speak FTP.

curl will do its best to use what you pass to it as a URL. It is not trying to validate it as a syntactically correct URL by any means but is fairly liberal with what it accepts.

curl will attempt to re-use connections for multiple file transfers, so that getting many files from the same server will not do multiple connects / handshakes. This improves speed. Of course this is only done on files specified on a single command line and cannot be used between separate curl invocations.
