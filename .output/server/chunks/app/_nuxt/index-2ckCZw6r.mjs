import { resolveDirective, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps } from 'vue/server-renderer';
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
    // evFooter,
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_motion_fade = resolveDirective("motion-fade");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-043e1546><div class="scroll-hidden bg-gray-50 px-2 pt-2 pb-2 md:px-4 md:pt-3.5" data-v-043e1546><div class="banner-container bg-container" data-v-043e1546><div class="flex flex-col items-center lg:items-start" data-v-043e1546><div${ssrRenderAttrs(mergeProps({
    class: "w-full flex flex-col items-center lg:items-center",
    delay: 300
  }, ssrGetDirectiveProps(_ctx, _directive_motion_fade)))} data-v-043e1546><div class="ev-b-title txt-shadow" data-v-043e1546>\u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433</div><div class="w-full flex flex-col gap-y-2 text-center md:text-left mt-8" data-v-043e1546><div class="font-bold text-lg text-gray-300 px-2 py-0.5" data-v-043e1546> \u041D\u0430 \u0440\u044B\u043D\u043A\u0435 \u0441 2010 \u0433\u043E\u0434\u0430 </div><div class="text-lg text-gray-300 px-2 py-0.5" data-v-043e1546><i class="select-none mr-4 pi pi-phone h-fit" data-v-043e1546> 8 495 717-01-01 </i><i class="select-none mr-4 pi pi-phone h-fit" data-v-043e1546> 8 499 557 07 97 </i><i class="select-none pi pi-envelope h-fit" data-v-043e1546> info@evcons.ru </i></div><div class="text-lg text-gray-300 px-2 py-0.5" data-v-043e1546><i class="select-none mr-3 pi pi-map h-fit" data-v-043e1546> \u041C\u043E\u0441\u043A\u0432\u0430, 3-\u044F \u0443\u043B\u0438\u0446\u0430 \u042F\u043C\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u044F, \u0434 2 \u043A 7, \u043E\u0444\u0438\u0441 301 </i></div></div></div></div><div class="absolute bottom-0 left-0 p-1 text-gray-300 px-3 py-2" data-v-043e1546> \xA9 2024, \u041E\u041E\u041E \u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u0433 </div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-043e1546"]]);

export { index as default };
//# sourceMappingURL=index-2ckCZw6r.mjs.map
