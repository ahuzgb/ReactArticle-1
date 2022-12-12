import React from "react";
import "./Node.css";
import electron_hello_world from "./electron_hello_world.png";
import electron_logo from "./electron_logo.png";

export default function Node() {
  return (
    <article id="node" className="container">
      <h1>Node.js Overview</h1>
      <section id="node-intro">
        <h2 className="mb-4">What is Node.js?</h2>
        <img
          src="https://www.smarshinfotech.com/blog/wp-content/uploads/2022/11/nodejs-logo.png"
          alt="Node.js Logo"
          className="float-right"
        />
        <p>
          Node is not a programming language nor a framework - Node is a
          single-threaded, open-source, cross-platform runtime environment based
          on Javascript. It runs the Chrome V8 JavaScript Runtime Engine (an
          JavaScript Execution Engine) which enables it to execute JavaScript
          code outside of a web browser.
        </p>
        <p>
          It was released in 2009 by Ryan Dahl, who develops it together with
          the OpenJS Foundation until now. Node.js was written in with a
          combination of the languages C, C++ and JavaScript.
        </p>
        <p>
          Possible use cases for it are for example Real-Time Applications or
          the development of API Services, so it’s suitable for both front- and
          backend.
        </p>
      </section>
      <section id="how-node-works">
        <h2 className="mb-4">How does Node.js work?</h2>

        <p>
          Node.js uses the so-called „Single Threaded Event Loop“ which
          functions as described in the following:
        </p>
        <img
          src="https://kinsta.com/wp-content/uploads/2021/03/Nodejs-Architecture-1024x576.png"
          alt="Node.js Workflow Chart"
        />
        <ol>
          <li>
            Requests are placed into a queue, there the Event Loop checks
            whether the queue requires an blocking input/output (I/O) operation
            and processes the request and sends a response if NOT
          </li>
          <li>
            If the request has a blocking operation to perform, the event loop
            assigns a thread from the internal thread pool (called worker group)
            to process the request. Note: Internal threads are limited.
          </li>
          <li>
            The event loop tracks the process and places the request in the
            queue once blocking task is processed. That’s how Node.js maintains
            its non-blocking nature.
          </li>
        </ol>
        <p>
          It uses fewer threads compared to multi-threaded request-response
          models and therefore less resources/memory which results in faster
          task execution.
        </p>
        <p>
          However when you need to process data-intensive tasks, the use of
          multi-threaded languages like Java makes more sense.
        </p>
        <p>For real-time applications Node.js is to be preferred.</p>
      </section>
      <section id="pros_and_cons">
        <h2 className="mb-4">Advantages and disadvantages of Node.js</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Pros</h3>
            <ul>
              <li>High-performance for real-time applications</li>
              <li>Easily scalable </li>
              <li>Community support to simplify development</li>
              <li>Easy to learn, quick to adapt</li>
              <li>Improves app response time and boosts performance</li>
              <li>Extensibility to meet customized requirements</li>
              <li>Reduces loading time by quick caching</li>
              <li>Helps building cross platform applications</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Cons</h3>
            <ul>
              <li>Reduced performance when handling heavy computing tasks</li>
              <li>
                Unstable application program interface (updates with backward
                incompatible changes)
              </li>
              <li>Lack of strong standard library</li>
              <li>
                Asynchronous programming models (more difficult than linear
                blocking I/O programming)
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="npm">
        <h2 className="mb-4">What is NPM?</h2>
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.H4TLBwJbZXwt3Fmc-lCYTwHaEB&pid=Api"
          alt="Logo NPM"
          className="float-right max-w-30"
        />
        <p>
          NPM stands for Node Package Manager and is Node.js’s package
          ecosystem.
        </p>
        <p>
          More than that, it is the largest package ecosystem of all open-source
          libraries in the world.
        </p>
        <p>
          It provides a command-line utility for using packages with a single
          command. The command-line utility also enables users to manage
          package’s versions, review dependencies and even set up custom
          scripts.
        </p>
        <p>NPM is the most loved possession of the Node.js community.</p>
      </section>
      <section id="node_hello_world">
        <h2 className="mb-4">Basic Hello World Program in Node.js</h2>
        <p>
          If you haven’t already installed node, go for it now
          <a href="https://nodejs.dev/en/download/">
            https://nodejs.dev/en/download/
          </a>
          and follow the instructions based on your operating system.
        </p>
        <p>
          You can check, if you have node installed, by executing the command
          „node -v“ in your terminal - this should respond with something like
          „v19.2.0“.
        </p>
        <p>
          If you have node installed, create a folder for the example. In it
          create a file called „server.js“ with the following content:
        </p>
        <pre>
          <code>
            {`const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log("Server running at http://" + hostname +  ":" + port + "/");
});
`}
          </code>
        </pre>
        <p>
          Safe the file, then run the command „node server.js“ in its folder.
          You should see the output „Server running at http://…“ in your
          console.
        </p>
        <p>
          Next go to your browser and browse to{" "}
          <a href="http://localhost:3000" target="_blank">
            http://localhost:3000
          </a>
          you should see the message defined in the line with res.end - in our
          case „Hello World!“
        </p>
        <p>
          Congratulations, you now have written your first program with Node.js!{" "}
        </p>
      </section>
      <section id="electron">
        <h2 className="mb-4">Bonus Info Electron</h2>
        <img src={electron_logo} alt="Electron Logo" />
        <p>
          Electron is an open-source framework based on Node.js, which enables
          the user to build native cross-platform desktop apps using just HTML,
          CSS and JavaScript.
        </p>
        <p>
          It combines frontend and backend abilities and allow the use of other
          frameworks and libraries. Some popular apps built with Electron are:
          Discord, Visual Studio Code, Skype, Signal etc.
        </p>
        <h3>Example Basic Hello World App:</h3>
        <p>
          Create a folder for the Hello World App, here called
          „electron_example“.
        </p>
        <p>
          In its terminal type „npm init -y“ and after executing it, go on and
          execute the command „npm i -D electron“.
        </p>
        <p>
          Create a main.js file and set it as the main entry point in your
          package.json - „main“: „main.js“.
        </p>
        <p>In your main.js type:</p>
        <pre>
          <code>
            {`const {app, BrowserWindow} = require('electron') 
const url = require('url') 
const path = require('path')  

let win  

function createWindow() { 
   win = new BrowserWindow({width: 800, height: 600}) 
   win.loadURL(url.format ({ 
      pathname: path.join(__dirname, 'index.html'), 
      protocol: 'file:', 
      slashes: true 
   })) 
}  

app.on('ready', createWindow) 

`}
          </code>
        </pre>
        <p>
          After that create an index.html file and enter the following code in
          it:
        </p>
        <pre>
          <code>
            {`<!DOCTYPE html>
<html>
   <head>
      <meta charset = "UTF-8">
      <title>Hello World!</title>
   </head>
   
   <body>
      <h1>Hello World!</h1>
      We are using node <script>document.write(process.versions.node)</script>,
      Chrome <script>document.write(process.versions.chrome)</script>,
      and Electron <script>document.write(process.versions.electron)</script>.
   </body>
</html>

`}
          </code>
        </pre>
        <p>
          If you haven’t already installed electron (like node) globally, you
          now have to run the command „npm install -g electron-prebuilt“ in your
          terminal. You can check if you already have it installed by executing
          the command „electron —version“ in your terminal.
        </p>
        <p>
          Next run the app using the command „electron main.js“ in your
          terminal.
        </p>
        <p>
          A new window should pop up looking like this (depending on the
          operating system you use)
        </p>
        <img src={electron_hello_world} alt="Electron Hello World" />
        <p>
          Congrats! You now have written your first cross-platform application!
        </p>
      </section>
    </article>
  );
}
