var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>Tools used to build this weather app</p>
            <ul>
                <li>Built with React</li>
                <li>Version control with git and GitHub</li>
                <li>Deployed to Heroku</li>
                <li>Styled with Foundation</li>
                <li>Bundled with Webpack</li>
                <li>Running on Express for Node.js</li>
                <li>Compiled with Babel</li>
                <li>Packages managed with npm</li>
                <li>Weather API from OpenWeatherMap</li>
            </ul>
        </div>
    );
};

module.exports = About;
