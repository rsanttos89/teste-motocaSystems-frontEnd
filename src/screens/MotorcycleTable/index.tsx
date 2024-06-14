import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import { deleteMotorcycle } from '../../server/deleteIndexedDB';
import { getMotorcycles, Motorcycle } from '../../server/selectIndexedDB';

const MotorcycleTable = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMotorcycles = async () => {
      setLoading(true);
      const fetchedMotorcycles = await getMotorcycles();
      setMotorcycles(fetchedMotorcycles);
      setLoading(false);
    };

    fetchMotorcycles();
  }, []);

  const handleDelete = async (product_code: string) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir esta moto?');

    if (!confirmDelete) {
      return;
    }

    setLoading(true);
    try {
      await deleteMotorcycle(product_code);
      setMotorcycles((prevMotorcycles) =>
        prevMotorcycles.filter((motorcycle) => motorcycle.product_code !== product_code)
      );
    } catch (error) {
      console.error('Erro ao deletar moto', error);
    }
    setLoading(false);
  };

  return (
    <section id='body-MotorcycleTable' className='flex'>
      {loading && <p>Carregando...</p>}
      {!loading && motorcycles.length > 0 ? (
        motorcycles.map((motorcycle) => (
          <div key={motorcycle.product_code} className="flex card">
            <span className='txt-id'>#{motorcycle.product_code}</span>

            <div className='flex box-txt'>
              <span className="txt-title">
                {motorcycle.model} <span className='status'>{motorcycle.status}</span>
              </span>
              
              <span style={{padding: '8px 0px'}}>Valor: {motorcycle.price}</span>
              <span>Cor: <span style={{textTransform: 'uppercase'}}>{motorcycle.color}</span></span>
            </div>

            <div className="flex box-icons">
              <button 
                className='flex material-symbols-outlined'
                style={{color: '#FF4C51'}}
                onClick={() => handleDelete(motorcycle.product_code)}
              >
                delete
              </button>

              <Link 
                to={`/edit/${motorcycle.product_code}/${motorcycle.model}/${motorcycle.status}/${motorcycle.price}/${motorcycle.color}`} 
                className='flex material-symbols-outlined'
              >visibility</Link>
            </div>
          </div>
        ))
      ) : !loading ? (
        <p>Nenhuma moto registrada</p>
      ) : null}
    </section>
  );
};

export default MotorcycleTable;