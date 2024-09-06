import admin from 'firebase-admin';
import service
admin.initializeApp({
    credential:admin.credential.cert()
})