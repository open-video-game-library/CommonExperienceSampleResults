import { db, storage } from './index.js'
import {
    collection,
    query,
    onSnapshot,
    addDoc,
    orderBy,
    serverTimestamp
} from "firebase/firestore"
import {
    ref,
    getDownloadURL,
    uploadBytes
} from "firebase/storage"

const resultsRef = collection(db, "results_CommonExperienceSample")
const storageRef = ref(storage, "datas_CommonExperienceSample")
const queryAll = query(resultsRef, orderBy("timestamp", "desc"));

const setResultsListener = (added, modified, deleted) => {
    onSnapshot(queryAll, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            getDownloadURL(ref(storage, `datas_CommonExperienceSample/${change.doc.id}/${change.doc.data().filename}`))
                .then((url) => {
                    if (change.type === "added") {
                        // console.log(change.doc.id + "=>" + change.doc.data().sample) 
                        const data = change.doc.data()
                        data.id = change.doc.id
                        data.downloadURL = url
                        added(data)
                    }
                    if (change.type === "modified") {
                        modified()
                    }
                    if (change.type === "removed") {
                        deleted()
                    }
                })
            })
    })
}

const addData = (formDatas) => {
    addDoc(resultsRef, {
        sample: formDatas.sample,
        device: formDatas.device,
        filename: formDatas.file[0].name,
        hmd: formDatas.hmd,
        note: formDatas.note,
        timestamp: serverTimestamp()
    }).then((doc) => {
        const idRef = ref(storageRef, `${doc.id}/${formDatas.file[0].name}`)
        uploadBytes(idRef, formDatas.file[0])
    })
}

export {
    setResultsListener,
    addData,
    // downloadCsvDataById
}