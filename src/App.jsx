import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

const App = () => {
  const [foods, setFoods] = useState(menu);

  const diffCategories = foods.map((item) => {
    return item.category;
  });
  const newCategories = new Set(diffCategories);
  const categories = ['all', ...newCategories];
  console.log(newCategories);

  const [category, setCategory] = useState(categories);

  return (
    <main>
      <Title />
      <Menu foods={foods} />
      <Categories category={category} />
    </main>
  );
};
export default App;
