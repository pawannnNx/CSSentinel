import admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
admin.initializeApp({
    credential:admin.credential.cert(s)
})