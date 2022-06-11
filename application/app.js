const React = require('react');
const ReactDOM = require('react-dom');
require('./main.css');
require('./main.scss');
const reactLogoPng = require('./react-logo.png');

const App = () => {
    return (
        <div>
            <img src={reactLogoPng}/>
            <h1>Hello Parcel World!</h1>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));