import { db, storage } from './index.js'
import {
    collection,
    query,
    onSnapshot,
    addDoc,
    orderBy,
    serverTimestamp,
    deleteDoc,
    doc
} from "firebase/firestore"
import {
    ref,
    getDownloadURL,
    uploadBytes,
    deleteObject
} from "firebase/storage"
import {
    signInWithPopup,
    GoogleAuthProvider,
    getAuth
} from "firebase/auth"

// アンダーバーとハイフン入れ替え
const resultsRef = collection(db, "results-CommonExperienceSample")
const storageRef = ref(storage, "datas-CommonExperienceSample")
const queryAll = query(resultsRef, orderBy("timestamp", "asc"))
const auth = getAuth()
const provider = new GoogleAuthProvider()

const setResultsListener = (added, modified, deleted) => {
    onSnapshot(queryAll, (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            const data = change.doc.data()
            data.id = change.doc.id
            getDownloadURL(ref(storage, `datas-CommonExperienceSample/${change.doc.id}/${change.doc.data().filename[0]}`))
                .then((url1) => { 
                    if (change.doc.data().filename[1]) {
                        getDownloadURL(ref(storage, `datas-CommonExperienceSample/${change.doc.id}/${change.doc.data().filename[1]}`))
                            .then((url2) => { 
                                if (change.type === "added") {
                                    data.downloadURL = [url1, url2]
                                    added(data)
                                }
                                if (change.type === "modified") {
                                    modified()
                                }
                                if (change.type === "removed") {
                                    deleted(data.id)
                                }
                             })
                    } else {
                        if (change.type === "added") {
                            data.downloadURL = [url1]
                            added(data)
                        }
                        if (change.type === "modified") {
                            modified()
                        }
                        if (change.type === "removed") {
                            deleted(data.id)
                        }
                    }
                })
        })
    })
}

const addData = (formDatas, completed) => {
    const params = {
        sample: formDatas.sample,
        device: formDatas.device,
        filename: [(formDatas.file[0])[0].name],
        hmd: formDatas.hmd,
        note: formDatas.note,
        timestamp: serverTimestamp()
    }
    if (formDatas.file[1]) {
        (params.filename).push((formDatas.file[1])[0].name)
    }
    addDoc(resultsRef, params).then((doc) => {
        const idRef1 = ref(storageRef, `${doc.id}/${(formDatas.file[0])[0].name}`)
        uploadBytes(idRef1, (formDatas.file[0])[0]).then(() => {
            if (formDatas.file[1]) {
                (params.filename).push((formDatas.file[1])[0].name)
                const idRef2 = ref(storageRef, `${doc.id}/${(formDatas.file[1])[0].name}`)
                uploadBytes(idRef2, (formDatas.file[1])[0]).then(() => {
                    completed(params)
                })
            } else {
                completed(params)
            }
        })
    })
}

const loginWithGoogle = (getUser) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential.accessToken
            const user = result.user
            getUser(user)
        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.log(error.message)
            const email = error.customData.email
            const credential = GoogleAuthProvider.credentialFromError(error)
        })
}

const deleteData = (id, filename) => {
    deleteDoc(doc(resultsRef, id))
    filename.forEach(file => {
        const deleteDataRef = ref(storage, `datas-CommonExperienceSample/${id}/${file}`)
        deleteObject(deleteDataRef)
    })
}

export {
    setResultsListener,
    addData,
    loginWithGoogle,
    deleteData
}