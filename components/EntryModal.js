"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const EntryModal = _ref => {
  let {
    entry,
    student,
    students,
    masterData,
    onSave,
    onClose
  } = _ref;
  const [formData, setFormData] = (0, _react.useState)(entry || {
    studentId: (student === null || student === void 0 ? void 0 : student.id) || '',
    subject: '',
    observations: '',
    measures: '',
    erfolg: '',
    erfolgRating: ''
  });
  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, entry ? 'Eintrag bearbeiten' : 'Neuer Eintrag'), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Kind"), /*#__PURE__*/_react.default.createElement("select", {
    className: "form-select",
    value: formData.studentId,
    onChange: e => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      studentId: parseInt(e.target.value)
    })),
    required: true
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Bitte w\xE4hlen"), students.map(s => /*#__PURE__*/_react.default.createElement("option", {
    key: s.id,
    value: s.id
  }, s.name)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Thema"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "form-input",
    value: formData.subject,
    onChange: e => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      subject: e.target.value
    })),
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Beobachtungen"), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-textarea",
    value: formData.observations,
    onChange: e => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      observations: e.target.value
    })),
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Ma\xDFnahmen"), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-textarea",
    value: formData.measures,
    onChange: e => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      measures: e.target.value
    })),
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Erfolg"), /*#__PURE__*/_react.default.createElement("textarea", {
    className: "form-textarea",
    value: formData.erfolg,
    onChange: e => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      erfolg: e.target.value
    }))
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Bewertung"), /*#__PURE__*/_react.default.createElement("select", {
    className: "form-select",
    value: formData.erfolgRating,
    onChange: e => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      erfolgRating: e.target.value
    }))
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Keine Bewertung"), /*#__PURE__*/_react.default.createElement("option", {
    value: "positiv"
  }, "Positiv"), /*#__PURE__*/_react.default.createElement("option", {
    value: "negativ"
  }, "Negativ"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "button button-danger",
    onClick: onClose
  }, "Abbrechen"), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "button button-success"
  }, "Speichern")))));
};
var _default = exports.default = EntryModal;