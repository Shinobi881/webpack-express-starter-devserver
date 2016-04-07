var express = require('express');
var path = require('path');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = process.env.PORT || 3000;
var publicPath = path.resolve(__dirname, 'dist/');


app.use(express.static(publicPath));

if (!isProduction) {
  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  
  // var server = new WebpackDevServer(compiler, {    
  //   contentBase: 'dist',
  //   hot: true,
  //   historyApiFallback: false,
  //   filename: 'bundle.js',
  //   stats: {
  //     colors: true,
  //   },
  //   publicpath: 'http://localhost:3000/dist/',
  //   proxy: {
  //     "*": "http://localhost:3000"
  //   }
  // });

  // server.listen(3000, "localhost", function() {});


    var server = new WebpackDevServer(webpack(config), {
      // contentBase: 'dist/',
      hot: true,
      filename: 'bundle.js',
      publicPath: '/dist',
      stats: {
        colors: true,
      },
      historyApiFallback: true,
      proxy: {
        '*': 'http://localhost:3000',
      },
    })

    server.listen(3001, 'localhost', function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Listening at localhost:3001');
      }

    });
} else {
  app.get('/', function (req, res) {
    res.sendFile(publicPath + '/index.html');
  });
}



// app.get('/home', function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// });

app.listen(port, function () {
  console.log('Server running on port ' + port);
});






// We point to our static assets
// app.use(express.static(publicPath));
// app.use(webpackHotMiddlwware(compiler));




// And run the server
// app.listen(port, function () {
//   console.log('Server running on port ' + port);
// });



