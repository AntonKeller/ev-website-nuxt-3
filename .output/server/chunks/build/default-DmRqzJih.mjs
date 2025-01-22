import { _ as __nuxt_component_0 } from './nuxt-link-CERVLrnW.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlotInner, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';

const _imports_0 = publicAssetsURL("/assets/logotypes/ev-logotype-4-gray-light.png");
const _sfc_main$1 = {
  name: "ev-header",
  computed: {
    route() {
      return this.$route.name;
    }
  },
  mounted() {
    this.routeServicesTest();
  },
  watch: {
    route() {
      this.routeServicesTest();
    }
  },
  methods: {
    routeServicesTest() {
      if (/services/i.test(this.route)) {
        this.backBtnIsShow = true;
      } else {
        this.backBtnIsShow = false;
      }
    }
  },
  data: () => ({
    backBtnIsShow: false,
    menuVisible: false,
    hover: false,
    activeID: null,
    links: [
      // {
      //   id: 1,
      //   title: "Услуги",
      //   location: "/services",
      //   iconClass: "pi pi-briefcase"
      // },
      // {
      //   id: 2,
      //   title: "Достижения",
      //   location: "/rating",
      //   iconClass: "pi pi-briefcase"
      // },
      // {
      //   id: 3,
      //   title: "Опыт",
      //   location: "/experience",
      //   iconClass: "pi pi-briefcase"
      // },
    ]
  })
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "ev-header" }, _attrs))} data-v-64a35d92>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "duration-150 text-gray-400 duration-300 flex items-center justify-center md:justify-start mr-3 sm:mr-0 gap-x-5 mt-1",
    to: "/",
    onClick: ($event) => _ctx.activeID = null
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="select-none w-[44.4444px] h-[32px] md:w-[50px] md:h-[36px] opacity-90"${ssrRenderAttr("src", _imports_0)} alt="no img" data-v-64a35d92${_scopeId}><div class="text-base text-gray-100 font-bold tracking-wide" data-v-64a35d92${_scopeId}>Everest</div>`);
      } else {
        return [
          createVNode("img", {
            class: "select-none w-[44.4444px] h-[32px] md:w-[50px] md:h-[36px] opacity-90",
            src: _imports_0,
            alt: "no img"
          }),
          createVNode("div", { class: "text-base text-gray-100 font-bold tracking-wide" }, "Everest")
        ];
      }
    }),
    _: 1
  }, _parent));
  if (_ctx.backBtnIsShow) {
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/",
      class: "font-extrabold text-gray-200 px-5 py-2 hover:bg-gray-950 duration-300 flex items-center bg-transparent border border-gray-900/25 rounded-lg"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="pi pi-arrow-left text-gray-100" data-v-64a35d92${_scopeId}></i>`);
        } else {
          return [
            createVNode("i", { class: "pi pi-arrow-left text-gray-100" })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/widgets/ev-header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const evHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-64a35d92"]]);
const _sfc_main = {
  name: "default",
  components: {
    evHeader
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_evHeader = resolveComponent("evHeader");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_evHeader, null, null, _parent));
  ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DmRqzJih.mjs.map
