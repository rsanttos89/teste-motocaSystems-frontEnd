import { useState, ChangeEvent, FormEvent } from 'react';

import './styles.css';
import { saveMotorcycle } from '../../server/indexedDB';

const MotorcycleRegistration = () => {
  const [formData, setFormData] = useState({
    product_code: '',
    model: '',
    color: '',
    price: '',
    status: 'em_estoque',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await saveMotorcycle(formData);
      alert('Moto registrada com sucesso!');
      setFormData({
        product_code: '',
        model: '',
        color: '',
        price: '',
        status: 'em_estoque',
      });
    } catch (error) {
      alert('Erro ao registrar a moto');
    }
  };

  return (
    <section id='body-motorcycle' className='flex'>
      <header className="flex">
        <h2>Preencha as informações a baixo para registrar uma Moto 🏍️</h2>
      </header>

      <form onSubmit={handleSubmit} className='flex'>
        <label htmlFor="product_code">Código</label>
        <input
          type="text"
          id='product_code'
          value={formData.product_code}
          onChange={handleChange}
          required
        />

        <label htmlFor="model">Modelo da Moto</label>
        <input
          type="text"
          id='model'
          value={formData.model}
          onChange={handleChange}
          required
        />

        <label htmlFor="color">Cor</label>
        <input
          type="text"
          id='color'
          value={formData.color}
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Valor</label>
        <input
          type="text"
          id='price'
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={formData.status}
          onChange={handleChange}
          required
        >
          <option value="em_estoque">Em estoque</option>
          <option value="sem_estoque">Sem estoque</option>
          <option value="em_transito">Em trânsito</option>
        </select>

        <button className='flex' type="submit">+ registrar</button>
      </form>
    </section>
  );
}

export default MotorcycleRegistration;