// How to render LISTS in React
function List({items=[], category="category"}) {
  const itemList = items;
  const mycategory = category;
  // array of objects
  // const fruits = [
  //   { id: 1, name: "Apple", calories: 95 },
  //   { id: 2, name: "Banana", calories: 85 },
  //   { id: 3, name: "Cherry", calories: 75 },
  //   { id: 4, name: "Date", calories: 65 },
  // ];

  // sort objects
  // 1. Alphabetical order
  // fruits.sort((a, b) => a.name.localeCompare(b.name));

  // 2. Reverse alphabetical order
  // fruits.sort((a, b) => b.name.localeCompare(a.name));

  // 3. Numerical order
  // fruits.sort((a, b) => a.calories - b.calories);

  // 4. Reverse Numerical order
  // fruits.sort((a, b) => b.calories - a.calories);

  // filter objects
  // 1. Get fruits with calories less than 90
  // const lowCalFruit = fruits.filter((fruit) => fruit.calories < 90);

  // 2. Get fruits with calories greater than 90
  // const highCalFruit = fruits.filter((fruit) => fruit.calories > 90);

  // key.id
  //   const listItems = fruits.map((fruit) => <li>{fruit}</li>);
  // Doing this will cause a warning in the console because each list item should have a unique "key" prop.

  // To fix this, we can use the index of the array as the key:
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; {item.calories}
    </li>
  ));
  // &nbsp; is for a non-breaking space,
  return (
    <>
      <h3 className="list-category">{mycategory}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

export default List;
