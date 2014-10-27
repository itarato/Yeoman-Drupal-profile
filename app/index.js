/**
 * @file
 */

'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  prompting: function () {
    this.log('Prompting.');
    //this.prompt('Hello');
  },

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  generateFolder: function () {
    this.log('Folder generation.');
  }

});
