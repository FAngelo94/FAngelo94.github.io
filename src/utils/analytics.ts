import { initAnalytics } from "../firebase";

type Params = Record<string, any> | undefined;

export async function trackEvent(eventName: string, params?: Params) {
  try {
    // If running on localhost, just log to console for local testing
    if (typeof window !== "undefined") {
      const host = window.location.hostname;
      if (host === "localhost" || host === "127.0.0.1") {
        // eslint-disable-next-line no-console
        console.log("trackEvent (localhost):", eventName, params);
        return;
      }
    }

    const analytics = await initAnalytics();
    if (!analytics) return;
    // dynamic import of logEvent to avoid bundling analytics unless used
    const mod = await import(/* webpackChunkName: "firebase-analytics-log" */ "firebase/analytics");
    if (mod && typeof mod.logEvent === "function") {
      mod.logEvent(analytics, eventName, params);
    }
  } catch (e) {
    // swallow errors to avoid breaking UI when analytics unavailable
    // console.debug("trackEvent error", e);
  }
}

export default trackEvent;
