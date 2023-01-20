import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

import firebaseConfig from './.firebaseConfig.js'

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { db, storage }