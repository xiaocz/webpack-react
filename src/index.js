import React from 'react';
// import { render } from 'react-dom';
// import App from './App';
import RenderWelcome from './components/Welcome';
import ReactDOM from 'react-dom';
import AooAlias, {methodAdd} from './aoo'
// 定义方法，参数为Component
// const renderDom = Component => {
//     render(
//         <Component />, document.getElementById('app')
//     );
// }
// renderDom(App);
// render(<App />, document.getElementById('app'));
// ReactDOM.render(<App/ >, document.getElementById('app'));
// const element = <RenderWelcome/>;
// ReactDOM.render(element, document.getElementById('app'));

var x = 121;
var y = 584;
var z = methodAdd(x, y);
console.log("z=" + z);
ReactDOM.render(
    <div>
        <h1>x={x}</h1>
        <h1>y={y}</h1>
        <h1>x add y is {z}.</h1>
    </div>,  document.getElementById('app')
);
