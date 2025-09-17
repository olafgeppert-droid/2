"use strict";

var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Header = _ref => {
  let {
    onMenuClick
  } = _ref;
  const currentDate = new Date().toLocaleDateString('de-DE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const appVersion = "1.3.0"; // <-- Hier die Versionsnummer

  return /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "hamburger-menu",
    onClick: onMenuClick
  }, "\u2630"), /*#__PURE__*/_react.default.createElement("h1", null, "Dokumentation p\xE4dagogische Arbeit - Irina Geppert"), /*#__PURE__*/_react.default.createElement("div", {
    className: "header-info"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "header-date"
  }, currentDate), /*#__PURE__*/_react.default.createElement("span", {
    className: "header-version"
  }, appVersion)));
};

// Globale Registrierung als window-Module
window.Header = Header;