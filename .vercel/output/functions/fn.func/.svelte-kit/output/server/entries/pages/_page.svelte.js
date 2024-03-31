import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const css = {
  code: "div.svelte-he7upq{color:inherit;padding:2rem}.post.svelte-he7upq{background:white;transition:box-shadow 0.1s ease-in;border:solid}.post.svelte-he7upq:hover{box-shadow:1px 1px 3px #aaa;cursor:pointer}.post.svelte-he7upq,.post.svelte-he7upq{margin-top:2rem}",
  map: null
};
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `<div class="post svelte-he7upq"><small>@${escape(post.users.name)}</small> <p>${escape(post.text)}</p> <small>${escape(post.create_time.toLocaleString())}</small> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><h1 data-svelte-h="svelte-1673gmf">The Void</h1> <button onclick="window.location.href=window.location.href" data-svelte-h="svelte-u4u4zh">Refresh Page</button> <main><div>${each(data.feed, (post) => {
    return `${validate_component(Post, "Post").$$render($$result, { post }, {}, {})}`;
  })}</div></main></div>`;
});
export {
  Page as default
};
