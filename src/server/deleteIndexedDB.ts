export const deleteMotorcycle = async (product_code: string): Promise<void> => {
  if (!('indexedDB' in window)) {
    console.log('Este navegador não suporta IndexedDB');
    return Promise.reject('Este navegador não suporta IndexedDB');
  }

  const dbPromise = new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open('MotorcycleDB', 1);

    request.onerror = (event) => {
      console.error('Erro ao abrir IndexedDB', event);
      reject('Erro ao abrir IndexedDB');
    };

    request.onsuccess = (event: any) => {
      resolve(event.target.result);
    };
  });

  const db = await dbPromise;
  const transaction = db.transaction('motorcycles', 'readwrite');
  const store = transaction.objectStore('motorcycles');

  const request = store.delete(product_code);

  return new Promise<void>((resolve, reject) => {
    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (event) => {
      console.error('Erro ao excluir a moto', event);
      reject('Erro ao excluir a moto');
    };
  });
};