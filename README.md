# bawnjorno

A CLI to add Bonjour support to any *nix process

### Usage

`http-server test | bawnjorno --port=8080 --type=http`

### Command-line arguments

Mostly just passing configurations along to [bonjour](https://www.npmjs.com/package/bonjour)

**Required**

`-p`, `--port` Port number

`-t`, `--type` The type of [Bonjour service](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml)

**Optional**

`-n`, `--name` Service display name (default: bawnjorno)
