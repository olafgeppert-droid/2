"use strict";

var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Header = function Header(_ref) {
  var onMenuClick = _ref.onMenuClick;
  var currentDate = new Date().toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  var appVersion = "1.3.0"; // <-- Hier die Versionsnummer

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
    className: "header",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "hamburger-menu",
      onClick: onMenuClick,
      children: "\u2630"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Dokumentation p\xE4dagogische Arbeit - Irina Geppert"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "header-info",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "header-date",
        children: currentDate
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "header-version",
        children: appVersion
      })]
    })]
  });
};

// Globale Registrierung als window-Module
window.Header = Header;