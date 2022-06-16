# Proxy protocol prefixes

The proxy string may be specified with a protocol:// prefix to specify alternative proxy protocols.

If no protocol is specified in the proxy string or if the string does not match a supported one, the proxy will be treated as an HTTP proxy.

The supported proxy protocol prefixes are as follows:

## http://

Makes it use it as an HTTP proxy. The default if no scheme prefix is used.

## https://

Makes it treated as an HTTPS proxy.

## socks4://

Makes it the equivalent of --socks4

## socks4a://

Makes it the equivalent of --socks4a

## socks5://

Makes it the equivalent of --socks5

## socks5h://

Makes it the equivalent of --socks5-hostname
