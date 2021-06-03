/*
Implement a node app called fetcher.js.

It should take two command line arguments:
* a URL
* a local file path

It should download the resource at the URL to the local path on your machine.
Upon completion, it should print out a message like:
"Downloaded and saved 1235 bytes to ./index.html."
________________________

Asynchronous Operations

There are two operations in this problem which will take an unknown amount of time:

* You need to make an http request and wait for the response.
* After the http request is complete, you need to take the data you receive
and write it to a file in your local filesystem.

When you're trying to control the order of asynchronous operations, you can use nested callbacks.
___________________________

Tips

* Install and use the request library to make the HTTP request
  (We know this library is deprecated but it is still ok to use for our purposes.)
* Use Node's fs (file system) module to write the file
* Use the callback based approach we've been learning so far
* Do not use the pipe function
* Do not use synchronous functions (see warning above)
*/

const request = require("request");
// const readline = require("readline");
const fs = require("fs");
const args = process.argv.slice(2);
// console.log(args);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const url = args[0];
const path = args[1];
// console.log(url, path);

request(url, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log("body:", body); // Print the HTML for the Google homepage.

  fs.writeFile(path, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Downloaded and saved to ./index.html");
    process.exit();
  });
});
