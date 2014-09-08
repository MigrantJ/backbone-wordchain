'use strict';

var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone');
    Backbone.$ = $;

var MasterView = require('./views/view-master');

//executed on document ready
$(function () {
  var masterView = new MasterView();
});