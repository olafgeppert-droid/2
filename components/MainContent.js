"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MainContent = _ref => {
  let {
    viewMode,
    selectedStudent,
    selectedDate,
    entries,
    onEditEntry
  } = _ref;
  if (viewMode === 'student' && selectedStudent) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "main"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Protokolle f\xFCr ", selectedStudent.name), entries.length === 0 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "welcome-screen"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Keine Eintr\xE4ge f\xFCr dieses Kind.")) : entries.map(entry => /*#__PURE__*/_react.default.createElement(EntryCard, {
      key: entry.id,
      entry: entry,
      student: selectedStudent,
      onEdit: () => onEditEntry(entry)
    })));
  } else if (viewMode === 'day' && selectedDate) {
    const entriesByStudent = {};
    entries.forEach(entry => {
      if (!entriesByStudent[entry.studentId]) {
        entriesByStudent[entry.studentId] = [];
      }
      entriesByStudent[entry.studentId].push(entry);
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "main"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Eintr\xE4ge f\xFCr ", new Date(selectedDate).toLocaleDateString('de-DE')), Object.keys(entriesByStudent).length === 0 ? /*#__PURE__*/_react.default.createElement("div", {
      className: "welcome-screen"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Keine Eintr\xE4ge f\xFCr dieses Datum.")) : Object.entries(entriesByStudent).map(_ref2 => {
      let [studentId, studentEntries] = _ref2;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: studentId,
        style: {
          marginBottom: '2rem'
        }
      }, /*#__PURE__*/_react.default.createElement("h3", null, studentEntries[0].studentName || "Sch\xFCler ".concat(studentId)), studentEntries.map(entry => /*#__PURE__*/_react.default.createElement(EntryCard, {
        key: entry.id,
        entry: entry,
        onEdit: () => onEditEntry(entry)
      })));
    }));
  } else {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "main"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "welcome-screen"
    }, /*#__PURE__*/_react.default.createElement("h2", null, "Willkommen!"), /*#__PURE__*/_react.default.createElement("p", null, "W\xE4hlen Sie links ein Kind aus der Liste, um die Protokolle anzuzeigen, oder w\xE4hlen Sie einen Tag, um alle Eintr\xE4ge f\xFCr diesen Tag zu sehen.")));
  }
};
const EntryCard = _ref3 => {
  let {
    entry,
    student,
    onEdit
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "entry-card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "entry-header"
  }, /*#__PURE__*/_react.default.createElement("span", null, entry.subject), /*#__PURE__*/_react.default.createElement("span", null, new Date(entry.date).toLocaleDateString('de-DE'))), student && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Sch\xFCler:"), " ", student.name), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Beobachtungen:"), " ", entry.observations), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Ma\xDFnahmen:"), " ", entry.measures), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Erfolg:"), " ", entry.erfolg), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "Bewertung:"), " ", entry.erfolgRating), /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: onEdit
  }, "Bearbeiten"));
};
var _default = exports.default = MainContent;