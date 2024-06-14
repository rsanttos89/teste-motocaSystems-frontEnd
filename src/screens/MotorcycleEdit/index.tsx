import './styles.css';
import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { saveMotorcycle } from '../../server/indexedDBUpdate';
import { useParams } from 'react-router-dom';

const MotorcycleEdit = () => {
  const { product_code, model, status, price, color } = useParams();
  
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

  useEffect(() => {
    const fetchDataForEdit = async () => {
      const motorcycleToEdit = {
        product_code: product_code || '',
        model: product_code || '',
        color: model || '',
        price: price || '',
        status: status || '',
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
        <h2>Edite as informações que preferir! 📝</h2>
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