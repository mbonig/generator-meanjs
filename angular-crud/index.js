'use strict';

var fs = require('fs'),
    s = require('underscore.string'),
    yeoman = require('yeoman-generator'),
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

            this.controllerName = props.controllerName;

            this.slugifiedModuleName = s(this.moduleName).slugify().value();
            this.humanizedModuleName = s(this.moduleName).humanize().value();

            this.slugifiedName = s(this.name).humanize().slugify().value();
            this.classifiedName = s(this.slugifiedName).classify().value();
            this.humanizedName = s(this.slugifiedName).humanize().value();

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
            this.viewName = this.moduleName;
            this.controllerName = this.moduleName;

            this.slugifiedRoutePath = s(this.routePath).slugify().value();

            this.slugifiedViewName = s(this.viewName).slugify().value();
            this.humanizedViewName = s(this.viewName).humanize().value();

            this.slugifiedControllerName = s(this.controllerName).humanize().slugify().value();
            this.classifiedControllerName = s(this.slugifiedControllerName).classify().value();
            this.humanizedControllerName = s(this.slugifiedControllerName).humanize().value();

            done();
        }.bind(this));
    },

    renderRoute: function () {
        this.template('_.client.routes.js', 'modules/' + this.slugifiedModuleName + '/client/config/' + this.slugifiedModuleName + '.client.routes.js')

    },

    renderRouteViewController: function () {
        this.template('_.list.client.controller.js', 'modules/' + this.slugifiedModuleName + '/client/controllers/' + this.slugifiedControllerName + '.list.client.controller.js');
        this.template('_.edit.client.controller.js', 'modules/' + this.slugifiedModuleName + '/client/controllers/' + this.slugifiedControllerName + '.edit.client.controller.js');
        this.template('_.create.client.controller.js', 'modules/' + this.slugifiedModuleName + '/client/controllers/' + this.slugifiedControllerName + '.create.client.controller.js');
        this.template('_.view.client.controller.js', 'modules/' + this.slugifiedModuleName + '/client/controllers/' + this.slugifiedControllerName + '.view.client.controller.js');

        this.template('_.list.client.view.html', 'modules/' + this.slugifiedModuleName + '/client/views/' + this.slugifiedViewName + '.list.client.view.html');
        this.template('_.edit.client.view.html', 'modules/' + this.slugifiedModuleName + '/client/views/' + this.slugifiedViewName + '.edit.client.view.html');
        this.template('_.create.client.view.html', 'modules/' + this.slugifiedModuleName + '/client/views/' + this.slugifiedViewName + '.create.client.view.html');
        this.template('_.view.client.view.html', 'modules/' + this.slugifiedModuleName + '/client/views/' + this.slugifiedViewName + '.view.client.view.html');

        this.template('_.service.js', 'modules/' + this.slugifiedModuleName + '/client/services/' + this.slugifiedViewName + '.service.js')
    }
});

module.exports = ViewGenerator;
