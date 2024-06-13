export interface Motorcycle {
  product_code: string;
  model: string;
  color: string;
  price: string;
  status: string;
  timestamp?: string;
}

export const getMotorcycles = async (): Promise<Motorcycle[]> => {
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
  const transaction = db.transaction('motorcycles', 'readonly');
  const store = transaction.objectStore('motorcycles');
  const request = store.getAll();

  return new Promise<Motorcycle[]>((resolve, reject) => {
    request.onsuccess = (event: any) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      console.error('Erro ao buscar as motos', event);
      reject('Erro ao buscar as motos');
    };
  });
};