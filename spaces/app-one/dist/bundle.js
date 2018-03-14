'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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
