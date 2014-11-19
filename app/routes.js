module.exports = {
  bind : function (app, assetPath) {

    app.get('/', function (req, res) {
      res.render('example-0',
                {'assetPath' : assetPath});
    });

    // Archiving search
    // How GOV.UK search might work for archived topics
    app.get('/search/archive', function (req, res) {
      res.render('archive-search', {'assetPath' : assetPath});
    });

    // Archiving prototypes (Governors' handbook)
    app.get('/governors-handbook', function (req, res) {
      res.render('governors-handbook', {'assetPath' : assetPath});
    });
    app.get('/info/governors-handbook', function (req, res) {
      res.render('governors-handbook-info', {'assetPath' : assetPath});
    });
    app.get('/governors-handbook/v1', function (req, res) {
      res.render('governors-handbook-version', {'assetPath' : assetPath});
    });

    // Archiving prototypes (Building services)
    // Click on linked page, goes through to 410 page, you can then
    // see the inverted page.
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

    // Archiving and 410 prototypes (G-Cloud)
    // Google search, Google results with archived link,
    // goes through to 410 page, you can then see the inverted page
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

    // Policy areas with new list of names
    app.get('/policies-renamed', function (req, res) {
      res.render('policies-renamed', {'assetPath' : assetPath});
    });

    // Policy prototypes (Crime and policing)
    // List of policy areas, filter for "crime", then go through to
    // the "window" of latest stuff
    app.get('/policies', function (req, res) {
      res.render('policies/topics.html', {'assetPath' : assetPath});
    });
    app.get('/policies/crime-and-policing', function (req, res) {
      res.render('policies/crime-and-policing.html', {'assetPath' : assetPath});
    });
    app.get('/policies/crime-and-policing-latest', function (req, res) {
      res.render('policies/crime-and-policing-latest.html', {'assetPath' : assetPath});
    });

    // Policy prototypes (Early years childcare)
    // List of topics, then go through to early years childcare page with
    // a "window" at the bottom
    // If you click on any of the "see more" links you get to
    // example 3, which is a filtered publication list by policy topic
    // Then example 4 is just the window, without any of the other content
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

    // New "scheme page"
    app.get('/scheme', function (req, res) {
      res.render('scheme', {'assetPath' : assetPath });
    });

    // Logging prototypes.
    app.get('/logging', function (req, res) {
      res.render('logging/logging-1', {'assetPath' : assetPath});
    });
    app.get('/logging-async', function (req, res) {
      res.render('logging/logging-2', {'assetPath' : assetPath});
    });
    app.get('/logging-reordered', function (req, res) {
      res.render('logging/logging-3', {'assetPath' : assetPath});
    });
    app.get('/logging-async-filament', function (req, res) {
      res.render('logging/logging-4', {'assetPath' : assetPath});
    });
    app.get('/logging-async-filament-with-reorder', function (req, res) {
      res.render('logging/logging-5', {'assetPath' : assetPath});
    });

  }
};
