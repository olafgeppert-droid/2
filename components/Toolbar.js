"use strict";

var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Toolbar = function Toolbar(_ref) {
  var selectedStudent = _ref.selectedStudent,
    selectedDate = _ref.selectedDate,
    onAddStudent = _ref.onAddStudent,
    onEditStudent = _ref.onEditStudent,
    onAddEntry = _ref.onAddEntry,
    onEditEntry = _ref.onEditEntry,
    onPrint = _ref.onPrint,
    onExport = _ref.onExport,
    onImport = _ref.onImport,
    onUndo = _ref.onUndo,
    onRedo = _ref.onRedo,
    canUndo = _ref.canUndo,
    canRedo = _ref.canRedo;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "toolbar"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "toolbar-row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onAddStudent,
    title: "Neuen Sch\xFCler hinzuf\xFCgen"
  }, "+ Sch\xFCler"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onEditStudent,
    title: "Ausgew\xE4hlten Sch\xFCler bearbeiten",
    disabled: !selectedStudent
  }, "\u270E Bearbeiten"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "toolbar-info"
  }, selectedStudent ? selectedStudent.name : 'Kein Schüler ausgewählt', " | ", selectedDate || 'Kein Datum')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "toolbar-row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onAddEntry,
    title: "Neuen Eintrag hinzuf\xFCgen",
    disabled: !selectedStudent || !selectedDate
  }, "+ Eintrag"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onEditEntry,
    title: "Ausgew\xE4hlten Eintrag bearbeiten",
    disabled: !selectedStudent || !selectedDate
  }, "\u270E Bearbeiten")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "toolbar-row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onPrint,
    title: "Drucken"
  }, "\uD83D\uDDA8 Drucken"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onExport,
    title: "Exportieren"
  }, "\u2B07 Export"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onImport,
    title: "Importieren"
  }, "\u2B06 Import")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "toolbar-row"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onUndo,
    disabled: !canUndo,
    title: "R\xFCckg\xE4ngig"
  }, "\u21BA R\xFCckg\xE4ngig"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "button",
    onClick: onRedo,
    disabled: !canRedo,
    title: "Wiederherstellen"
  }, "\u21BB Wiederherstellen")));
};

// statt "export default"
window.Toolbar = Toolbar;