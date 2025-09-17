"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _react = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var SettingsModal = function SettingsModal(_ref) {
  var settings = _ref.settings,
    masterData = _ref.masterData,
    onSave = _ref.onSave,
    onSaveMasterData = _ref.onSaveMasterData,
    onClose = _ref.onClose;
  var _useState = (0, _react.useState)(settings),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)(masterData),
    _useState4 = _slicedToArray(_useState3, 2),
    masterFormData = _useState4[0],
    setMasterFormData = _useState4[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSave(formData);
  };
  var handleMasterDataSubmit = function handleMasterDataSubmit(e) {
    e.preventDefault();
    onSaveMasterData(masterFormData);
    onClose();
  };
  var addSchoolYear = function addSchoolYear() {
    var newYear = prompt('Neues Schuljahr hinzufügen (Format: YYYY/YYYY):');
    if (newYear && !masterFormData.schoolYears.includes(newYear)) {
      setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
        schoolYears: [].concat(_toConsumableArray(masterFormData.schoolYears), [newYear]).sort()
      }));
    }
  };
  var removeSchoolYear = function removeSchoolYear(year) {
    setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
      schoolYears: masterFormData.schoolYears.filter(function (y) {
        return y !== year;
      })
    }));
  };
  var addSchool = function addSchool() {
    var newSchool = prompt('Neue Schule hinzufügen:');
    if (newSchool && !masterFormData.schools[newSchool]) {
      setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
        schools: _objectSpread(_objectSpread({}, masterFormData.schools), {}, _defineProperty({}, newSchool, []))
      }));
    }
  };
  var removeSchool = function removeSchool(school) {
    var newSchools = _objectSpread({}, masterFormData.schools);
    delete newSchools[school];
    setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
      schools: newSchools
    }));
  };
  var addClass = function addClass(school) {
    var newClass = prompt('Neue Klasse hinzufügen:');
    if (newClass && !masterFormData.schools[school].includes(newClass)) {
      setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
        schools: _objectSpread(_objectSpread({}, masterFormData.schools), {}, _defineProperty({}, school, [].concat(_toConsumableArray(masterFormData.schools[school]), [newClass]).sort()))
      }));
    }
  };
  var removeClass = function removeClass(school, className) {
    setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
      schools: _objectSpread(_objectSpread({}, masterFormData.schools), {}, _defineProperty({}, school, masterFormData.schools[school].filter(function (c) {
        return c !== className;
      })))
    }));
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "modal-overlay",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "modal",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-header",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          children: "Einstellungen"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "modal-close",
          onClick: onClose,
          children: "\xD7"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Darstellung"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "form-label",
            children: "Farbschema"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "theme-selector",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "theme-option theme-light ".concat(formData.theme === 'light' ? 'selected' : ''),
              onClick: function onClick() {
                return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
                  theme: 'light'
                }));
              },
              title: "Hell"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "theme-option theme-dark ".concat(formData.theme === 'dark' ? 'selected' : ''),
              onClick: function onClick() {
                return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
                  theme: 'dark'
                }));
              },
              title: "Dunkel"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "theme-option theme-high-contrast ".concat(formData.theme === 'high-contrast' ? 'selected' : ''),
              onClick: function onClick() {
                return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
                  theme: 'high-contrast'
                }));
              },
              title: "Kontrastreich"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "form-label",
            children: "Schriftgr\xF6\xDFe (Labels)"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "range",
            min: "12",
            max: "24",
            value: formData.fontSize,
            onChange: function onChange(e) {
              return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
                fontSize: parseInt(e.target.value)
              }));
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            children: [formData.fontSize, "px"]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "form-label",
            children: "Schriftgr\xF6\xDFe (Eingabefelder)"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "range",
            min: "12",
            max: "24",
            value: formData.inputFontSize,
            onChange: function onChange(e) {
              return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
                inputFontSize: parseInt(e.target.value)
              }));
            }
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            children: [formData.inputFontSize, "px"]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-actions",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "button button-danger",
            onClick: onClose,
            children: "Abbrechen"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "submit",
            className: "button button-success",
            children: "Speichern"
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
        style: {
          margin: '2rem 0'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
        onSubmit: handleMasterDataSubmit,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
          children: "Stammdaten verwalten"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "form-label",
            children: "Schuljahre"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [masterFormData.schoolYears.map(function (year) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  style: {
                    flex: 1
                  },
                  children: year
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  type: "button",
                  className: "button button-danger",
                  style: {
                    padding: '0.25rem 0.5rem'
                  },
                  onClick: function onClick() {
                    return removeSchoolYear(year);
                  },
                  children: "L\xF6schen"
                })]
              }, year);
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              className: "button",
              onClick: addSchoolYear,
              children: "Schuljahr hinzuf\xFCgen"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-group",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
            className: "form-label",
            children: "Schulen und Klassen"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [Object.entries(masterFormData.schools || {}).map(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                school = _ref3[0],
                classes = _ref3[1];
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                style: {
                  marginBottom: '1rem'
                },
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '0.5rem'
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
                    style: {
                      flex: 1
                    },
                    children: school
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    type: "button",
                    className: "button button-danger",
                    style: {
                      padding: '0.25rem 0.5rem'
                    },
                    onClick: function onClick() {
                      return removeSchool(school);
                    },
                    children: "Schule l\xF6schen"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  style: {
                    paddingLeft: '1rem'
                  },
                  children: [classes.map(function (className) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '0.25rem'
                      },
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        style: {
                          flex: 1
                        },
                        children: className
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                        type: "button",
                        className: "button button-danger",
                        style: {
                          padding: '0.25rem 0.5rem'
                        },
                        onClick: function onClick() {
                          return removeClass(school, className);
                        },
                        children: "L\xF6schen"
                      })]
                    }, className);
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    type: "button",
                    className: "button",
                    style: {
                      padding: '0.25rem 0.5rem',
                      marginTop: '0.5rem'
                    },
                    onClick: function onClick() {
                      return addClass(school);
                    },
                    children: "Klasse hinzuf\xFCgen"
                  })]
                })]
              }, school);
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "button",
              className: "button",
              onClick: addSchool,
              children: "Schule hinzuf\xFCgen"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "form-actions",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "button",
            className: "button button-danger",
            onClick: onClose,
            children: "Abbrechen"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "submit",
            className: "button button-success",
            children: "Stammdaten speichern"
          })]
        })]
      })]
    })
  });
};

// Globale Registrierung als window-Modul
window.SettingsModal = SettingsModal;