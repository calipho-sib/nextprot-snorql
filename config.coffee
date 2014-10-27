exports.config =
  # See docs at http://brunch.readthedocs.org/en/latest/config.html.
  conventions:
    assets:  /^app\/assets\//
    ignored: /^(bower_components\/bootstrap-less(-themes)?|app\/styles\/overrides|(.*?\/)?[_]\w*)/
  modules:
    definition: false
    wrapper: false
  paths:
    public: 'build'
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^(bower_components|vendor)/
      order:
        before: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'bower_components/angular/angular.js',
          'bower_components/codemirror/mode/sparql/sparql.js'
        ]

    stylesheets:
      joinTo:
        'css/vendor.css': /^(bower_components|vendor)/
        'css/app.css': /^app/
      order:
        before: [
          'vendor/styles/booostrap.css',
          'bower_components/codemirror/lib/codemirror.css',
          'bower_components/codemirror/theme/twilight.css'
        ]
        after: [
          'vendor/styles/bootstrap-responsive.css'
        ]
        
    templates:
      joinTo: 'js/templates.js'

  keyword:
    # file filter
    filePattern: /\.(css|html)$/

    # By default keyword-brunch has these keywords:
    #     {!version!}, {!name!}, {!date!}, {!timestamp!}
    # using information from package.json
    map:
      distBase: -> (if process.env.BASE then process.env.BASE else '/')

  plugins:

    jade:
      pretty: yes # Adds pretty-indentation whitespaces to output (false by default)
    digest:
      # A RegExp where the first subgroup matches the filename to be replaced
      pattern: /DIGEST\(\/?([^\)]*)\)/g
      # After replacing the filename, should we discard the non-filename parts of the pattern?
      discardNonFilenamePatternParts: yes
      # RegExp that matches files that contain DIGEST references.
      referenceFiles: /\.html$/
      # How many digits of the SHA1 to append to digested files.
      precision: 8
      # Force digest-brunch to run in all environments when true.
      alwaysRun: false
      # Specify an array of environments to run in.
      environments: ['production']
      # Prepend an asset host URL to the file paths in the reference files. Use an object e.g. {production: 'http://production-asset-host.co'}
      prependHost: null
      # Output filename for a JSON manifest of reference file paths and their digest.
      manifest: ''
      # An array of infixes for alternate versions of files. This is useful when e.g. using retina.js (http://imulus.github.io/retinajs/) (@2x) for high density images.
      infixes: []
  # Enable or disable minifying of result js / css files.
  # minify: true
