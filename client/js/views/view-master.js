'use strict';

var $ = require('jquery'),
    _ = require('lodash'),
    Backbone = require('backbone');
    Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '#content-main',

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html("Hello World");
  }
});