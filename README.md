# Client Side - Assignment

Generic Editable Data Table built with React and Vite.

## Getting Started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Project Structure

```
src/
├── components/
│   ├── DataTable/          # Main table component and sub-components
│   └── ColumnVisibilityPanel/  # Column show/hide controls
├── hooks/                  # Custom React hooks
├── utils/                  # Helpers and mock data
├── App.jsx
└── main.jsx
```

## Column Schema

Each column in the `columns` array accepts:

| Property    | Type     | Required | Description                          |
|-------------|----------|----------|--------------------------------------|
| `id`        | string   | yes      | Matches the key in each data row     |
| `ordinalNo` | number   | yes      | Controls column display order        |
| `title`     | string   | yes      | Column header label                  |
| `type`      | string   | yes      | `string`, `number`, `boolean`, `selection` |
| `width`     | number   | no       | Column width in pixels               |
| `options`   | string[] | no       | Required when `type` is `selection`  |

> **Schema extension:** `options` is an additive, optional property added to support the `selection`
> column type. It lists the available choices rendered in a `<select>` dropdown during editing.
> Existing column types are unaffected.
