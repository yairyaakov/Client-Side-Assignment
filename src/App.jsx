import { useState } from 'react'
import './App.css'
import DataTable from './components/DataTable/DataTable'
import ColumnVisibilityPanel from './components/ColumnVisibilityPanel/ColumnVisibilityPanel'
import { tableMockData } from './utils/mockData'

function App() {
  const [tableRows, setTableRows] = useState(tableMockData.data)

  const [visibleColumnIds, setVisibleColumnIds] = useState(
    () => tableMockData.columns.map(column => column.id)
  )

  function handleCellChange(rowId, columnId, newValue) {
    setTableRows(prevRows =>
      prevRows.map(row =>
        row.id === rowId
          ? { ...row, [columnId]: newValue }
          : row
      )
    )
  }

  function handleToggleColumn(columnId) {
    setVisibleColumnIds(prev =>
      prev.includes(columnId)
        ? prev.filter(id => id !== columnId)
        : [...prev, columnId]
    )
  }

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
        <DataTable
          columns={tableMockData.columns}
          data={tableRows}
          visibleColumnIds={visibleColumnIds}
          onCellChange={handleCellChange}
        />
      </main>
    </div>
  )
}

export default App
