/**
 * @file
 */

'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  generateFolder: function () {
    console.log('Folder generation.');
  }

});
