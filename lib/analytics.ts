/**
 * Typed wrapper around the GTM dataLayer.
 *
 * GTM creates `window.dataLayer` as a global array. We push event objects
 * into it; GTM's container picks them up and routes them to GA4, Google Ads,
 * Meta, etc. This module avoids `any` and centralises the contract so
 * components don't reach into `window` directly.
 */

export interface DataLayerEvent {
  event: string;
  [key: string]: unknown;
}

interface DataLayerWindow {
  dataLayer?: DataLayerEvent[];
}

export function pushEvent(event: DataLayerEvent): void {
  if (typeof window === "undefined") return;
  const w = window as Window & DataLayerWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push(event);
}
