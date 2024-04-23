import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  name: "ev-footer"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-container" }, _attrs))} data-v-72e1d072><div class="element" data-v-72e1d072><div data-v-72e1d072>\u041C\u043E\u0441\u043A\u0432\u0430, 3-\u044F \u0443\u043B\u0438\u0446\u0430 \u042F\u043C\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u044F, \u0434 2 \u043A 7, \u043E\u0444\u0438\u0441 301</div></div><div class="element" data-v-72e1d072><div data-v-72e1d072> info@evcons.ru </div></div><div class="element gap-x-2" data-v-72e1d072><i class="text-sm select-none cursor-pointer text-gray-800 mr-1 pi pi-phone h-fit" data-v-72e1d072></i><span class="bg-gray-300/20 py-1 px-2 rounded-md" data-v-72e1d072>8 495 717-01-01</span><span class="bg-gray-300/20 py-1 px-2 rounded-md" data-v-72e1d072>8 499 557 07 97</span></div><div class="element gap-x-2" data-v-72e1d072><img class="opacity-75 w-[38px] h-[29px]"${ssrRenderAttr("src", "/assets/logotypes/ev-logotype-4-gray.png")} alt="no img" data-v-72e1d072><div data-v-72e1d072>\xA9 2024, \u041E\u041E\u041E \u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u0433</div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/ev-footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const evFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-72e1d072"]]);

export { evFooter as e };
//# sourceMappingURL=ev-footer-xy6hj6rx.mjs.map
