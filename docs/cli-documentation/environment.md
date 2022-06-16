# Environment

The environment variables can be specified in lower case or upper case. The lower case version has precedence. http_proxy is an exception as it is only available in lower case.

Using an environment variable to set the proxy has the same effect as using the --proxy option.

## http_proxy [protocol://]\<host>[:port]

Sets the proxy server to use for HTTP.

## HTTPS_PROXY [protocol://]\<host>[:port]

Sets the proxy server to use for HTTPS.

## [url-protocol]_PROXY [protocol://]\<host>[:port]

Sets the proxy server to use for [url-protocol], where the protocol is a protocol that curl supports and as specified in a URL. FTP, FTPS, POP3, IMAP, SMTP, LDAP, etc.

## ALL_PROXY [protocol://]\<host>[:port]

Sets the proxy server to use if no protocol-specific proxy is set.

## NO_PROXY \<comma-separated list of hosts/domains>

list of host names that should not go through any proxy. If set to an asterisk '*' only, it matches all hosts. Each name in this list is matched as either a domain name which contains the hostname, or the hostname itself.

This environment variable disables use of the proxy even when specified with the --proxy option. That is NO_PROXY=direct.example.com curl -x http://proxy.example.com http://direct.example.com accesses the target URL directly, and NO_PROXY=direct.example.com curl -x http://proxy.example.com http://somewhere.example.com accesses the target URL through the proxy.

The list of host names can also be include numerical IP addresses, and IPv6 versions should then be given without enclosing brackets.

IPv6 numerical addresses are compared as strings, so they will only match if the representations are the same: "::1" is the same as "::0:1" but they do not match.

## APPDATA \<dir>

On Windows, this variable is used when trying to find the home directory. If the primary home variable are all unset.

## COLUMNS \<terminal width>

If set, the specified number of characters will be used as the terminal width when the alternative progress-bar is shown. If not set, curl will try to figure it out using other ways.

## CURL_CA_BUNDLE \<file>

If set, will be used as the --cacert value.

## CURL_HOME \<dir>

If set, is the first variable curl checks when trying to find its home directory. If not set, it continues to check XDG_CONFIG_HOME.

## CURL_SSL_BACKEND \<TLS backend>

If curl was built with support for "MultiSSL", meaning that it has built-in support for more than one TLS backend, this environment variable can be set to the case insensitive name of the particular backend to use when curl is invoked. Setting a name that is not a built-in alternative will make curl stay with the default.

SSL backend names (case-insensitive): bearssl, gnutls, gskit, mbedtls, nss, openssl, rustls, schannel, secure-transport, wolfssl

## HOME \<dir>

If set, this is used to find the home directory when that is needed. Like when looking for the default .curlrc. CURL_HOME and XDG_CONFIG_HOME have preference.

## QLOGDIR \<directory name>

If curl was built with HTTP/3 support, setting this environment variable to a local directory will make curl produce qlogs in that directory, using file names named after the destination connection id (in hex). Do note that these files can become rather large. Works with both QUIC backends.

## SHELL

Used on VMS when trying to detect if using a DCL or a "unix" shell.

## SSL_CERT_DIR \<dir>

If set, will be used as the --capath value.

## SSL_CERT_FILE \<path>

If set, will be used as the --cacert value.

## SSLKEYLOGFILE \<file name>

If you set this environment variable to a file name, curl will store TLS secrets from its connections in that file when invoked to enable you to analyze the TLS traffic in real time using network analyzing tools such as Wireshark. This works with the following TLS backends: OpenSSL, libressl, BoringSSL, GnuTLS, NSS and wolfSSL.

## USERPROFILE \<dir>

On Windows, this variable is used when trying to find the home directory. If the other, primary, variable are all unset. If set, curl will use the path "$USERPROFILE\Application Data".

## XDG_CONFIG_HOME \<dir>

If CURL_HOME is not set, this variable is checked when looking for a default .curlrc file.
