# directory-list
Micro-service application that returns meta-data about a directory.

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
~/directory-list
```

Run the following command to install the node.js dependency modules.

```
npm install
```

### Starting
Start the application from the command-prompt or terminal in the project's directory, using the following command.

```
npm start
```

### Testing
With the application running, execute the test script from the project's home directory (where package.json is located).

```
npm run test
```
## Built With

* [Node.js](https://nodejs.org) - Server-side JavaScript engine

## Authors
* **Harrison Holland** - *Development* - [hwholland](https://github.com/hwholland)
