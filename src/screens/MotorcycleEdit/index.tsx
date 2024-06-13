import './styles.css';

const MotorcycleEdit = () => {
  return (
    <section id='body-motorcycle' className='flex'>
      <header className="flex">
        <h2>Preencha as informações a baixo para registrar uma Moto 🏍️</h2>
      </header>

      <form action="" className='flex'>
        <label htmlFor="product_code">Código</label>
        <input type="text" id='product_code' required />

        <label htmlFor="product_code">Modelo da Moto</label>
        <input type="text" id='product_code' required />

        <label htmlFor="product_code">Cor</label>
        <input type="text" id='product_code' required />

        <label htmlFor="product_code">Valor</label>
        <input type="text" id='product_code' required />

        <label htmlFor="product_code">Status</label>
        <select id="product_code" required>
          <option value="em_estoque">Em estoque</option>
          <option value="sem_estoque">Sem estoque</option>
          <option value="em_transito">Em trânsito</option>
        </select>

        <button className='flex' type="submit">+ registrar</button>
      </form>
    </section>
  );
}

export default MotorcycleEdit;