#!/bin/bash

# Install Ruby 2.7.2
RUBY_VERSION=2.7.2
wget -q https://cache.ruby-lang.org/pub/ruby/2.7/ruby-$RUBY_VERSION.tar.gz
tar -xzf ruby-$RUBY_VERSION.tar.gz
cd ruby-$RUBY_VERSION
./configure
make
sudo make install

# Install Bundler
gem install bundler
