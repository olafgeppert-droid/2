"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HelpModal = function HelpModal(_ref) {
  var onClose = _ref.onClose,
    version = _ref.version;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "\u2753 Hilfe zur Anwendung"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      paddingRight: '1rem',
      maxHeight: '60vh',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Willkommen bei der Hilfe f\xFCr Ihre Anwendung zur p\xE4dagogischen Dokumentation."), /*#__PURE__*/_react["default"].createElement("h3", null, "\uD83D\uDC65 1. Kinder verwalten"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Kind anlegen:"), " Klicken Sie auf \"\uD83D\uDC65 Kind hinzuf\xFCgen\" in der Werkzeugleiste"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Kind bearbeiten:"), " W\xE4hlen Sie ein Kind aus und klicken auf \"\u270F\uFE0F Kind bearbeiten\""), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Kind suchen:"), " Nutzen Sie das Suchfeld in der Navigation")), /*#__PURE__*/_react["default"].createElement("h3", null, "\uD83D\uDCDD 2. Eintr\xE4ge verwalten"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Neuer Eintrag:"), " W\xE4hlen Sie ein Kind aus und klicken auf \"\uD83D\uDCDD Eintrag hinzuf\xFCgen\""), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Eintrag bearbeiten:"), " W\xE4hlen Sie einen Eintrag aus und klicken auf \"\uD83D\uDD27 Eintrag bearbeiten\"")), /*#__PURE__*/_react["default"].createElement("h3", null, "\uD83D\uDCBE 3. Datenmanagement"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Exportieren:"), " \"\uD83D\uDCBE Exportieren\" erstellt eine Sicherungsdatei"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Importieren:"), " \"\uD83D\uDCE5 Importieren\" l\xE4dt eine Sicherung"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Drucken:"), " \"\uD83D\uDDA8\uFE0F Drucken\" erstellt einen Ausdruck")), /*#__PURE__*/_react["default"].createElement("h3", null, "\u2699\uFE0F 4. Einstellungen"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Farbschema:"), " W\xE4hlen Sie zwischen hell, dunkel oder kontrastreich"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Schriftgr\xF6\xDFe:"), " Anpassbar in den Einstellungen"), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Stammdaten:"), " Verwalten Sie Schuljahre, Schulen und Klassen")), /*#__PURE__*/_react["default"].createElement("p", null, "Ihre Einstellungen werden automatisch im Browser gespeichert.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-actions",
    style: {
      marginTop: '1rem'
    }
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "button button-success",
    onClick: onClose
  }, "\u2714\uFE0F Verstanden")), version && /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: '1rem',
      fontSize: '0.8rem',
      color: '#666',
      textAlign: 'center'
    }
  }, "Version ", version)));
};
var _default = exports["default"] = HelpModal;