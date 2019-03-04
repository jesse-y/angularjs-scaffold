import { MAIN_MODULE } from 'src/index';
import templateHtml from './app.template.html';

export const App = {
	template: templateHtml
}

MAIN_MODULE
	.component('app', App as any);