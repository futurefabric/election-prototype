module.exports = {
  bind : function (app, assetPath) {

    app.get('/', function (req, res) {
      res.render('example-1',
                {'assetPath' : assetPath});
    });

    // Archiving prototypes.
    app.get('/archive', function (req, res) {
      res.render('archive-1', {'assetPath' : assetPath});
    });
    app.get('/building-construction-and-property-services', function (req, res) {
      res.render('archive-2', {'assetPath' : assetPath});
    });
    app.get('/archive/building-construction-and-property-services', function (req, res) {
      res.render('archive-4', {'assetPath' : assetPath});
    });
    app.get('/archive/building-construction-and-property-services-2', function (req, res) {
      res.render('archive-4', {'assetPath' : assetPath});
    });

    // Taxonomy prototypes.
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
