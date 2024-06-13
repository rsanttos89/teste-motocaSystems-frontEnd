import './styles.css';

const Page404 = () => {
  const handleReturn = () => {
    window.history.back();
  };

  return (
    <main id='page404' className='flex'>
      <h1>404</h1>
      <p>Whoops...</p>
      <button onClick={handleReturn}>return</button>
    </main>
  );
}

export default Page404;