'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');
    Backbone.$ = $;

module.exports = Backbone.View.extend({
  el: '#content-main',

  template: require('../templates/template-test.hbs'),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
  }
});