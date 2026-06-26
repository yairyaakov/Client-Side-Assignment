import './ColumnVisibilityPanel.css'

function ColumnVisibilityPanel({ columns, visibleColumnIds, onToggleColumn }) {
  const sortedColumns = [...columns].sort((a, b) => a.ordinalNo - b.ordinalNo)

  return (
    <div className="visibility-panel">
      <span className="visibility-panel__title">Visible Columns</span>

      <div className="visibility-panel__list">
        {sortedColumns.map(column => (
          <label key={column.id} className="visibility-panel__item">
            <input
              type="checkbox"
              checked={visibleColumnIds.includes(column.id)}
              onChange={() => onToggleColumn(column.id)}
            />
            {column.title}
          </label>
        ))}
      </div>
    </div>
  )
}

export default ColumnVisibilityPanel
