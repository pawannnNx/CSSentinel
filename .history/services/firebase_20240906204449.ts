import admin from 'firebase-admin';
import serviceAccount from './'
admin.initializeApp({
    credential:admin.credential.cert()
})