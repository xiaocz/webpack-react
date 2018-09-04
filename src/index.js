import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import ReactDOM from 'react-dom';

// const renderDom = Component => {
//     render(
//         <Component />, document.getElementById('app')
//     );
// }
// renderDom(App);
render(<App />, document.getElementById('app'));
// ReactDOM.render(<App/ >, document.getElementById('app'));