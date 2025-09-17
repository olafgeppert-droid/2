"use strict";

var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const SettingsModal = _ref => {
  let {
    settings,
    masterData,
    onSave,
    onSaveMasterData,
    onClose
  } = _ref;
  const [formData, setFormData] = (0, _react.useState)(settings);
  const [masterFormData, setMasterFormData] = (0, _react.useState)(masterData);
  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
  };
  const handleMasterDataSubmit = e => {
    e.preventDefault();
    onSaveMasterData(masterFormData);
    onClose();
  };
  const addSchoolYear = () => {
    const newYear = prompt('Neues Schuljahr hinzufügen (Format: YYYY/YYYY):');
    if (newYear && !masterFormData.schoolYears.includes(newYear)) {
      setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
        schoolYears: [...masterFormData.schoolYears, newYear].sort()
      }));
    }
  };
  const removeSchoolYear = year => {
    setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
      schoolYears: masterFormData.schoolYears.filter(y => y !== year)
    }));
  };
  const addSchool = () => {
    const newSchool = prompt('Neue Schule hinzufügen:');
    if (newSchool && !masterFormData.schools[newSchool]) {
      setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
        schools: _objectSpread(_objectSpread({}, masterFormData.schools), {}, {
          [newSchool]: []
        })
      }));
    }
  };
  const removeSchool = school => {
    const newSchools = _objectSpread({}, masterFormData.schools);
    delete newSchools[school];
    setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
      schools: newSchools
    }));
  };
  const addClass = school => {
    const newClass = prompt('Neue Klasse hinzufügen:');
    if (newClass && !masterFormData.schools[school].includes(newClass)) {
      setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
        schools: _objectSpread(_objectSpread({}, masterFormData.schools), {}, {
          [school]: [...masterFormData.schools[school], newClass].sort()
        })
      }));
    }
  };
  const removeClass = (school, className) => {
    setMasterFormData(_objectSpread(_objectSpread({}, masterFormData), {}, {
      schools: _objectSpread(_objectSpread({}, masterFormData.schools), {}, {
        [school]: masterFormData.schools[school].filter(c => c !== className)
      })
    }));
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h2", null, "Einstellungen"), /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Darstellung"), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Farbschema"), /*#__PURE__*/_react.default.createElement("div", {
    className: "theme-selector"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "theme-option theme-light ".concat(formData.theme === 'light' ? 'selected' : ''),
    onClick: () => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      theme: 'light'
    })),
    title: "Hell"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "theme-option theme-dark ".concat(formData.theme === 'dark' ? 'selected' : ''),
    onClick: () => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      theme: 'dark'
    })),
    title: "Dunkel"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "theme-option theme-high-contrast ".concat(formData.theme === 'high-contrast' ? 'selected' : ''),
    onClick: () => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      theme: 'high-contrast'
    })),
    title: "Kontrastreich"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Schriftgr\xF6\xDFe (Labels)"), /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    min: "12",
    max: "24",
    value: formData.fontSize,
    onChange: e => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      fontSize: parseInt(e.target.value)
    }))
  }), /*#__PURE__*/_react.default.createElement("span", null, formData.fontSize, "px")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Schriftgr\xF6\xDFe (Eingabefelder)"), /*#__PURE__*/_react.default.createElement("input", {
    type: "range",
    min: "12",
    max: "24",
    value: formData.inputFontSize,
    onChange: e => setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      inputFontSize: parseInt(e.target.value)
    }))
  }), /*#__PURE__*/_react.default.createElement("span", null, formData.inputFontSize, "px")), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "button button-danger",
    onClick: onClose
  }, "Abbrechen"), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "button button-success"
  }, "Speichern"))), /*#__PURE__*/_react.default.createElement("hr", {
    style: {
      margin: '2rem 0'
    }
  }), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleMasterDataSubmit
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Stammdaten verwalten"), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Schuljahre"), /*#__PURE__*/_react.default.createElement("div", null, masterFormData.schoolYears.map(year => /*#__PURE__*/_react.default.createElement("div", {
    key: year,
    style: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.5rem'
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      flex: 1
    }
  }, year), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "button button-danger",
    style: {
      padding: '0.25rem 0.5rem'
    },
    onClick: () => removeSchoolYear(year)
  }, "L\xF6schen"))), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "button",
    onClick: addSchoolYear
  }, "Schuljahr hinzuf\xFCgen"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "form-label"
  }, "Schulen und Klassen"), /*#__PURE__*/_react.default.createElement("div", null, Object.entries(masterFormData.schools || {}).map(_ref2 => {
    let [school, classes] = _ref2;
    return /*#__PURE__*/_react.default.createElement("div", {
      key: school,
      style: {
        marginBottom: '1rem'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.5rem'
      }
    }, /*#__PURE__*/_react.default.createElement("strong", {
      style: {
        flex: 1
      }
    }, school), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "button button-danger",
      style: {
        padding: '0.25rem 0.5rem'
      },
      onClick: () => removeSchool(school)
    }, "Schule l\xF6schen")), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        paddingLeft: '1rem'
      }
    }, classes.map(className => /*#__PURE__*/_react.default.createElement("div", {
      key: className,
      style: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.25rem'
      }
    }, /*#__PURE__*/_react.default.createElement("span", {
      style: {
        flex: 1
      }
    }, className), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "button button-danger",
      style: {
        padding: '0.25rem 0.5rem'
      },
      onClick: () => removeClass(school, className)
    }, "L\xF6schen"))), /*#__PURE__*/_react.default.createElement("button", {
      type: "button",
      className: "button",
      style: {
        padding: '0.25rem 0.5rem',
        marginTop: '0.5rem'
      },
      onClick: () => addClass(school)
    }, "Klasse hinzuf\xFCgen")));
  }), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "button",
    onClick: addSchool
  }, "Schule hinzuf\xFCgen"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-actions"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "button button-danger",
    onClick: onClose
  }, "Abbrechen"), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "button button-success"
  }, "Stammdaten speichern")))));
};

// Globale Registrierung als window-Modul
window.SettingsModal = SettingsModal;