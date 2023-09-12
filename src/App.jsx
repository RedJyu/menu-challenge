import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';

const App = () => {
  const [foods, setFoods] = useState(menu);

  return (
    <main>
      <Title />
      <Menu foods={foods} />
    </main>
  );
};
export default App;
