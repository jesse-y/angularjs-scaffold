import * as angular from 'angular';

// Include the base styles file to allow webpack to add our scss to the dependency tree.
import './styles.scss';

// Main module definition must occur first before each child component can add to the main module through the exported const.
export const MAIN_MODULE = angular.module('app', []);

import './app/app.component';