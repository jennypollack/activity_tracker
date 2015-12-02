require('angular/angular');
var angular = window.angular;

var activityTrackerApp = angular.module('ActivityTracker', []); 
require('./activities/activities')(activityTrackerApp);