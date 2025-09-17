"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStudent = exports.updateEntry = exports.undo = exports.setupDB = exports.saveStateForUndo = exports.saveSettings = exports.saveMasterData = exports.redo = exports.loadSampleData = exports.importData = exports.getSettings = exports.getMasterData = exports.getEntriesByStudentId = exports.getEntriesByDate = exports.exportData = exports.deleteStudent = exports.deleteEntry = exports.clearAllData = exports.addStudent = exports.addEntry = void 0;
var _umd = require("https://unpkg.com/idb@7/build/umd.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// =======================
// Datenbank-Setup
// =======================
const setupDB = async () => {
  return (0, _umd.openDB)('PedagogicalDocumentationDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('students')) {
        const studentStore = db.createObjectStore('students', {
          keyPath: 'id',
          autoIncrement: true
        });
        studentStore.createIndex('name', 'name', {
          unique: false
        });
        studentStore.createIndex('schoolYear', 'schoolYear', {
          unique: false
        });
        studentStore.createIndex('school', 'school', {
          unique: false
        });
        studentStore.createIndex('className', 'className', {
          unique: false
        });
      }
      if (!db.objectStoreNames.contains('entries')) {
        const entryStore = db.createObjectStore('entries', {
          keyPath: 'id',
          autoIncrement: true
        });
        entryStore.createIndex('studentId', 'studentId', {
          unique: false
        });
        entryStore.createIndex('date', 'date', {
          unique: false
        });
      }
      if (!db.objectStoreNames.contains('settings')) {
        db.createObjectStore('settings', {
          keyPath: 'id'
        });
      }
      if (!db.objectStoreNames.contains('masterData')) {
        db.createObjectStore('masterData', {
          keyPath: 'id'
        });
      }
      if (!db.objectStoreNames.contains('history')) {
        db.createObjectStore('history', {
          keyPath: 'id',
          autoIncrement: true
        });
      }
    }
  });
};

// =======================
// Schüler-Funktionen
// =======================
exports.setupDB = setupDB;
const getEntriesByStudentId = async (db, studentId) => {
  return db.getAllFromIndex('entries', 'studentId', studentId);
};
exports.getEntriesByStudentId = getEntriesByStudentId;
const getEntriesByDate = async (db, date) => {
  return db.getAllFromIndex('entries', 'date', date);
};
exports.getEntriesByDate = getEntriesByDate;
const addStudent = async (db, studentData) => {
  const id = await db.add('students', studentData);
  return _objectSpread(_objectSpread({}, studentData), {}, {
    id
  });
};
exports.addStudent = addStudent;
const updateStudent = async (db, studentData) => {
  return db.put('students', studentData);
};
exports.updateStudent = updateStudent;
const deleteStudent = async (db, studentId) => {
  try {
    const tx = db.transaction(['students', 'entries'], 'readwrite');
    const entryStore = tx.objectStore('entries');
    const index = entryStore.index('studentId');
    let cursor = await index.openCursor(IDBKeyRange.only(studentId));
    while (cursor) {
      await cursor.delete();
      cursor = await cursor.continue();
    }
    await tx.objectStore('students').delete(studentId);
    await tx.done;
    return true;
  } catch (error) {
    console.error('Fehler beim Löschen des Schülers:', error);
    return false;
  }
};

// =======================
// Eintrag-Funktionen
// =======================
exports.deleteStudent = deleteStudent;
const addEntry = async (db, entryData) => {
  const id = await db.add('entries', entryData);
  return _objectSpread(_objectSpread({}, entryData), {}, {
    id
  });
};
exports.addEntry = addEntry;
const updateEntry = async (db, entryData) => {
  return db.put('entries', entryData);
};
exports.updateEntry = updateEntry;
const deleteEntry = async (db, entryId) => {
  return db.delete('entries', entryId);
};

// =======================
// Einstellungen-Funktionen
// =======================
exports.deleteEntry = deleteEntry;
const getSettings = async db => {
  return db.get('settings', 1);
};
exports.getSettings = getSettings;
const saveSettings = async (db, settings) => {
  return db.put('settings', _objectSpread(_objectSpread({}, settings), {}, {
    id: 1
  }));
};

