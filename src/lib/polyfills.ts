/**
 * Polyfills for Server-Side Rendering (SSR) compatibility.
 * This file should be imported in the root layout or entry point.
 */

// Polyfill localStorage for SSR if needed
if (typeof window === 'undefined' && (typeof localStorage === 'undefined' || typeof localStorage.getItem !== 'function')) {
    const noop = () => { };
    global.localStorage = {
        getItem: () => null,
        setItem: noop,
        removeItem: noop,
        clear: noop,
        length: 0,
        key: () => null,
    } as any;
}
