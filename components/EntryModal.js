"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var EntryModal = function EntryModal(_ref) {
  var entry = _ref.entry,
    student = _ref.student,
    students = _ref.students,
    masterData = _ref.masterData,
    onSave = _ref.onSave,
    onClose = _ref.onClose;
  var _useState = (0, _react.useState)(entry || {
      studentId: (student === null || student === void 0 ? void 0 : student.id) || '',
      subject: '',
      observations: '',
      measures: '',
      erfolg: '',
      erfolgRating: ''
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, entry ? 'Eintrag bearbeiten' : 'Neuer Eintrag'), /*#__PURE__*/_react["default"].createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-label"
  }, "Kind"), /*#__PURE__*/_react["default"].createElement("select", {
    className: "form-select",
    value: formData.studentId,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        studentId: parseInt(e.target.value)
      }));
    },
    required: true
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Bitte w\xE4hlen"), students.map(function (s) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: s.id,
      value: s.id
    }, s.name);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-label"
  }, "Thema"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "form-input",
    value: formData.subject,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        subject: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-label"
  }, "Beobachtungen"), /*#__PURE__*/_react["default"].createElement("textarea", {
    className: "form-textarea",
    value: formData.observations,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        observations: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-label"
  }, "Ma\xDFnahmen"), /*#__PURE__*/_react["default"].createElement("textarea", {
    className: "form-textarea",
    value: formData.measures,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        measures: e.target.value
      }));
    },
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-label"
  }, "Erfolg"), /*#__PURE__*/_react["default"].createElement("textarea", {
    className: "form-textarea",
    value: formData.erfolg,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        erfolg: e.target.value
      }));
    }
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "form-label"
  }, "Bewertung"), /*#__PURE__*/_react["default"].createElement("select", {
    className: "form-select",
    value: formData.erfolgRating,
    onChange: function onChange(e) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        erfolgRating: e.target.value
      }));
    }
  }, /*#__PURE__*/_react["default"].createElement("option", {
    value: ""
  }, "Keine Bewertung"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "positiv"
  }, "Positiv"), /*#__PURE__*/_react["default"].createElement("option", {
    value: "negativ"
  }, "Negativ"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "button button-danger",
    onClick: onClose
  }, "Abbrechen"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "button button-success"
  }, "Speichern")))));
};
var _default = exports["default"] = EntryModal;