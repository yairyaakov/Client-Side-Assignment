# Client Side - Assignment

## Overview

A generic editable data table built with React.  
It receives column definitions and row data as props and renders the table dynamically — no column names are hardcoded inside the components.

## Features

- Generic column-based table rendering
- Supports `string`, `number`, `boolean`, and `selection` column types
- Column visibility toggle
- Inline cell editing
- Local save and cancel flow
- 1,000-row mock dataset for testing
- Basic React performance optimizations

## Tech Stack

- React
- JavaScript
- Vite
- CSS

## How to Run

```bash
npm install
npm run dev
```

The app runs locally in the browser at `http://localhost:5173`.

## Data Shape

The table expects data in this shape:

```js
{
  columns: [
    {
      id: string,       // must match the key in each row
      ordinalNo: number, // controls display order
      title: string,
      type: string,
      width?: number    // optional, in pixels
    }
  ],
  data: [
    {
      id: string,
      [columnId]: any   // one key per column
    }
  ]
}
```

`column.id` must match the key in each row. The table reads `row[column.id]` to stay fully generic.

## Supported Column Types

| Type        | Renders as     |
|-------------|----------------|
| `string`    | Text input     |
| `number`    | Number input   |
| `boolean`   | Checkbox       |
| `selection` | Dropdown       |

## Schema Extension

For `selection` columns, add an `options` array to the column definition:

```js
{
  id: 'status',
  title: 'Status',
  type: 'selection',
  options: ['New', 'In Progress', 'Done', 'Blocked']
}
```

This keeps the table generic — dropdown values come from the column definition, not from inside the component.

## Local Save Behavior

- Edits are applied to `draftRows`.
- **Save Changes** copies `draftRows` into `savedRows`.
- **Cancel Changes** restores `draftRows` from `savedRows`.
- Everything is stored in React state only.
- Refreshing the page resets all data — no persistence is required by the assignment.

## Performance Notes

- `useMemo` is used for sorted and filtered column lists.
- `useCallback` is used to keep handler references stable.
- `React.memo` is applied to `TableRow` and `EditableCell` so only the changed row/cell re-renders.
- The mock dataset uses 1,000 rows to test rendering at scale.
- No virtualization library was added to keep the project simple.

## Project Structure

```
src/
├── components/
│   ├── DataTable/
│   └── ColumnVisibilityPanel/
├── utils/
│   └── mockData.js
└── App.jsx
```

## Notes

The project focuses on clean React component structure, generic rendering, simple UX, and local state management.
