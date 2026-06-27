export const MOCK_ROW_COUNT = 1000

function createRows(count) {
  const statuses = ['New', 'In Progress', 'Done', 'Blocked']

  return Array.from({ length: count }, (_, index) => ({
    id: `row-${index + 1}`,
    name: `User ${index + 1}`,
    age: 20 + (index % 45),
    isActive: index % 2 === 0,
    status: statuses[index % statuses.length],
  }))
}

export const tableMockData = {
  columns: [
    {
      id: 'name',
      ordinalNo: 1,
      title: 'Name',
      type: 'string',
      width: 220,
    },
    {
      id: 'age',
      ordinalNo: 2,
      title: 'Age',
      type: 'number',
      width: 100,
    },
    {
      id: 'isActive',
      ordinalNo: 3,
      title: 'Active',
      type: 'boolean',
      width: 120,
    },
    {
      id: 'status',
      ordinalNo: 4,
      title: 'Status',
      type: 'selection',
      width: 160,
      options: ['New', 'In Progress', 'Done', 'Blocked'],
    },
  ],

  data: createRows(MOCK_ROW_COUNT),
}
