import './styles.css';
import { useEffect, useState } from 'react';
import { getMotorcycles, Motorcycle } from '../../server/selectIndexedDB';

const MotorcycleTable = () => {
  const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([]);

  useEffect(() => {
    const fetchMotorcycles = async () => {
      const fetchedMotorcycles = await getMotorcycles();
      setMotorcycles(fetchedMotorcycles);
    };

    fetchMotorcycles();
  }, []);

  return (
    <section id='body-MotorcycleTable' className='flex'>
      {motorcycles.length > 0 ? (
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
              >delete</button>

              <button className='flex material-symbols-outlined'>visibility</button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhuma moto registrada</p>
      )}
    </section>
  );
};

export default MotorcycleTable;