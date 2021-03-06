module.exports = {
  devtool: 'inline-source-map',
  entry: './source/app/app.jsx',
  output: {
    path: __dirname,
    filename: './source/public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      WeatherService: 'source/app/services/weather.js',
      NotificationService: 'source/app/services/notification.js',
      Renderer: 'source/app/services/renderer.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  externals:[
    { 'config': JSON.stringify(require('./source/app/config/config.json')) },
     (function () {
      var IGNORES = [
        'electron'
      ];
      return function (context, request, callback) {
        if (IGNORES.indexOf(request) >= 0) {
          return callback(null, "require('" + request + "')");
        }
        return callback();
      };
    })()
  ],
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
