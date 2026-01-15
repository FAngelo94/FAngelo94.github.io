// Firebase initialization for Analytics
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBb7bqu_Wmzi-PxhN5RfxYAcrQS1T3qtpU",
  authDomain: "angelo-falci.firebaseapp.com",
  projectId: "angelo-falci",
  storageBucket: "angelo-falci.firebasestorage.app",
  messagingSenderId: "972341370526",
  appId: "1:972341370526:web:9170dbd864f2647d50e58f",
  measurementId: "G-6JQZWX16BH"
};

const app = initializeApp(firebaseConfig);

// Initialize Analytics only in the browser environment
let analytics: any = undefined;
if (typeof window !== "undefined" && typeof window.document !== "undefined") {
  try {
    analytics = getAnalytics(app);
  } catch (e) {
    // Analytics may fail if cookies are blocked or measurement isn't available.
    // Swallow the error to avoid breaking the app.
  }
}

export { app, analytics };
