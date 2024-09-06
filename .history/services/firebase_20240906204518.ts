import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json'
admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:''
})
export const db = admin.firestore();
