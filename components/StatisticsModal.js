"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var StatisticsModal = function StatisticsModal(_ref) {
  var students = _ref.students,
    entries = _ref.entries,
    onClose = _ref.onClose;
  var stats = calculateStatistics(students, entries);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Statistiken"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, "\xDCbersicht"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Gesamtzahl Kinder:"), " ", stats.totalStudents), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Gesamtzahl Eintr\xE4ge:"), " ", stats.totalEntries), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Durchschnittliche Eintr\xE4ge pro Kind:"), " ", stats.totalStudents > 0 ? (stats.totalEntries / stats.totalStudents).toFixed(1) : 0), /*#__PURE__*/_react["default"].createElement("h3", null, "Eintr\xE4ge nach Kindern"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Kinder mit Eintr\xE4gen:"), " ", stats.studentsWithEntries), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Kinder ohne Eintr\xE4ge:"), " ", stats.studentsWithoutEntries), /*#__PURE__*/_react["default"].createElement("h3", null, "Bewertungen"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Positive Bewertungen:"), " ", stats.ratings.positiv), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Negative Bewertungen:"), " ", stats.ratings.negativ), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("strong", null, "Keine Bewertung:"), " ", stats.ratings.keine)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "button",
    onClick: onClose
  }, "Schlie\xDFen"))));
};

// calculateStatistics Funktion muss definiert oder importiert werden
function calculateStatistics(students, entries) {
  var totalStudents = students.length;
  var totalEntries = entries.length;
  var studentsWithEntries = new Set(entries.map(function (entry) {
    return entry.studentId;
  })).size;
  var studentsWithoutEntries = totalStudents - studentsWithEntries;
  var ratings = {
    positiv: entries.filter(function (entry) {
      return entry.erfolgRating === 'positiv';
    }).length,
    negativ: entries.filter(function (entry) {
      return entry.erfolgRating === 'negativ';
    }).length,
    keine: entries.filter(function (entry) {
      return !entry.erfolgRating || entry.erfolgRating === '';
    }).length
  };
  return {
    totalStudents: totalStudents,
    totalEntries: totalEntries,
    studentsWithEntries: studentsWithEntries,
    studentsWithoutEntries: studentsWithoutEntries,
    ratings: ratings
  };
}
var _default = exports["default"] = StatisticsModal;