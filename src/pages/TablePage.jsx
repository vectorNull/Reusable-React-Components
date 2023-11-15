import React from 'react'
import SortableTable from '../components/SortableTable';

function TablePage() {

  // TODO Replace with fetch or axios call
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-300', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 2 },
  ];

  // TODO Use OPTIONAL sortValue property to sort and customize specific headers
  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score
    },
  ];

  // TODO Update with key to pass to Table component
  const keyFn = (fruit) => {
    return fruit.name
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  )
}


export default TablePage;
