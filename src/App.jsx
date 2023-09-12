import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = [
  'all',
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];

const App = () => {
  const [foods, setFoods] = useState(menu);
  const [category, setCategory] = useState(allCategories);

  const filterCat = (item) => {
    if (item === 'all') {
      setFoods(menu);
      return;
    }
    setFoods(
      menu.filter((i) => {
        return i.category === item;
      })
    );
    console.log(foods);
  };

  return (
    <main>
      <Title />
      <Categories category={category} filterCat={filterCat} />
      <Menu foods={foods} />
    </main>
  );
};
export default App;
