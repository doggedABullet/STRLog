/* Real on-device database using IndexedDB. Survives app restarts,
   works fully offline, and holds far more data than localStorage.
   Attachments (photos/PDFs) are stored as Blobs directly in the
   'entries' records, not as base64 text, to keep storage compact. */
const DB_NAME = 'strTaxLoophole';
const DB_VERSION = 2;
const STORES = ['entries', 'people', 'properties', 'categories'];

/* iOS Safari can otherwise clear IndexedDB after a period of inactivity.
   Requesting persistence (works for home-screen-installed PWAs) asks the
   browser not to evict this data under storage pressure. This is best-effort:
   the browser may still say no, and it doesn't matter for a page loaded
   over plain https vs. installed to the home screen. */
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().catch(() => {});
}

let dbPromise = null;

function openDB() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      STORES.forEach((name) => {
        if (!db.objectStoreNames.contains(name)) {
          db.createObjectStore(name, { keyPath: 'id' });
        }
      });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbPromise;
}

async function dbGetAll(store) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function dbPut(store, obj) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).put(obj);
    tx.oncomplete = () => resolve(obj);
    tx.onerror = () => reject(tx.error);
  });
}

async function dbDelete(store, id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function dbCount(store) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).count();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