// =======================
// Master-Daten-Funktionen
// =======================
exports.saveSettings = saveSettings;
const getMasterData = async db => {
  return db.get('masterData', 1);
};
exports.getMasterData = getMasterData;
const saveMasterData = async (db, masterData) => {
  return db.put('masterData', _objectSpread(_objectSpread({}, masterData), {}, {
    id: 1
  }));
};

// =======================
// Undo/Redo-Funktionen
// =======================
exports.saveMasterData = saveMasterData;
const saveStateForUndo = async (db, history, historyIndex, setHistory, setHistoryIndex) => {
  try {
    const [allStudents, allEntries, settings, masterData] = await Promise.all([db.getAll('students'), db.getAll('entries'), db.get('settings', 1), db.get('masterData', 1)]);
    const currentState = {
      students: allStudents,
      entries: allEntries,
      settings,
      masterData,
      timestamp: new Date().toISOString()
    };
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(currentState);
    if (newHistory.length > 50) newHistory.shift();
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  } catch (error) {
    console.error('Fehler beim Speichern des Zustands für Undo:', error);
  }
};
exports.saveStateForUndo = saveStateForUndo;
const undo = async (db, history, historyIndex, setHistoryIndex, setStudents) => {
  if (historyIndex <= 0 || !db) return;
  try {
    const prevState = history[historyIndex - 1];
    const tx = db.transaction(['students', 'entries', 'settings', 'masterData'], 'readwrite');
    await tx.objectStore('students').clear();
    await tx.objectStore('entries').clear();
    for (const student of prevState.students) await tx.objectStore('students').add(student);
    for (const entry of prevState.entries) await tx.objectStore('entries').add(entry);
    if (prevState.settings) await tx.objectStore('settings').put(prevState.settings);
    if (prevState.masterData) await tx.objectStore('masterData').put(prevState.masterData);
    await tx.done;
    const allStudents = await db.getAll('students');
    setStudents(allStudents);
    setHistoryIndex(historyIndex - 1);
  } catch (error) {
    console.error('Fehler beim Undo:', error);
  }
};
exports.undo = undo;
const redo = async (db, history, historyIndex, setHistoryIndex, setStudents) => {
  if (historyIndex >= history.length - 1 || !db) return;
  try {
    const nextState = history[historyIndex + 1];
    const tx = db.transaction(['students', 'entries', 'settings', 'masterData'], 'readwrite');
    await tx.objectStore('students').clear();
    await tx.objectStore('entries').clear();
    for (const student of nextState.students) await tx.objectStore('students').add(student);
    for (const entry of nextState.entries) await tx.objectStore('entries').add(entry);
    if (nextState.settings) await tx.objectStore('settings').put(nextState.settings);
    if (nextState.masterData) await tx.objectStore('masterData').put(nextState.masterData);
    await tx.done;
    const allStudents = await db.getAll('students');
    setStudents(allStudents);
    setHistoryIndex(historyIndex + 1);
  } catch (error) {
    console.error('Fehler beim Redo:', error);
  }
};

// =======================
// Export / Import
// =======================
exports.redo = redo;
const exportData = async db => {
  try {
    const [allStudents, allEntries, settings, masterData] = await Promise.all([db.getAll('students'), db.getAll('entries'), db.get('settings', 1), db.get('masterData', 1)]);
    const dataStr = JSON.stringify({
      students: allStudents,
      entries: allEntries,
      settings,
      masterData,
      exportDate: new Date().toISOString()
    }, null, 2);
    const link = document.createElement('a');
    link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    link.download = 'paedagogische-dokumentation-export.json';
    link.click();
  } catch (error) {
    console.error('Fehler beim Exportieren:', error);
    alert('Fehler beim Exportieren: ' + error.message);
  }
};
exports.exportData = exportData;
const importData = async (db, event, setSettings, setMasterData, setStudents, setModal) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async e => {
    try {
      const data = JSON.parse(e.target.result);
      const tx = db.transaction(['students', 'entries', 'settings', 'masterData'], 'readwrite');
      await tx.objectStore('students').clear();
      await tx.objectStore('entries').clear();
      for (const student of data.students) await tx.objectStore('students').add(student);
      for (const entry of data.entries) await tx.objectStore('entries').add(entry);
      if (data.settings) await tx.objectStore('settings').put(data.settings);
      if (data.masterData) await tx.objectStore('masterData').put(data.masterData);
      await tx.done;
      if (data.settings) setSettings(data.settings);
      if (data.masterData) setMasterData(data.masterData);
      const allStudents = await db.getAll('students');
      setStudents(allStudents);
      setModal(null);
      alert('Daten erfolgreich importiert!');
    } catch (error) {
      console.error('Fehler beim Importieren:', error);
      alert('Fehler beim Importieren: ' + error.message);
    }
  };
  reader.readAsText(file);
};

