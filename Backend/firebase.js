import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import 'dotenv/config';

// Parse the JSON string from .env
const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

// Initialize Firebase Admin with service account
initializeApp({
  credential: cert(serviceAccount)
});

// Get Firestore database reference
const db = getFirestore();

// Export db to use elsewhere
export default db;
