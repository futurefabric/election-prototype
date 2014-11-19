module.exports = {
  bind : function (app, assetPath) {

    app.get('/', function (req, res) {
      res.render('example-0',
                {'assetPath' : assetPath});
    });

    // Archiving prototypes (Building services)
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
      res.render('archive-3', {'assetPath' : assetPath});
    });
    app.get('/archive/building-construction-and-property-services-3', function (req, res) {
      res.render('archive-5', {'assetPath' : assetPath});
    });

    // Archiving prototypes (G-Cloud)
    app.get('/google', function (req, res) {
      res.render('archive/google-search', {'assetPath' : assetPath});
    });
    app.get('/google-results', function (req, res) {
      res.render('archive/google-results', {'assetPath' : assetPath});
    });
    app.get('/410', function (req, res) {
      res.render('archive/cloudstore-410', {'assetPath' : assetPath});
    });
    app.get('/archive/how-to-use-cloudstore', function (req, res) {
      res.render('archive/cloudstore', {'assetPath' : assetPath});
    });

    // Policy prototypes (topics view)
    app.get('/policies', function (req, res) {
      res.render('policies/topics.html', {'assetPath' : assetPath});
    });
    app.get('/policies/crime-and-policing', function (req, res) {
      res.render('policies/crime-and-policing.html', {'assetPath' : assetPath});
    });
    app.get('/policies/crime-and-policing-latest', function (req, res) {
      res.render('policies/crime-and-policing-latest.html', {'assetPath' : assetPath});
    });

    // Taxonomy prototypes (Early years childcare)
    app.get('/schools-colleges', function (req, res) {
      res.render('example-0', {'assetPath' : assetPath });
    });
    app.get('/example-0', function (req, res) {
      res.render('example-0', {'assetPath' : assetPath });
    });
    app.get('/schools-colleges/early-learning-childcare', function (req, res) {
      res.render('example-1', {'assetPath' : assetPath });
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

    // Logging prototypes.
    app.get('/logging', function (req, res) {
      res.render('logging-1', {'assetPath' : assetPath});
    });
    app.get('/logging-async', function (req, res) {
      res.render('logging-2', {'assetPath' : assetPath});
    });
    app.get('/logging-reordered', function (req, res) {
      res.render('logging-3', {'assetPath' : assetPath});
    });
    app.get('/logging-async-filament', function (req, res) {
      res.render('logging-4', {'assetPath' : assetPath});
    });
    app.get('/logging-async-filament-with-reorder', function (req, res) {
      res.render('logging-5', {'assetPath' : assetPath});
    });

  }
};
