# search-proxy
Utility for searching an Algolia index from a PowWowHR front-end application.  It performs a Redis lookup of the session key (provided by the client's browser as part of the query object).  Using the session data retrieved via the key, the search proxy can determine the correct companyId to apply as a facet filter to the search query sent to Algolia.

## Technical Summary
[tbd]

## Usage

### Prerequisites
* Node.js must be installed on the host computer.
* App server must be able to access the Redis database instance containing the session data.
* Firewall rules must be set to allow traffic on port 8081.

### Installing
Download the package to the host computer (desktop or server), then navigate
to the project's directory on the filesystem using a command-prompt or terminal.

```
~/search-proxy
```

Run the following command to install the node.js dependency modules.

```
npm install
```

### Configuring
There exists several configuration files in the "config" folder, found at the following location:

```
./search-proxy/config
```

These files need to be updated to include the accurate connection information for each of the remote systems:
* algolia.json
* redis.json
* sentry.json

### Starting
Start the application from the command-prompt or terminal in the project's directory, using the following command.

```
npm start
```

Take note to change these parameters with the correct values:
* redisHost
* redisPort
* redisInstance


### Testing
With the application running, execute the test script from the project's home directory (where package.json is located).

```
npm run test
```
## Built With

* [Node.js](https://nodejs.org) - Server-side JavaScript engine
* [Redis](https://redis.io) - Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. 
* [Algolia] (https://www.algolia.com/) - A powerful hosted search API.
* [Sentry] (https://sentry.io) - Open-source error tracking that helps developers monitor and fix crashes in real time.

## Authors

* **Rob Garrison** - *Architecture* - [rgarrison3](https://github.com/rgarrison3)
* **Harrison Holland** - *Development* - [hwholland](https://github.com/hwholland)
