# tracingsummit-www

This repository holds the source files used to build a static version of
the [Tracing Summit](https://tracingsummit.org/) website.


## Requirements

You need the latest versions of these packages:

  * Git
  * Ruby
  * Node.js

Then, run `bootstrap.sh` to install the Ruby, Python and Node.js
dependencies.

## Build

Install the node dependencies:

    npm install

Build and view the website now:

    node_modules/grunt/bin/grunt serve

This builds the website's development version (in the `dev` directory)
and serves the result locally on port 9000. If you wish to build the
production version (CSS/JS is minified, amongst other optimizations),
do:

    node_modules/grunt/bin/grunt build:prod

The result is in the `prod` directory.

Other useful Grunt tasks:

* `build:dev`: Builds the development version.


## Deploy

To deploy the website into production, do:

    node_modules/grunt/bin/grunt deploy

This builds the production version and `rsync` it to the production
server. Your SSH public key needs to be added to the production server's
`deploy` user's authorized keys.

You might also want to deploy a preview of the development version,
which contains drafts of blog posts.

    node_modules/grunt/bin/grunt deploy:pre

The result is online at <https://pre.tracingsummit.org/>.