// =======================
// Beispieldaten
// =======================
exports.importData = importData;
const loadSampleData = async (db, setMasterData, setStudents) => {
  if (!db) return;
  try {
    await db.clear('students');
    await db.clear('entries');
    const sampleStudents = [{
      name: 'Max Mustermann',
      schoolYear: '2023/2024',
      school: 'Grundschule Musterstadt',
      className: '3a',
      gender: 'männlich',
      nationality: 'deutsch',
      germanLevel: 2,
      notes: 'Sehr aufmerksamer Schüler'
    }, {
      name: 'Anna Beispiel',
      schoolYear: '2023/2024',
      school: 'Grundschule Musterstadt',
      className: '3b',
      gender: 'weiblich',
      nationality: 'deutsch',
      germanLevel: 1,
      notes: 'Braucht Unterstützung in Mathematik'
    }];
    const addedStudents = [];
    for (const student of sampleStudents) {
      const id = await db.add('students', student);
      addedStudents.push(_objectSpread(_objectSpread({}, student), {}, {
        id
      }));
    }
    const sampleEntries = [{
      studentId: addedStudents[0].id,
      date: new Date().toISOString().split('T')[0],
      subject: 'Mathematik',
      observations: 'Max hat heute sehr gut mitgearbeitet und alle Aufgaben gelöst.',
      measures: 'Positive Verstärkung durch Lob',
      erfolg: 'Max war stolz auf seine Leistung und motiviert für weitere Aufgaben.',
      erfolgRating: 'positiv'
    }, {
      studentId: addedStudents[1].id,
      date: new Date().toISOString().split('T')[0],
      subject: 'Deutsch',
      observations: 'Anna hatte Schwierigkeiten mit der Rechtschreibung.',
      measures: 'Individuelle Förderung angeboten',
      erfolg: 'Anna hat die Hilfe angenommen und Fortschritte gezeigt.',
      erfolgRating: 'positiv'
    }];
    for (const entry of sampleEntries) await db.add('entries', entry);
    const sampleMasterData = {
      schoolYears: ['2022/2023', '2023/2024', '2024/2025'],
      schools: {
        'Grundschule Musterstadt': ['1a', '1b', '2a', '2b', '3a', '3b', '4a', '4b'],
        'Mittelschule Beispieldorf': ['5a', '5b', '6a', '6b', '7a', '7b', '8a', '8b', '9a', '9b']
      }
    };
    await db.put('masterData', _objectSpread(_objectSpread({}, sampleMasterData), {}, {
      id: 1
    }));
    setMasterData(sampleMasterData);
    const allStudents = await db.getAll('students');
    setStudents(allStudents);
    alert('Beispieldaten erfolgreich geladen!');
  } catch (error) {
    console.error('Fehler beim Laden der Beispieldaten:', error);
  }
};

// =======================
// Alle Daten löschen
// =======================
exports.loadSampleData = loadSampleData;
const clearAllData = async (db, setStudents, setEntries, setSelectedStudent) => {
  if (!db) return;
  if (!confirm('Sind Sie sicher, dass Sie alle Daten löschen möchten? Dieser Vorgang kann nicht rückgängig gemacht werden.')) return;
  try {
    await db.clear('students');
    await db.clear('entries');
    setStudents([]);
    setEntries([]);
    setSelectedStudent(null);
    alert('Alle Daten wurden gelöscht!');
  } catch (error) {
    console.error('Fehler beim Löschen der Daten:', error);
  }
};
exports.clearAllData = clearAllData;