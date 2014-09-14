'use strict';

var $ = require('jquery');

var MasterView = require('./views/view-master'),
	ModelTest = require('./models/model-test.js'),
    model = new ModelTest({});

//executed on document ready
$(function () {
  var masterView = new MasterView({model: model});
});