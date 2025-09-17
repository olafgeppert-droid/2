"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MainContent = function MainContent(_ref) {
  var viewMode = _ref.viewMode,
    selectedStudent = _ref.selectedStudent,
    selectedDate = _ref.selectedDate,
    entries = _ref.entries,
    onEditEntry = _ref.onEditEntry;
  if (viewMode === 'student' && selectedStudent) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "main",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
        children: ["Protokolle f\xFCr ", selectedStudent.name]
      }), entries.length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "welcome-screen",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Keine Eintr\xE4ge f\xFCr dieses Kind."
        })
      }) : entries.map(function (entry) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(EntryCard, {
          entry: entry,
          student: selectedStudent,
          onEdit: function onEdit() {
            return onEditEntry(entry);
          }
        }, entry.id);
      })]
    });
  } else if (viewMode === 'day' && selectedDate) {
    var entriesByStudent = {};
    entries.forEach(function (entry) {
      if (!entriesByStudent[entry.studentId]) {
        entriesByStudent[entry.studentId] = [];
      }
      entriesByStudent[entry.studentId].push(entry);
    });
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "main",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
        children: ["Eintr\xE4ge f\xFCr ", new Date(selectedDate).toLocaleDateString('de-DE')]
      }), Object.keys(entriesByStudent).length === 0 ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "welcome-screen",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "Keine Eintr\xE4ge f\xFCr dieses Datum."
        })
      }) : Object.entries(entriesByStudent).map(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
          studentId = _ref3[0],
          studentEntries = _ref3[1];
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            marginBottom: '2rem'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            children: studentEntries[0].studentName || "Sch\xFCler ".concat(studentId)
          }), studentEntries.map(function (entry) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(EntryCard, {
              entry: entry,
              onEdit: function onEdit() {
                return onEditEntry(entry);
              }
            }, entry.id);
          })]
        }, studentId);
      })]
    });
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "main",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "welcome-screen",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          children: "Willkommen!"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: "W\xE4hlen Sie links ein Kind aus der Liste, um die Protokolle anzuzeigen, oder w\xE4hlen Sie einen Tag, um alle Eintr\xE4ge f\xFCr diesen Tag zu sehen."
        })]
      })
    });
  }
};
var EntryCard = function EntryCard(_ref4) {
  var entry = _ref4.entry,
    student = _ref4.student,
    onEdit = _ref4.onEdit;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "entry-card",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "entry-header",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: entry.subject
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: new Date(entry.date).toLocaleDateString('de-DE')
      })]
    }), student && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: "Sch\xFCler:"
      }), " ", student.name]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: "Beobachtungen:"
      }), " ", entry.observations]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: "Ma\xDFnahmen:"
      }), " ", entry.measures]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: "Erfolg:"
      }), " ", entry.erfolg]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
        children: "Bewertung:"
      }), " ", entry.erfolgRating]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      className: "button",
      onClick: onEdit,
      children: "Bearbeiten"
    })]
  });
};
var _default = exports["default"] = MainContent;