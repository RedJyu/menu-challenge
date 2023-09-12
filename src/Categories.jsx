function Categories({ category }) {
  return (
    <section className='section-center'>
      <div className='btn-container'>
        {category.map((item) => {
          return (
            <button key={item} className='btn' type='button'>
              {item}
            </button>
          );
        })}
      </div>
    </section>
  );
}
export default Categories;
