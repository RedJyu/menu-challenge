function MenuItem({ title, price, desc, img }) {
  return (
    <section className='section-center'>
      <div className='menu-item'>
        <div className='item-info'>
          <img className='item-img img' src={img} alt={title} />
          <h5>{title}</h5>

          <div className='item-price'>{price}</div>
          <p className='info-text'>{desc}</p>
        </div>
      </div>
    </section>
  );
}
export default MenuItem;
