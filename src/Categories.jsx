function Categories({ category, filterCat }) {
  return (
    <div className='btn-container'>
      {category.map((item) => {
        return (
          <button
            className='btn'
            type='button'
            key={item}
            onClick={() => {
              filterCat(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
export default Categories;
