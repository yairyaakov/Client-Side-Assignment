import './DataTable.css'
import EditableCell from './EditableCell'

function DataTable({ columns, data, visibleColumnIds, onCellChange }) {
  const sortedColumns = [...columns].sort((a, b) => a.ordinalNo - b.ordinalNo)
  const visibleColumns = sortedColumns.filter(col => visibleColumnIds.includes(col.id))

  if (visibleColumns.length === 0) {
    return (
      <div className="table-container">
        <p className="table-empty">No columns selected.</p>
      </div>
    )
  }

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {visibleColumns.map(column => (
              <th
                key={column.id}
                style={column.width ? { width: column.width } : undefined}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              {visibleColumns.map(column => (
                <td
                  key={column.id}
                  style={column.width ? { width: column.width } : undefined}
                >
                  <EditableCell
                    value={row[column.id]}
                    column={column}
                    rowId={row.id}
                    onCellChange={onCellChange}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
