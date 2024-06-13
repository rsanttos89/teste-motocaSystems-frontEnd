import './styles.css';

const MotorcycleTable = () => {
  return (
    <section id='body-MotorcycleTable' className='flex'>
      <div className="flex card">
        <span className='txt-id'>#001</span>

        <div className='flex box-txt'>
          <span 
            className="txt-title">honda pop 1101 <span 
            className='status'>em estoque</span>
          </span>
          
          <span style={{padding: '8px 0px'}}>Valor: R$15.000,00</span>
          <span>Cor: <span style={{textTransform: 'uppercase'}}>branca</span></span>
        </div>

        <div className="flex box-icons">
          <button 
            className='flex material-symbols-outlined'
            style={{color: '#FF4C51'}}
          >delete</button>

          <button className='flex material-symbols-outlined'>visibility</button>
        </div>
      </div>

      <div className="flex card">
        <span className='txt-id'>#001</span>

        <div className='flex box-txt'>
          <span 
            className="txt-title">honda pop 1101 <span 
            className='status'>em estoque</span>
          </span>
          
          <span style={{padding: '8px 0px'}}>Valor: R$15.000,00</span>
          <span>Cor: <span style={{textTransform: 'uppercase'}}>branca</span></span>
        </div>

        <div className="flex box-icons">
          <button 
            className='flex material-symbols-outlined'
            style={{color: '#FF4C51'}}
          >delete</button>

          <button className='flex material-symbols-outlined'>visibility</button>
        </div>
      </div>
    </section>
  );
}

export default MotorcycleTable;