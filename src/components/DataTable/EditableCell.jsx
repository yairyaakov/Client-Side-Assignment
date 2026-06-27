import React from 'react'

// React.memo means this cell only re-renders when its own props change.
const EditableCell = React.memo(function EditableCell({ value, column, rowId, onCellChange }) {
  const { id: columnId, type, options } = column

  if (type === 'boolean') {
    return (
      <input
        type="checkbox"
        checked={Boolean(value)}
        onChange={e => onCellChange(rowId, columnId, e.target.checked)}
      />
    )
  }

  if (type === 'number') {
    return (
      <input
        type="number"
        value={value ?? ''}
        onChange={e => {
          const raw = e.target.value
           onCellChange(rowId,columnId, raw === '' ? '' : Number(raw))
        }}
      />
    )
  }

  if (type === 'selection') {
    return (
      <select
        value={value ?? ''}
        onChange={e => onCellChange(rowId, columnId, e.target.value)}
      >
        {(options ?? []).map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    )
  }

  if (type === 'string') {
    return (
      <input
        type="text"
        value={value ?? ''}
        onChange={e => onCellChange(rowId, columnId, e.target.value)}
      />
    )
  }

  // Fallback for unknown column types
  return <span>{value ?? '-'}</span>
})

export default EditableCell
