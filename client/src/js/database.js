import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// adds conetent to db
export const putDb = async (content) => { 
  
  // Creates the db connection
  const jateDb = await openDB('jateDb', 1);
  
  // Creates a new instance.
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });

  // awaits the response from db
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};
// gets all the content from db
export const getDb = async () => {
  console.log('get from db');
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readwrite");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result?.value;
 };


initdb();
