import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "ev-footer"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer-container" }, _attrs))} data-v-033ad599><div class="element md:mt-2" data-v-033ad599><img class="opacity-75 w-[38px] h-[29px]"${ssrRenderAttr("src", "/assets/logotypes/ev-logotype-4-gray.png")} alt="no img" data-v-033ad599><div class="ml-2 md:ml-4 lg:ml-5" data-v-033ad599>\xA9 2024, \u041E\u041E\u041E \u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433</div></div><div class="w-[50%] mt-3 md:mt-6 h-[1px] bg-gray-300" data-v-033ad599></div><div class="flex flex-col sm:flex-row items-center" data-v-033ad599><span class="element mt-3 md:mt-5 bg-gray-200/50 border border200/80 py-1 px-1.5 sm:px-2 rounded-md" data-v-033ad599><i class="text-xs sm:text-sm select-none cursor-pointer text-gray-800 sm:mr-1 pi pi-inbox h-fit" data-v-033ad599></i><span class="ml-2" data-v-033ad599>info@evcons.ru</span></span><div class="element mt-3 md:mt-5" data-v-033ad599><span class="ml-1 sm:ml-2 md:ml-4 bg-gray-200/50 border border200/80 py-1 px-1.5 sm:px-2 rounded-md" data-v-033ad599><i class="text-xs sm:text-sm select-none cursor-pointer text-gray-800 sm:mr-1 pi pi-phone h-fit" data-v-033ad599></i><span class="ml-2" data-v-033ad599>8 495 717-01-01</span></span><span class="ml-1 sm:ml-2 md:ml-4 bg-gray-200/50 border border200/80 py-1 px-1.5 sm:px-2 rounded-md" data-v-033ad599><i class="text-xs sm:text-sm select-none cursor-pointer text-gray-800 sm:mr-1 pi pi-phone h-fit" data-v-033ad599></i><span class="ml-2" data-v-033ad599>8 499 557 07 97</span></span></div></div><div class="element font-normal mt-3 md:mt-4" data-v-033ad599> \u041C\u043E\u0441\u043A\u0432\u0430, 3-\u044F \u0443\u043B\u0438\u0446\u0430 \u042F\u043C\u0441\u043A\u043E\u0433\u043E \u043F\u043E\u043B\u044F, \u0434 2 \u043A 7, \u043E\u0444\u0438\u0441 301 </div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/ev-footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const evFooter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-033ad599"]]);

export { evFooter as e };
//# sourceMappingURL=ev-footer-BE_u0QXH.mjs.map
