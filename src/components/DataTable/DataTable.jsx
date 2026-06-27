import { useMemo } from 'react'
import './DataTable.css'
import TableRow from './TableRow'

function DataTable({ columns, data, visibleColumnIds, onCellChange }) {
  const sortedColumns = useMemo(
    () => [...columns].sort((a, b) => a.ordinalNo - b.ordinalNo),
    [columns]
  )

  const visibleColumns = useMemo(
    () => sortedColumns.filter(col => visibleColumnIds.includes(col.id)),
    [sortedColumns, visibleColumnIds]
  )

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
            <TableRow
              key={row.id}
              row={row}
              visibleColumns={visibleColumns}
              onCellChange={onCellChange}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
