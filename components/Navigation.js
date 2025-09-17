"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const Navigation = _ref => {
  var _masterData$schools$l;
  let {
    isOpen,
    students,
    selectedStudent,
    selectedDate,
    filters,
    masterData,
    onStudentSelect,
    onDateSelect,
    onFilterChange,
    onShowStats,
    onShowSettings,
    onShowHelp
  } = _ref;
  const [searchTerm, setSearchTerm] = _react.default.useState(filters.search);
  const [localFilters, setLocalFilters] = _react.default.useState(filters);
  const handleSearchChange = e => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange(_objectSpread(_objectSpread({}, localFilters), {}, {
      search: value
    }));
  };
  const handleFilterChange = (filterType, value) => {
    const newFilters = _objectSpread(_objectSpread({}, localFilters), {}, {
      [filterType]: value
    });
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };
  const clearFilters = () => {
    const clearedFilters = {
      search: '',
      schoolYear: '',
      school: '',
      className: ''
    };
    setSearchTerm('');
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };
  const hasActiveFilters = localFilters.search || localFilters.schoolYear || localFilters.school || localFilters.className;
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "nav ".concat(isOpen ? 'open' : '')
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Navigation"), /*#__PURE__*/_react.default.createElement("div", {
    className: "search-filter"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: "search-input",
    placeholder: "\uD83D\uDD0D Kind suchen...",
    value: searchTerm,
    onChange: handleSearchChange
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "filter-label"
  }, "Schuljahr"), /*#__PURE__*/_react.default.createElement("select", {
    className: "filter-select",
    value: localFilters.schoolYear,
    onChange: e => handleFilterChange('schoolYear', e.target.value)
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Alle Schuljahre"), masterData.schoolYears && masterData.schoolYears.map(year => /*#__PURE__*/_react.default.createElement("option", {
    key: year,
    value: year
  }, year)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "filter-label"
  }, "Schule"), /*#__PURE__*/_react.default.createElement("select", {
    className: "filter-select",
    value: localFilters.school,
    onChange: e => handleFilterChange('school', e.target.value)
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Alle Schulen"), masterData.schools && Object.keys(masterData.schools).map(school => /*#__PURE__*/_react.default.createElement("option", {
    key: school,
    value: school
  }, school)))), /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "filter-label"
  }, "Klasse"), /*#__PURE__*/_react.default.createElement("select", {
    className: "filter-select",
    value: localFilters.className,
    onChange: e => handleFilterChange('className', e.target.value),
    disabled: !localFilters.school
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: ""
  }, "Alle Klassen"), localFilters.school && ((_masterData$schools$l = masterData.schools[localFilters.school]) === null || _masterData$schools$l === void 0 ? void 0 : _masterData$schools$l.map(className => /*#__PURE__*/_react.default.createElement("option", {
    key: className,
    value: className
  }, className))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "filter-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "filter-label"
  }, "Tag"), /*#__PURE__*/_react.default.createElement("input", {
    type: "date",
    className: "filter-select",
    value: selectedDate,
    onChange: e => onDateSelect(e.target.value)
  })), hasActiveFilters && /*#__PURE__*/_react.default.createElement("button", {
    className: "button button-warning",
    onClick: clearFilters,
    style: {
      width: '100%',
      marginTop: '0.5rem'
    }
  }, "\u274C Filter l\xF6schen")), /*#__PURE__*/_react.default.createElement("div", {
    className: "students-section"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "section-header"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Kind"), /*#__PURE__*/_react.default.createElement("span", {
    className: "student-count"
  }, students.length)), students.length === 0 ? /*#__PURE__*/_react.default.createElement("div", {
    className: "empty-state"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Keine Kinder gefunden"), hasActiveFilters && /*#__PURE__*/_react.default.createElement("button", {
    className: "button",
    onClick: clearFilters,
    style: {
      marginTop: '10px',
      width: '100%'
    }
  }, "Filter zur\xFCcksetzen")) : /*#__PURE__*/_react.default.createElement("ul", {
    className: "students-list"
  }, students.map(student => /*#__PURE__*/_react.default.createElement("li", {
    key: student.id,
    className: "student-item ".concat((selectedStudent === null || selectedStudent === void 0 ? void 0 : selectedStudent.id) === student.id ? 'selected' : ''),
    onClick: () => onStudentSelect(student)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "student-avatar"
  }, student.gender === 'weiblich' ? '👧' : student.gender === 'männlich' ? '👦' : '👤'), /*#__PURE__*/_react.default.createElement("div", {
    className: "student-info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "student-name"
  }, student.name), /*#__PURE__*/_react.default.createElement("div", {
    className: "student-details"
  }, student.className)))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "nav-footer"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-section"
  }, /*#__PURE__*/_react.default.createElement("h4", null, "Aktionen"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button button-info",
    onClick: onShowStats
  }, "\uD83D\uDCCA Statistiken"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button button-info",
    onClick: onShowSettings
  }, "\u2699\uFE0F Einstellungen"), /*#__PURE__*/_react.default.createElement("button", {
    className: "button button-info",
    onClick: onShowHelp
  }, "\u2753 Hilfe")), /*#__PURE__*/_react.default.createElement("div", {
    className: "app-info"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Willkommen! W\xE4hlen Sie ein Kind aus der Liste."))));
};
var _default = exports.default = Navigation;