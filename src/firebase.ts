// Firebase initialization helper. Analytics is loaded only after consent.
import { initializeApp } from "firebase/app";

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

let analyticsInstance: any = null;

export async function initAnalytics() {
  if (analyticsInstance) return analyticsInstance;
  if (typeof window === "undefined" || typeof window.document === "undefined") return null;
  try {
    const mod = await import(/* webpackChunkName: "firebase-analytics" */ "firebase/analytics");
    analyticsInstance = mod.getAnalytics(app);
    return analyticsInstance;
  } catch (e) {
    // Analytics may fail if cookies are blocked or measurement isn't available.
    return null;
  }
}

export { app };
