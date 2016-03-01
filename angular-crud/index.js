'use strict';

var fs = require('fs'),
    s = require('underscore.string'),
    yeoman = require('yeoman-generator'),
    inflections = require('underscore.inflections'),
    engine = require('ejs').render,
    htmlWiring = require("html-wiring");

var ViewGenerator = yeoman.generators.Base.extend({
    askForModuleName: function () {
        var modulesFolder = process.cwd() + '/modules/';
        var done = this.async();

        var prompts = [{
            type: 'list',
            name: 'moduleName',
            default: 'core',
            message: 'Which module does this CRUD module belongs to?',
            choices: []
        }];

        // Add module choices
        if (fs.existsSync(modulesFolder)) {

            fs.readdirSync(modulesFolder).forEach(function (folder) {
                var stat = fs.statSync(modulesFolder + '/' + folder);

                if (stat.isDirectory()) {
                    prompts[0].choices.push({
                        value: folder,
                        name: folder
                    });
                }
            });
        }

        this.prompt(prompts, function (props) {
            this.moduleName = props.moduleName;
            this.name = props.name || this.moduleName;


            this.slugifiedModuleName = s(this.moduleName).slugify().value();

            this.slugifiedName = s(this.name).humanize().slugify().value();
            this.classifiedName = s(this.slugifiedName).classify().value();
            this.humanizedName = s(this.slugifiedName).humanize().value();
            this.pluralizedName = inflections.pluralize(this.slugifiedName);
            this.pluralizedHumanizedName = inflections.pluralize(this.humanizedName);

            done();
        }.bind(this));
    },

    askForRouteDetails: function () {
        var done = this.async();

        var prompts = [{
            name: 'routePath',
            message: 'What do you want your route path to be?',
            default: this.slugifiedName
        }];

        this.prompt(prompts, function (props) {
            this.routePath = props.routePath;

            this.slugifiedRoutePath = s(this.routePath).slugify().value();

            done();
        }.bind(this));
    },

    renderRoute: function () {
        this.template('_.client.routes.js', 'modules/' + this.slugifiedModuleName + '/client/config/' + this.slugifiedName + '.client.routes.js')

    },

    renderRouteViewController: function () {
        this.template('_.list.client.controller.js', 'modules/' + this.slugifiedModuleName + '/client/controllers/' + this.slugifiedName + '.list.client.controller.js');
        this.template('_.edit.client.controller.js', 'modules/' + this.slugifiedModuleName + '/client/controllers/' + this.slugifiedName + '.edit.client.controller.js');
        this.template('_.create.client.controller.js', 'modules/' + this.slugifiedModuleName + '/client/controllers/' + this.slugifiedName + '.create.client.controller.js');
        this.template('_.view.client.controller.js', 'modules/' + this.slugifiedModuleName + '/client/controllers/' + this.slugifiedName + '.view.client.controller.js');

        this.template('_.list.client.view.html', 'modules/' + this.slugifiedModuleName + '/client/views/' + this.slugifiedName + '.list.client.view.html');
        this.template('_.edit.client.view.html', 'modules/' + this.slugifiedModuleName + '/client/views/' + this.slugifiedName + '.edit.client.view.html');
        this.template('_.create.client.view.html', 'modules/' + this.slugifiedModuleName + '/client/views/' + this.slugifiedName + '.create.client.view.html');
        this.template('_.view.client.view.html', 'modules/' + this.slugifiedModuleName + '/client/views/' + this.slugifiedName + '.view.client.view.html');

        this.template('_.service.js', 'modules/' + this.slugifiedModuleName + '/client/services/' + this.slugifiedName + '.service.js');

        this.template('_.client.config.js', 'modules/' + this.slugifiedModuleName + '/client/config/' + this.slugifiedName + '.client.config.js')

    }
});

module.exports = ViewGenerator;
