"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _cssjanus = require("cssjanus");

function cssToString(cssStyles, p) {
  return cssStyles.reduce(function (result, v) {
    var addition = v;

    if (typeof v === 'function') {
      var vResult = v(p);
      addition = typeof vResult === 'string' ? vResult : cssToString(vResult, p);
    }

    return result + addition;
  }, '');
}

var rtl = function rtl() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  return function (p) {
    var cssStyles = _styledComponents.css.apply(void 0, styles);

    var dir = p.dir || p.theme.dir || p.direction || p.theme.direction;
    return dir === 'rtl' ? (0, _cssjanus.transform)(cssToString(cssStyles, p)) : cssStyles;
  };
};

var _default = rtl;
exports.default = _default;
