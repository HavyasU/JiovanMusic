const express = require('express');
const hostname = '0.0.0.0';
const port = process.env.PORT || 5000;
const path = require('path')
const app = express();
const exphbs = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
/* Running  APP.PY */
try{


async function runapi() {
  const { spawn } = require('child_process');
  // Define the command to run the Python program
  const pythonProcess = spawn('python', ['./savanapi/test.py']);

  // Listen for data from the Python program's stdout
  pythonProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  // Listen for data from the Python program's stderr
  pythonProcess.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
  });

  // Listen for the Python program to exit
  pythonProcess.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
runapi()
}
catch(err){
  console.log(err)
}
/******************************************************************** */
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended: true }));
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "main" }));
app.set('view engine', '.hbs');
app.set('view engine', 'handlebars');

app.use('/', require(path.join(__dirname, "routes/route.js")))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname, 'static')))
app.listen(port,hostname, () => {
  console.log(`app is Running in port http://${hostname}:${port}`)})


