const express = require("express");
const bodyParser = require("body-parser");
const serveIndex = require("serve-index");
const cors = require('cors');
const path = require("path");
const dirTree = require('directory-tree');

/**
 * Micro-service application that returns an object containing
 * meta-data about a given directory (filesystem path)
 *
 * @class      DirectoryList
 * @example    sudo npm install node index.js
 */
function DirectoryList() {
    //var express = require('express')
    var app = express()
    app.use(cors());
    app.get('/v1/filesystem/*', cors(), function (req, res) {
        var directory = req.params[0];
        var items = [];
        const tree = dirTree(directory, {exclude:/node_modules/}, (item, PATH) => {
            console.log(item);
        });
        console.log(tree);
        res.send(tree);
    })
    
    app.listen(8081);
}
module.exports = DirectoryList();