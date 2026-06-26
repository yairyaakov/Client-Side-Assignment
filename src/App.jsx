import './App.css'
import DataTable from './components/DataTable/DataTable'
import { tableMockData } from './utils/mockData'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Client Side — Assignment</h1>
        <p className="app-subtitle">Generic Editable Data Table</p>
      </header>

      <main className="app-main">
        <DataTable
          columns={tableMockData.columns}
          data={tableMockData.data}
        />
      </main>
    </div>
  )
}

export default App
