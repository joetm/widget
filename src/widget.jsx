import preact from 'preact';
// Tell Babel to transform JSX into preact.h() calls:
/** @jsx preact.h */

// Components
import App from './components/App.jsx';

// get the script tag that loaded this script
const scripts = document.getElementsByTagName('script');
const thisScriptTag = scripts[scripts.length - 1];

let searchWidget = document.createElement("div");
const timestamp = + new Date() / 1000;
searchWidget.setAttribute('id', `search-widget-${timestamp}`);
// insert the widget into the DOM
thisScriptTag.parentNode.insertBefore(searchWidget, thisScriptTag);

preact.render((
	<App />
), document.getElementById(`search-widget-${timestamp}`));

console.log('search widget loaded');
