import MenuItem from './MenuItem';

function Menu({ foods }) {
  return (
    <div>
      {foods.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
}
export default Menu;
