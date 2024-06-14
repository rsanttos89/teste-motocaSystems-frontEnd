import './styles.css';

const Page404 = () => {
  const handleReturn = () => {
    window.history.back();
  };

  return (
    <section id='page404' className='flex'>
      <h1>404</h1>
      <p>Whoops...</p>
      <button onClick={handleReturn}>return</button>
    </section>
  );
}

export default Page404;