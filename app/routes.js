module.exports = {
  bind : function (app, assetPath) {

    app.get('/', function (req, res) {
      res.render('example-1',
                {'assetPath' : assetPath});
    });

    app.get('/example-1', function (req, res) {
      res.render('example-1', {'assetPath' : assetPath });
    });
    app.get('/example-1a', function (req, res) {
      res.render('example-1a', {'assetPath' : assetPath });
    });
    app.get('/example-2', function (req, res) {
      res.render('example-2', {'assetPath' : assetPath });
    });
    app.get('/example-3', function (req, res) {
      res.render('example-3', {'assetPath' : assetPath });
    });
    app.get('/example-4', function (req, res) {
      res.render('example-4', {'assetPath' : assetPath });
    });
  }
};
