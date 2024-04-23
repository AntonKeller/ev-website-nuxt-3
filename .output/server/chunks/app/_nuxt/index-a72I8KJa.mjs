import { e as evFooter } from './ev-footer-xy6hj6rx.mjs';
import { resolveComponent, resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import '@vue/shared';

const _sfc_main = {
  name: "IndexPage",
  components: {
    evFooter
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_evFooter = resolveComponent("evFooter");
  const _directive_motion_fade = resolveDirective("motion-fade");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-b841d9c1><div class="scroll-hidden bg-gray-50 px-2 pt-2 md:px-4 md:pt-3.5 pb-2" data-v-b841d9c1><div class="banner-container bg-container" data-v-b841d9c1><div class="flex flex-col items-center lg:items-start" data-v-b841d9c1><div${ssrRenderAttrs(mergeProps({
    class: "w-full flex flex-col items-center lg:items-center",
    delay: 300
  }, ssrGetDirectiveProps(_ctx, _directive_motion_fade)))} data-v-b841d9c1><div class="ev-b-title txt-shadow" data-v-b841d9c1>\u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433</div><div class="ev-bs-title txt-shadow" data-v-b841d9c1>\u041D\u0430 \u0440\u044B\u043D\u043A\u0435 \u0441 2010 \u0433\u043E\u0434\u0430</div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_evFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b841d9c1"]]);

export { index as default };
//# sourceMappingURL=index-a72I8KJa.mjs.map
