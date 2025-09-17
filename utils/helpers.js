"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Schüler filtern
var filterStudents = function filterStudents(students, filters) {
  return students.filter(function (student) {
    var matchesSearch = filters.search === '' || student.name.toLowerCase().includes(filters.search.toLowerCase());
    var matchesSchoolYear = filters.schoolYear === '' || student.schoolYear === filters.schoolYear;
    var matchesSchool = filters.school === '' || student.school === filters.school;
    var matchesClass = filters.className === '' || student.className === filters.className;
    return matchesSearch && matchesSchoolYear && matchesSchool && matchesClass;
  });
};

// Einstellungen anwenden
var applySettings = function applySettings(settings) {
  document.documentElement.setAttribute('data-theme', settings.theme);
  document.documentElement.style.setProperty('--font-size', "".concat(settings.fontSize, "px"));
  document.documentElement.style.setProperty('--input-font-size', "".concat(settings.inputFontSize, "px"));
};

// Eintrag speichern
var saveEntry = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(db, entryData, entries, setEntries, setModal) {
    var id, newEntry, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (db) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          _context.p = 1;
          if (!entryData.id) {
            _context.n = 3;
            break;
          }
          _context.n = 2;
          return db.put('entries', entryData);
        case 2:
          setEntries(entries.map(function (e) {
            return e.id === entryData.id ? entryData : e;
          }));
          _context.n = 5;
          break;
        case 3:
          _context.n = 4;
          return db.add('entries', entryData);
        case 4:
          id = _context.v;
          newEntry = _objectSpread(_objectSpread({}, entryData), {}, {
            id: id
          });
          setEntries([].concat(_toConsumableArray(entries), [newEntry]));
        case 5:
          setModal(null);
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          console.error('Fehler beim Speichern des Eintrags:', _t);
        case 7:
          return _context.a(2);
      }
    }, _callee, null, [[1, 6]]);
  }));
  return function saveEntry(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

// Einstellungen speichern (Helper-Version)
var saveSettingsHelper = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(db, newSettings, setSettings, setModal) {
    var _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (db) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2);
        case 1:
          _context2.p = 1;
          _context2.n = 2;
          return db.put('settings', _objectSpread(_objectSpread({}, newSettings), {}, {
            id: 1
          }));
        case 2:
          setSettings(newSettings);

          // UI anpassen
          applySettings(newSettings);
          setModal(null);
          _context2.n = 4;
          break;
        case 3:
          _context2.p = 3;
          _t2 = _context2.v;
          console.error('Fehler beim Speichern der Einstellungen:', _t2);
        case 4:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return function saveSettingsHelper(_x6, _x7, _x8, _x9) {
    return _ref2.apply(this, arguments);
  };
}();

// Master-Daten speichern (Helper-Version)
var saveMasterDataHelper = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(db, newMasterData, setMasterData) {
    var _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          if (db) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2);
        case 1:
          _context3.p = 1;
          _context3.n = 2;
          return db.put('masterData', _objectSpread(_objectSpread({}, newMasterData), {}, {
            id: 1
          }));
        case 2:
          setMasterData(newMasterData);
          _context3.n = 4;
          break;
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          console.error('Fehler beim Speichern der Master-Daten:', _t3);
        case 4:
          return _context3.a(2);
      }
    }, _callee3, null, [[1, 3]]);
  }));
  return function saveMasterDataHelper(_x0, _x1, _x10) {
    return _ref3.apply(this, arguments);
  };
}();

// Statistiken berechnen
var calculateStatistics = function calculateStatistics(students, entries) {
  var totalStudents = students.length;
  var totalEntries = entries.length;
  var entriesByStudent = {};
  entries.forEach(function (entry) {
    if (!entriesByStudent[entry.studentId]) {
      entriesByStudent[entry.studentId] = 0;
    }
    entriesByStudent[entry.studentId]++;
  });
  var studentsWithEntries = Object.keys(entriesByStudent).length;
  var studentsWithoutEntries = totalStudents - studentsWithEntries;
  var ratings = {
    positiv: 0,
    negativ: 0,
    keine: 0
  };
  entries.forEach(function (entry) {
    if (entry.erfolgRating === 'positiv') {
      ratings.positiv++;
    } else if (entry.erfolgRating === 'negativ') {
      ratings.negativ++;
    } else {
      ratings.keine++;
    }
  });
  return {
    totalStudents: totalStudents,
    totalEntries: totalEntries,
    studentsWithEntries: studentsWithEntries,
    studentsWithoutEntries: studentsWithoutEntries,
    ratings: ratings
  };
};