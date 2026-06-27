import React from 'react'
import EditableCell from './EditableCell'

// React.memo means this row only re-renders when its own props change.
// If you edit a cell in row 3, rows 1, 2, 4+ are skipped entirely.
const TableRow = React.memo(function TableRow({ row, visibleColumns, onCellChange }) {
  return (
    <tr>
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
  )
})

export default TableRow
