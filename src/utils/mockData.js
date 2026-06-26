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
      // Extended schema: 'options' is an additive optional property.
      // It lists the valid choices for this selection column.
      // Documented in README under "Column Schema".
      options: ['New', 'In Progress', 'Done', 'Blocked'],
    },
  ],

  data: [
    { id: '1',  name: 'Alice Johnson',   age: 29, isActive: true,  status: 'In Progress' },
    { id: '2',  name: 'Bob Smith',       age: 45, isActive: false, status: 'Done'        },
    { id: '3',  name: 'Carol White',     age: 32, isActive: true,  status: 'New'         },
    { id: '4',  name: 'David Brown',     age: 51, isActive: true,  status: 'Blocked'     },
    { id: '5',  name: 'Eva Martinez',    age: 27, isActive: false, status: 'Done'        },
    { id: '6',  name: 'Frank Lee',       age: 38, isActive: true,  status: 'In Progress' },
    { id: '7',  name: 'Grace Kim',       age: 24, isActive: true,  status: 'New'         },
    { id: '8',  name: 'Henry Davis',     age: 60, isActive: false, status: 'Done'        },
    { id: '9',  name: 'Iris Chen',       age: 33, isActive: true,  status: 'In Progress' },
    { id: '10', name: 'Jack Wilson',     age: 42, isActive: true,  status: 'Blocked'     },
    { id: '11', name: 'Karen Taylor',    age: 55, isActive: false, status: 'New'         },
    { id: '12', name: 'Leo Anderson',    age: 31, isActive: true,  status: 'Done'        },
    { id: '13', name: 'Mia Thompson',    age: 26, isActive: true,  status: 'In Progress' },
    { id: '14', name: 'Noah Jackson',    age: 47, isActive: false, status: 'Blocked'     },
    { id: '15', name: 'Olivia Harris',   age: 22, isActive: true,  status: 'New'         },
    { id: '16', name: 'Paul Martin',     age: 39, isActive: true,  status: 'In Progress' },
    { id: '17', name: 'Quinn Garcia',    age: 28, isActive: false, status: 'Done'        },
    { id: '18', name: 'Rachel Lewis',    age: 36, isActive: true,  status: 'New'         },
  ],
}
