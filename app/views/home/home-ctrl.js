'use strict';

angular.module(window.moduleId).controller('homeCtrl', homeCtrl);

//homeCtrl.$inject = ['$sce'];

function homeCtrl(/*$sce*/) {
  var ctrl = this;
  ctrl.name = 'World';
}