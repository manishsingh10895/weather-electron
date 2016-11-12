module.exports = {
  devtool: 'inline-source-map',
  entry: './src/app/app.jsx',
  output: {
    path: __dirname,
    filename: './src/public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      WeatherService: 'src/app/services/weather.js',
      NotificationService: 'src/app/services/notification.js',
      Renderer: 'src/app/services/renderer.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  externals:[
    { 'config': JSON.stringify(require('./src/app/config/config.json')) },
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
