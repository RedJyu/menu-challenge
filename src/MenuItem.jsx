function MenuItem({ title, category, price, desc, img }) {
  return (
    <section className='section-center'>
      <div className='menu-item'>
        <div className='item-info'>
          <h5>{title}</h5>
          <img className='item-img img' src={img} alt={title} />
          <div className='item-price'>{price}</div>
          <p className='info-text'>{desc}</p>
        </div>
      </div>
    </section>
  );
}
export default MenuItem;
