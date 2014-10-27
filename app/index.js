/**
 * @file
 */

'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  prompting: function () {
    this.log('Prompting.');

    this.prompt([{
      type: 'input',
      name: 'profileName',
      message: 'Profile name'
    }], function ( answers ) {
      this.profileName = answers.profileName;
    }.bind(this));

    this.async();
  },

  generateFolder: function () {
    this.log('Folder generation.');

    // @todo to machine name
    this.mkdir(this.profileName);
  }

});
