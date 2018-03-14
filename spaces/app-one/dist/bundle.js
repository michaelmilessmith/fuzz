'use strict';

require('react');

var Greeting = function Greeting(_ref) {
  var name = _ref.name;
  return React.createElement(
    'div',
    null,
    'Hello ',
    name
  );
};

module.exports = Greeting;
