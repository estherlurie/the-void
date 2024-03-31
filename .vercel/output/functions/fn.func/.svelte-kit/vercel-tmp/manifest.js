export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.DPCvXSyQ.js","app":"_app/immutable/entry/app.Vz16Ys1J.js","imports":["_app/immutable/entry/start.DPCvXSyQ.js","_app/immutable/chunks/entry.CXlgjhec.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.Vz16Ys1J.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.DXL13Q8W.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
