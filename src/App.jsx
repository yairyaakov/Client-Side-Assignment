import { useState, useCallback } from 'react'
import './App.css'
import DataTable from './components/DataTable/DataTable'
import ColumnVisibilityPanel from './components/ColumnVisibilityPanel/ColumnVisibilityPanel'
import { tableMockData } from './utils/mockData'

function App() {
  const [savedRows, setSavedRows] = useState(tableMockData.data)
  const [draftRows, setDraftRows] = useState(tableMockData.data)
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
  const [saveMessage, setSaveMessage] = useState('')
  const [visibleColumnIds, setVisibleColumnIds] = useState(
    () => tableMockData.columns.map(column => column.id)
  )

  const handleCellChange = useCallback((rowId, columnId, newValue) => {
    setDraftRows(prevRows =>
      prevRows.map(row =>
        row.id === rowId
          ? { ...row, [columnId]: newValue }
          : row
      )
    )
    setHasUnsavedChanges(true)
    setSaveMessage('')
  }, [])

  const handleSaveChanges = useCallback(() => {
    setSavedRows(draftRows)
    setHasUnsavedChanges(false)
    setSaveMessage('Changes saved locally for this session.')
    console.log('Saved rows:', draftRows)
  }, [draftRows])

  const handleCancelChanges = useCallback(() => {
    setDraftRows(savedRows)
    setHasUnsavedChanges(false)
    setSaveMessage('Unsaved changes were discarded.')
  }, [savedRows])

  const handleToggleColumn = useCallback((columnId) => {
    setVisibleColumnIds(prev =>
      prev.includes(columnId)
        ? prev.filter(id => id !== columnId)
        : [...prev, columnId]
    )
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>Client Side — Assignment</h1>
        <p className="app-subtitle">Generic Editable Data Table</p>
      </header>

      <main className="app-main">
        <ColumnVisibilityPanel
          columns={tableMockData.columns}
          visibleColumnIds={visibleColumnIds}
          onToggleColumn={handleToggleColumn}
        />

        <div className="app-actions">
          <button
            className="save-btn"
            onClick={handleSaveChanges}
            disabled={!hasUnsavedChanges}
          >
            Save Changes
          </button>

          <button
            className="cancel-btn"
            onClick={handleCancelChanges}
            disabled={!hasUnsavedChanges}
          >
            Cancel Changes
          </button>

          {saveMessage && (
            <span className="save-message">{saveMessage}</span>
          )}

          <span className="save-note">
            Changes are kept in memory only and will reset after page refresh.
          </span>
        </div>

        <DataTable
          columns={tableMockData.columns}
          data={draftRows}
          visibleColumnIds={visibleColumnIds}
          onCellChange={handleCellChange}
        />
      </main>
    </div>
  )
}

export default App
