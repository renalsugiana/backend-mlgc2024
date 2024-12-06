const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
  const db = new Firestore();

  const predictCollection = db.collection('predictions');
  return predictCollection.doc(id).set(data);
}

async function getAllData() {
  const db = new Firestore();
  const predictCollection = db.collection('predictions');

  const allData = await predictCollection.get();
  return allData.docs;
}

module.exports = {
  storeData,
  getAllData,
};
