import { Motorcycle } from './selectIndexedDB';

export const saveMotorcycle = async (motorcycle: Motorcycle): Promise<string> => {
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

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('motorcycles')) {
        const objectStore = db.createObjectStore('motorcycles', { keyPath: 'product_code' });
        objectStore.createIndex('timestamp', 'timestamp', { unique: false });
      }
    };
  });

  const db = await dbPromise;

  const transaction = db.transaction('motorcycles', 'readwrite');
  const store = transaction.objectStore('motorcycles');
  const timestamp = new Date().toISOString();
  const motorcycleWithTimestamp = { ...motorcycle, timestamp };

  const request = store.add(motorcycleWithTimestamp);

  return new Promise<string>((resolve, reject) => {
    request.onsuccess = () => {
      resolve('Moto registrada com sucesso!');
    };

    request.onerror = (event) => {
      console.error('Erro ao salvar a moto', event);
      reject('Erro ao salvar a moto');
    };
  });
};