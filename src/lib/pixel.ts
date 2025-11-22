import {type} from "node:os";

export const trackPixelEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    console.log(`Track Pixel Event: ${eventName}`);
    (window as any).fbq('track', eventName);
  }
  else {
    console.warn("FB pixel is not initialized.");
  }
}