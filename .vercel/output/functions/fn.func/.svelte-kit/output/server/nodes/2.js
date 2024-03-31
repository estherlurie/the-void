import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.DsUsZtC-.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DXL13Q8W.js","_app/immutable/chunks/entry.CeSdpgoA.js"];
export const stylesheets = ["_app/immutable/assets/2.Dme4Hn6B.css"];
export const fonts = [];