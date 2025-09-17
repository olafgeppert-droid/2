"use strict";

var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var StatisticsModal = function StatisticsModal(_ref) {
  var students = _ref.students,
    entries = _ref.entries,
    onClose = _ref.onClose;
  var stats = calculateStatistics(students, entries);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modal-overlay",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "modal",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          children: "Statistiken"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "modal-close",
          onClick: onClose,
          children: "\xD7"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "\xDCbersicht"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: "Gesamtzahl Kinder:"
          }), " ", stats.totalStudents]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: "Gesamtzahl Eintr\xE4ge:"
          }), " ", stats.totalEntries]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: "Durchschnittliche Eintr\xE4ge pro Kind:"
          }), " ", stats.totalStudents > 0 ? (stats.totalEntries / stats.totalStudents).toFixed(1) : 0]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Eintr\xE4ge nach Kindern"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: "Kinder mit Eintr\xE4gen:"
          }), " ", stats.studentsWithEntries]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: "Kinder ohne Eintr\xE4ge:"
          }), " ", stats.studentsWithoutEntries]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Bewertungen"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: "Positive Bewertungen:"
          }), " ", stats.ratings.positiv]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: "Negative Bewertungen:"
          }), " ", stats.ratings.negativ]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
            children: "Keine Bewertung:"
          }), " ", stats.ratings.keine]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "form-actions",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          className: "button",
          onClick: onClose,
          children: "Schlie\xDFen"
        })
      })]
    })
  });
};
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

// Statt "export default" global verfügbar machen
window.StatisticsModal = StatisticsModal;