"use strict";

var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Toolbar = _ref => {
  let {
    selectedStudent,
    selectedDate,
    onAddStudent,
    onEditStudent,
    onAddEntry,
    onEditEntry,
    onPrint,
    onExport,
    onImport,
    onUndo,
    onRedo,
    canUndo,
    canRedo
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "toolbar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "toolbar-row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onAddStudent,
    title: "Neuen Sch\xFCler hinzuf\xFCgen"
  }, "+ Sch\xFCler"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onEditStudent,
    title: "Ausgew\xE4hlten Sch\xFCler bearbeiten",
    disabled: !selectedStudent
  }, "\u270E Bearbeiten"), /*#__PURE__*/_react.default.createElement("span", {
    className: "toolbar-info"
  }, selectedStudent ? selectedStudent.name : 'Kein Schüler ausgewählt', " | ", selectedDate || 'Kein Datum')), /*#__PURE__*/_react.default.createElement("div", {
    className: "toolbar-row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onAddEntry,
    title: "Neuen Eintrag hinzuf\xFCgen",
    disabled: !selectedStudent || !selectedDate
  }, "+ Eintrag"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onEditEntry,
    title: "Ausgew\xE4hlten Eintrag bearbeiten",
    disabled: !selectedStudent || !selectedDate
  }, "\u270E Bearbeiten")), /*#__PURE__*/_react.default.createElement("div", {
    className: "toolbar-row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onPrint,
    title: "Drucken"
  }, "\uD83D\uDDA8 Drucken"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onExport,
    title: "Exportieren"
  }, "\u2B07 Export"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onImport,
    title: "Importieren"
  }, "\u2B06 Import")), /*#__PURE__*/_react.default.createElement("div", {
    className: "toolbar-row"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onUndo,
    disabled: !canUndo,
    title: "R\xFCckg\xE4ngig"
  }, "\u21BA R\xFCckg\xE4ngig"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onRedo,
    disabled: !canRedo,
    title: "Wiederherstellen"
  }, "\u21BB Wiederherstellen")));
};

// statt "export default"
window.Toolbar = Toolbar;