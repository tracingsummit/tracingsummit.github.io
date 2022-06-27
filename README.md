# tracingsummit-www

This repository holds the source files used to build a static version of
the [Tracing Summit](https://tracingsummit.org/) website.


## Requirements

You need these packages:

  * Git
  * Ruby
  * Bundler

On Debian / Ubuntu:

    sudo apt install git ruby-dev ruby-bundler

## Build

Install the gems dependencies:

    bundle install

Build and view the website now:

    bundle exec jekyll serve
