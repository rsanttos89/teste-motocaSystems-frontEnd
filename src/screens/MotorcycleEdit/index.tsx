import './styles.css';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { saveMotorcycle } from '../../server/indexedDBUpdate';

const MotorcycleEdit = () => {
  const [formData, setFormData] = useState({
    product_code: '',
    model: '',
    color: '',
    price: '',
    status: 'em_estoque',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await saveMotorcycle(formData);
      alert(isEditing ? 'Moto atualizada com sucesso!' : 'Moto registrada com sucesso!');
      setFormData({
        product_code: '',
        model: '',
        color: '',
        price: '',
        status: 'em_estoque',
      });
      setIsEditing(false);
    } catch (error) {
      alert('Erro ao registrar a moto');
    }
  };

  // Simulating fetching data for editing, you can replace this with actual data fetching logic
  useEffect(() => {
    const fetchDataForEdit = async () => {
      // Dummy data for illustration, replace with actual data fetching logic
      const motorcycleToEdit = {
        product_code: '12345',
        model: 'Model X',
        color: 'Red',
        price: '15000',
        status: 'em_estoque',
      };

      if (motorcycleToEdit) {
        setFormData(motorcycleToEdit);
        setIsEditing(true);
      }
    };

    fetchDataForEdit();
  }, []);

  return (
    <section id='body-motorcycle' className='flex'>
      <header className="flex">
        <h2>Preencha as informações a baixo para {isEditing ? 'editar' : 'registrar'} uma Moto 🏍️</h2>
      </header>

      <form onSubmit={handleSubmit} className='flex'>
        <label htmlFor="product_code">Código</label>
        <input
          type="text"
          id='product_code'
          value={formData.product_code}
          onChange={handleChange}
          required
          disabled={isEditing} // Código não pode ser alterado durante a edição
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

        <button className='flex' type="submit">{isEditing ? 'Atualizar' : '+ registrar'}</button>
      </form>
    </section>
  );
}

export default MotorcycleEdit;