import React from 'react';

const Toolbar = ({
    selectedStudent, 
    selectedDate, 
    onAddStudent, 
    onEditStudent, 
    onAddEntry, 
    onEditEntry,
    onPrint,
    onExport,
    onImport,
    onUndo,
    onRedo,
    canUndo,
    canRedo
}) => {
    return (
        <div className="toolbar">
            {/* Zeile 1: Schüler & Datum */}
            <div className="toolbar-row">
                <button
                    className="button"
                    onClick={onAddStudent}
                    title="Neuen Schüler hinzufügen"
                >
                    + Schüler
                </button>
                <button
                    className="button"
                    onClick={onEditStudent}
                    title="Ausgewählten Schüler bearbeiten"
                    disabled={!selectedStudent}
                >
                    ✎ Bearbeiten
                </button>
                <span className="toolbar-info">
                    {selectedStudent ? selectedStudent.name : 'Kein Schüler ausgewählt'} | {selectedDate || 'Kein Datum'}
                </span>
            </div>

            {/* Zeile 2: Einträge */}
            <div className="toolbar-row">
                <button
                    className="button"
                    onClick={onAddEntry}
                    title="Neuen Eintrag hinzufügen"
                    disabled={!selectedStudent || !selectedDate}
                >
                    + Eintrag
                </button>
                <button
                    className="button"
                    onClick={onEditEntry}
                    title="Ausgewählten Eintrag bearbeiten"
                    disabled={!selectedStudent || !selectedDate}
                >
                    ✎ Bearbeiten
                </button>
            </div>

            {/* Zeile 3: Export / Import / Drucken */}
            <div className="toolbar-row">
                <button
                    className="button"
                    onClick={onPrint}
                    title="Drucken"
                >
                    🖨 Drucken
                </button>
                <button
                    className="button"
                    onClick={onExport}
                    title="Exportieren"
                >
                    ⬇ Export
                </button>
                <button
                    className="button"
                    onClick={onImport}
                    title="Importieren"
                >
                    ⬆ Import
                </button>
            </div>

            {/* Zeile 4: Rückgängig / Wiederherstellen */}
            <div className="toolbar-row">
                <button
                    className="button"
                    onClick={onUndo}
                    disabled={!canUndo}
                    title="Rückgängig"
                >
                    ↺ Rückgängig
                </button>
                <button
                    className="button"
                    onClick={onRedo}
                    disabled={!canRedo}
                    title="Wiederherstellen"
                >
                    ↻ Wiederherstellen
                </button>
            </div>
        </div>
    );
};

export default Toolbar;
