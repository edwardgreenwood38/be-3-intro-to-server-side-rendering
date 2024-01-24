const React = require('react')
const Default = require('./layouts/default.jsx')


function error404 () {
    return (
        <Default>
            <h1>404 Error</h1>
            <p>Please check url and try again.</p>
            <p><a href="/">Main Page</a></p>
        </Default>
    )
};

module.exports = error404;