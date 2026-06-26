import './DataTable.css'

function formatCellValue(value, type) {
  if (value === undefined || value === null || value === '') return '-'
  if (type === 'boolean') return value ? 'Yes' : 'No'
  return value
}

function DataTable({ columns, data }) {
  const sortedColumns = [...columns].sort((a, b) => a.ordinalNo - b.ordinalNo)

  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {sortedColumns.map(column => (
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
              {sortedColumns.map(column => (
                <td
                  key={column.id}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {formatCellValue(row[column.id], column.type)}
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
