

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.JXIl4lye.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DXL13Q8W.js","_app/immutable/chunks/entry.CeSdpgoA.js"];
export const stylesheets = [];
export const fonts = [];