import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { saveMotorcycle } from '../../server/indexedDB';

const MotorcycleRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    product_code: '',
    model: '',
    color: '',
    price: '',
    status: 'em_estoque',
  });

  const formatPrice = (value: string) => {
    const numberValue = value.replace(/\D/g, '');
    const formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(numberValue) / 100);
    return formattedValue;
  };

  const parsePrice = (value: string) => {
    const parsedValue = value.replace(/[^\d,]/g, '').replace(',', '.');
    return parsedValue;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    if (id === 'price') {
      setFormData({ ...formData, [id]: formatPrice(value) });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formattedFormData = {
        ...formData,
        price: parsePrice(formData.price),
      };
      await saveMotorcycle(formattedFormData);
      alert('Moto registrada com sucesso!');
  
      const registerAnother = window.confirm('Deseja registrar outra moto?');
      if (registerAnother) {
        setFormData({
          product_code: '',
          model: '',
          color: '',
          price: '',
          status: 'em_estoque',
        });
      } else {
        navigate('/table'); // Redireciona para a página /table
      }
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