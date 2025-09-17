"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Header = _interopRequireDefault(require("./components/Header.js"));
var _Toolbar = _interopRequireDefault(require("./components/Toolbar.js"));
var _Navigation = _interopRequireDefault(require("./components/Navigation.js"));
var _MainContent = _interopRequireDefault(require("./components/MainContent.js"));
var _StudentModal = _interopRequireDefault(require("./components/StudentModal.js"));
var _EntryModal = _interopRequireDefault(require("./components/EntryModal.js"));
var _SettingsModal = _interopRequireDefault(require("./components/SettingsModal.js"));
var _StatisticsModal = _interopRequireDefault(require("./components/StatisticsModal.js"));
var _HelpModal = _interopRequireDefault(require("./components/HelpModal.js"));
var _database = require("./database.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // Komponenten importieren
// Utils / Datenbank-Funktionen importieren
const App = () => {
  const [db, setDb] = (0, _react.useState)(null);
  const [students, setStudents] = (0, _react.useState)([]);
  const [entries, setEntries] = (0, _react.useState)([]);
  const [selectedStudent, setSelectedStudent] = (0, _react.useState)(null);
  const [selectedDate, setSelectedDate] = (0, _react.useState)(new Date().toISOString().split('T')[0]);
  const [viewMode, setViewMode] = (0, _react.useState)('student');
  const [filters, setFilters] = (0, _react.useState)({
    search: '',
    schoolYear: '',
    school: '',
    className: ''
  });
  const [settings, setSettings] = (0, _react.useState)({
    theme: 'light',
    fontSize: 16,
    inputFontSize: 16,
    customColors: {}
  });
  const [masterData, setMasterData] = (0, _react.useState)({
    schoolYears: [],
    schools: {}
  });
  const [modal, setModal] = (0, _react.useState)(null);
  const [navOpen, setNavOpen] = (0, _react.useState)(false);
  const [history, setHistory] = (0, _react.useState)([]);
  const [historyIndex, setHistoryIndex] = (0, _react.useState)(-1);
  const applySettings = settings => {
    document.documentElement.setAttribute('data-theme', settings.theme);
    document.documentElement.style.setProperty('--font-size', "".concat(settings.fontSize, "px"));
    document.documentElement.style.setProperty('--input-font-size', "".concat(settings.inputFontSize, "px"));
  };
  (0, _react.useEffect)(() => {
    const initDB = async () => {
      try {
        const database = await (0, _database.setupDB)();
        setDb(database);
        const settingsData = await database.get('settings', 1);
        if (settingsData) {
          setSettings(settingsData);
          applySettings(settingsData);
        }
        const masterDataLoaded = await database.get('masterData', 1);
        if (masterDataLoaded) setMasterData(masterDataLoaded);
        const allStudents = await database.getAll('students');
        setStudents(allStudents);
      } catch (error) {
        console.error('Datenbank-Initialisierungsfehler:', error);
      }
    };
    initDB();
  }, []);
  (0, _react.useEffect)(() => {
    const loadEntries = async () => {
      if (!db) return;
      try {
        let entriesData = [];
        if (viewMode === 'student' && selectedStudent) {
          entriesData = await (0, _database.getEntriesByStudentId)(db, selectedStudent.id);
        } else if (viewMode === 'day' && selectedDate) {
          entriesData = await (0, _database.getEntriesByDate)(db, selectedDate);
        }
        setEntries(entriesData);
      } catch (error) {
        console.error('Fehler beim Laden der Einträge:', error);
      }
    };
    loadEntries();
  }, [db, selectedStudent, selectedDate, viewMode]);
  const filteredStudents = (0, _react.useCallback)(() => (0, _database.filterStudents)(students, filters), [students, filters]);
  const saveStudentHandler = async studentData => {
    if (!db) return;
    try {
      await (0, _database.saveStateForUndo)(db, history, setHistory, setHistoryIndex);
      if (studentData.id) {
        await (0, _database.updateStudent)(db, studentData);
        setStudents(students.map(s => s.id === studentData.id ? studentData : s));
      } else {
        const newStudent = await (0, _database.addStudent)(db, studentData);
        setStudents([...students, newStudent]);
      }
      setModal(null);
    } catch (error) {
      console.error('Fehler beim Speichern des Schülers:', error);
    }
  };
  const deleteStudentHandler = async studentId => {
    if (!db) return;
    try {
      await (0, _database.saveStateForUndo)(db, history, setHistory, setHistoryIndex);
      const success = await (0, _database.deleteStudent)(db, studentId);
      if (success) {
        setStudents(students.filter(s => s.id !== studentId));
        if (selectedStudent && selectedStudent.id === studentId) setSelectedStudent(null);
        alert('Kind wurde erfolgreich gelöscht.');
      } else {
        alert('Fehler beim Löschen des Kindes.');
      }
    } catch (error) {
      console.error('Fehler beim Löschen des Schülers:', error);
      alert('Fehler beim Löschen des Kindes: ' + error.message);
    }
  };
  const saveEntryHandler = async entryData => {
    if (!db) return;
    try {
      await (0, _database.saveStateForUndo)(db, history, setHistory, setHistoryIndex);
      if (entryData.id) {
        await (0, _database.updateEntry)(db, entryData);
        setEntries(entries.map(e => e.id === entryData.id ? entryData : e));
      } else {
        const newEntry = await (0, _database.addEntry)(db, _objectSpread(_objectSpread({}, entryData), {}, {
          date: selectedDate
        }));
        setEntries([...entries, newEntry]);
      }
      setModal(null);
    } catch (error) {
      console.error('Fehler beim Speichern des Eintrags:', error);
    }
  };
  const saveSettingsHandler = async newSettings => {
    if (!db) return;
    try {
      await db.put('settings', _objectSpread(_objectSpread({}, newSettings), {}, {
        id: 1
      }));
      setSettings(newSettings);
      applySettings(newSettings);
      setModal(null);
    } catch (error) {
      console.error('Fehler beim Speichern der Einstellungen:', error);
    }
  };
  const saveMasterDataHandler = async newMasterData => {
    if (!db) return;
    try {
      await db.put('masterData', _objectSpread(_objectSpread({}, newMasterData), {}, {
        id: 1
      }));
      setMasterData(newMasterData);
    } catch (error) {
      console.error('Fehler beim Speichern der Master-Daten:', error);
    }
  };
  const handleExport = async () => {
    await (0, _database.exportData)(db);
  };
  const handleImport = async event => {
    await (0, _database.importData)(db, event, setSettings, setMasterData, setStudents, setModal);
  };
  const handleUndo = async () => {
    await (0, _database.undo)(db, history, historyIndex, setHistoryIndex, setStudents);
  };
  const handleRedo = async () => {
    await (0, _database.redo)(db, history, historyIndex, setHistoryIndex, setStudents);
  };
  const handleLoadSampleData = async () => {
    await (0, _database.loadSampleData)(db, setMasterData, setStudents);
  };
  const handleClearData = async () => {
    await (0, _database.clearAllData)(db, setStudents, setEntries, setSelectedStudent);
  };
  if (!db) return /*#__PURE__*/_react.default.createElement("div", null, "Datenbank wird initialisiert...");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    onMenuClick: () => setNavOpen(!navOpen)
  }), /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    selectedStudent: selectedStudent,
    selectedDate: selectedDate,
    onAddStudent: () => setModal('student'),
    onEditStudent: () => setModal('student'),
    onAddEntry: () => setModal('entry'),
    onEditEntry: () => setModal('entry'),
    onPrint: () => window.print(),
    onExport: handleExport,
    onImport: handleImport,
    onUndo: handleUndo,
    onRedo: handleRedo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1
  }), /*#__PURE__*/_react.default.createElement(_Navigation.default, {
    isOpen: navOpen,
    students: filteredStudents(),
    selectedStudent: selectedStudent,
    selectedDate: selectedDate,
    filters: filters,
    masterData: masterData,
    onStudentSelect: student => {
      setSelectedStudent(student);
      setViewMode('student');
    },
    onDateSelect: date => {
      setSelectedDate(date);
      setViewMode('day');
    },
    onFilterChange: setFilters,
    onShowStats: () => setModal('statistics'),
    onShowSettings: () => setModal('settings'),
    onShowHelp: () => setModal('help')
  }), /*#__PURE__*/_react.default.createElement(_MainContent.default, {
    viewMode: viewMode,
    selectedStudent: selectedStudent,
    selectedDate: selectedDate,
    entries: entries,
    onEditEntry: () => setModal('entry')
  }), modal === 'student' && /*#__PURE__*/_react.default.createElement(_StudentModal.default, {
    student: selectedStudent,
    masterData: masterData,
    onSave: saveStudentHandler,
    onDelete: deleteStudentHandler,
    onClose: () => setModal(null)
  }), modal === 'entry' && /*#__PURE__*/_react.default.createElement(_EntryModal.default, {
    entry: viewMode === 'student' && entries.length > 0 ? entries[0] : null,
    student: selectedStudent,
    students: students,
    masterData: masterData,
    onSave: saveEntryHandler,
    onClose: () => setModal(null)
  }), modal === 'settings' && /*#__PURE__*/_react.default.createElement(_SettingsModal.default, {
    settings: settings,
    masterData: masterData,
    onSave: saveSettingsHandler,
    onSaveMasterData: saveMasterDataHandler,
    onClose: () => setModal(null)
  }), modal === 'statistics' && /*#__PURE__*/_react.default.createElement(_StatisticsModal.default, {
    students: students,
    entries: entries,
    onClose: () => setModal(null)
  }), modal === 'help' && /*#__PURE__*/_react.default.createElement(_HelpModal.default, {
    onLoadSampleData: handleLoadSampleData,
    onClearData: handleClearData,
    onClose: () => setModal(null)
  }));
};
var _default = exports.default = App;