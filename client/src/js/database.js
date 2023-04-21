// TODO: Install the following package:
import { openDB } from "idb";

// TODO: Complete the initDb() function below:
const initdb = async () =>
  openDB("contactDB", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("contact")) {
        console.log("contact object store already exists");
        return;
      }

      db.createObjectStore("contact", { keyPath: "id", autoIncrement: true });
      console.log("contact DB created!!!!!!!!!!!");
    },
  });

// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email) => {
  try {
    const contactDb = await openDB("contactDB", 1);
    const tx = contactDb.transaction("contact", "readwrite");
    const store = tx.objectStore("contact");
    const request = store.add({
      name,
      home_phone: home,
      cell_phone: cell,
      email,
    });

    const result = await request;
    console.log("data saved!", result);
  } catch (error) {
    console.error("postDb error:", error);
  }
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {};

initdb();
