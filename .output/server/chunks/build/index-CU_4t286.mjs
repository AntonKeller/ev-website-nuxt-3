import { _ as __nuxt_component_0 } from './nuxt-link-CERVLrnW.mjs';
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel';
import { useSSRContext, resolveComponent, withCtx, createTextVNode, resolveDirective, mergeProps, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { e as evFooter } from './ev-footer-BE_u0QXH.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';

const _sfc_main$3 = {
  name: "news-block",
  components: {
    Carousel,
    Pagination,
    Slide
  },
  data() {
    return {
      carouselConfig: {
        itemsToShow: 2.5,
        wrapAround: true,
        ["items-to-show"]: 1,
        mouseDrag: true,
        pauseAutoplayOnHover: true
      },
      news: [
        {
          _id: 1,
          title: "\u0412 \u0434\u0435\u043A\u0430\u0431\u0440\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E \u0431\u043E\u043B\u0435\u0435 20 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043F\u043E \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u043C \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. ",
          date: "10:00, 01.01.2025",
          p: [
            {
              title: null,
              content: "\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u043E\u043C \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430 \u0431\u044B\u043B\u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044B \u043E\u0447\u0435\u0440\u0435\u0434\u043D\u044B\u0435 \u044D\u0442\u0430\u043F\u044B \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u0434\u0437\u043E\u0440\u0430 \u0437\u0430 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043C\u043E\u043D\u0438\u0442\u043E\u0440\u0438\u043D\u0433\u0430 \u0446\u0435\u043B\u0435\u0432\u043E\u0433\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u0431\u0430\u043D\u043A\u043E\u0432, \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u0432 \u0442\u0440\u043E\u0439\u043A\u0443 \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u0431\u0430\u043D\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u0441\u0435\u043A\u0442\u043E\u0440\u0430.\n\u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0430\u043C\u0438 \u0432\u044B\u0441\u0442\u0443\u043F\u0430\u044E\u0442 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0445\u043E\u043B\u0434\u0438\u043D\u0433\u0438 - \u0437\u0430\u0441\u0442\u0440\u043E\u0439\u0449\u0438\u043A\u0438 \u0444\u0435\u0434\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F.",
              enums: []
            },
            {
              title: "\u0414\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u043E\u043C \u043E\u0446\u0435\u043D\u043A\u0438 \u0431\u044B\u043B\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u044B \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u043F\u043E \u043E\u0446\u0435\u043D\u043A\u0435:",
              content: null,
              enums: [
                "\u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0434\u0438\u0441\u0442\u0440\u0438\u0431\u044C\u044E\u0442\u043E\u0440\u0430 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0438 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u043E\u0433\u043E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u044F;",
                "\u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0440\u044F\u0434\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 (\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441, \u043E\u043F\u0442\u043E\u0432\u0430\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0438 \u043F\u0440.)  \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0432 \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044E \u043F\u043E \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u043C \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044F\u043C;",
                "\u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0440\u044F\u0434\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 - \u043B\u0438\u0434\u0435\u0440\u043E\u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438 \u0434\u043B\u044F \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0446\u0435\u043B\u0435\u0439, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0434\u043B\u044F \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0439 \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438 \u043F\u043E \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u043C \u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430\u043C, \u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u043D\u043E\u0441\u0442\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0444\u043E\u043D\u0434\u043E\u0432, \u043D\u0430\u0445\u043E\u0434\u044F\u0449\u0438\u0445\u0441\u044F \u043F\u043E\u0434 \u0434\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C;",
                "\u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438(\u043E\u0442\u0440\u0430\u0441\u043B\u044C \u0433\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u043A",
                "\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0413\u041E\u041A \u0434\u043B\u044F \u0446\u0435\u043B\u0435\u0439 \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u044F;",
                "\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0422\u042D\u0426 \u0434\u043B\u044F \u043E\u0434\u043D\u043E\u0433\u043E \u0438\u0437 \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0445\u043E\u043B\u0434\u0438\u043D\u0433\u043E\u0432 \u0420\u0424;",
                "\u0434\u0440\u0443\u0433\u0438\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430."
              ]
            }
          ]
        }
      ]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Carousel = resolveComponent("Carousel");
  const _component_Slide = resolveComponent("Slide");
  const _component_Pagination = resolveComponent("Pagination");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-950" }, _attrs))} data-v-d7df84dd><div class="bg-gray-100 flex flex-col items-center justify-start lg:py-6 text-gray-800/95" data-v-d7df84dd><div class="w-full px-4 py-1 max-w-[920px] text-lg md:text-2xl lg:text-4xl font-bold rounded-sm" data-v-d7df84dd> \u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 </div>`);
  _push(ssrRenderComponent(_component_Carousel, mergeProps($data.carouselConfig, { class: "w-full max-w-[920px] mt-2 md:mt-4 cursor-pointer" }), {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.news, (item) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: item._id,
            style: { height: "fit-content" }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="text-left px-4 py-2 pb-6" data-v-d7df84dd${_scopeId2}><div class="font-bold md:font-medium" data-v-d7df84dd${_scopeId2}>${ssrInterpolate(item.title)}</div><div class="font-sans text-gray-500 mt-1.5 rounded-md" data-v-d7df84dd${_scopeId2}>${ssrInterpolate(item.date)}</div>`);
                if (item.p) {
                  _push3(`<div class="font-sans mt-4" data-v-d7df84dd${_scopeId2}><!--[-->`);
                  ssrRenderList(item.p, (e) => {
                    _push3(`<div class="mt-2" data-v-d7df84dd${_scopeId2}>`);
                    if (e.title) {
                      _push3(`<div class="font-bold md:font-medium" data-v-d7df84dd${_scopeId2}>${ssrInterpolate(e.title)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (e.content) {
                      _push3(`<div data-v-d7df84dd${_scopeId2}>${ssrInterpolate(e.content)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (e.enums) {
                      _push3(`<ul class="marker:text-gray-800/95 list-disc pl-12 mt-1 space-y-3" data-v-d7df84dd${_scopeId2}><!--[-->`);
                      ssrRenderList(e.enums, (enumItem) => {
                        _push3(`<li class="mt-0.5 list-outside" data-v-d7df84dd${_scopeId2}>${ssrInterpolate(enumItem)}</li>`);
                      });
                      _push3(`<!--]--></ul>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "text-left px-4 py-2 pb-6" }, [
                    createVNode("div", { class: "font-bold md:font-medium" }, toDisplayString(item.title), 1),
                    createVNode("div", { class: "font-sans text-gray-500 mt-1.5 rounded-md" }, toDisplayString(item.date), 1),
                    item.p ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "font-sans mt-4"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.p, (e) => {
                        return openBlock(), createBlock("div", { class: "mt-2" }, [
                          e.title ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "font-bold md:font-medium"
                          }, toDisplayString(e.title), 1)) : createCommentVNode("", true),
                          e.content ? (openBlock(), createBlock("div", { key: 1 }, toDisplayString(e.content), 1)) : createCommentVNode("", true),
                          e.enums ? (openBlock(), createBlock("ul", {
                            key: 2,
                            class: "marker:text-gray-800/95 list-disc pl-12 mt-1 space-y-3"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(e.enums, (enumItem) => {
                              return openBlock(), createBlock("li", { class: "mt-0.5 list-outside" }, toDisplayString(enumItem), 1);
                            }), 256))
                          ])) : createCommentVNode("", true)
                        ]);
                      }), 256))
                    ])) : createCommentVNode("", true)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.news, (item) => {
            return openBlock(), createBlock(_component_Slide, {
              key: item._id,
              style: { height: "fit-content" }
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "text-left px-4 py-2 pb-6" }, [
                  createVNode("div", { class: "font-bold md:font-medium" }, toDisplayString(item.title), 1),
                  createVNode("div", { class: "font-sans text-gray-500 mt-1.5 rounded-md" }, toDisplayString(item.date), 1),
                  item.p ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "font-sans mt-4"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.p, (e) => {
                      return openBlock(), createBlock("div", { class: "mt-2" }, [
                        e.title ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "font-bold md:font-medium"
                        }, toDisplayString(e.title), 1)) : createCommentVNode("", true),
                        e.content ? (openBlock(), createBlock("div", { key: 1 }, toDisplayString(e.content), 1)) : createCommentVNode("", true),
                        e.enums ? (openBlock(), createBlock("ul", {
                          key: 2,
                          class: "marker:text-gray-800/95 list-disc pl-12 mt-1 space-y-3"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(e.enums, (enumItem) => {
                            return openBlock(), createBlock("li", { class: "mt-0.5 list-outside" }, toDisplayString(enumItem), 1);
                          }), 256))
                        ])) : createCommentVNode("", true)
                      ]);
                    }), 256))
                  ])) : createCommentVNode("", true)
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/news-block.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-d7df84dd"]]);
const ratingConfig = [
  {
    id: 1,
    year: 2024,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 1 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 4 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 11 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0446\u0435\u043D\u043D\u044B\u0445 \u0431\u0443\u043C\u0430\u0433", value: 12 }
    ]
  },
  {
    id: 2,
    year: 2023,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 1 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432", value: 3 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 3 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 11 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0446\u0435\u043D\u043D\u044B\u0445 \u0431\u0443\u043C\u0430\u0433", value: 12 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 13 }
    ]
  },
  {
    id: 3,
    year: 2022,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 1 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 1 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432", value: 4 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0446\u0435\u043D\u043D\u044B\u0445 \u0431\u0443\u043C\u0430\u0433", value: 9 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 9 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 15 }
    ]
  },
  {
    id: 4,
    year: 2021,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 1 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 2 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 9 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 11 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0446\u0435\u043D\u043D\u044B\u0445 \u0431\u0443\u043C\u0430\u0433", value: 18 }
    ]
  },
  {
    id: 5,
    year: 2020,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 1 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 7 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 9 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 15 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430 \u0438 \u0446\u0435\u043D\u043D\u044B\u0445 \u0431\u0443\u043C\u0430\u0433", value: 99 }
    ]
  },
  {
    id: 6,
    year: 2019,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 1 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 6 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 13 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 14 }
    ]
  },
  {
    id: 7,
    year: 2018,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 2 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 3 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 8 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 21 }
    ]
  },
  {
    id: 8,
    year: 2017,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 1 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 11 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 26 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 24 }
    ]
  },
  {
    id: 9,
    year: 2016,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 2 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 13 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 25 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 43 }
    ]
  },
  {
    id: 10,
    year: 2015,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 2 },
      { title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u043D\u0435\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0438\u043D\u0442\u0435\u043B\u043B\u0435\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438", value: 14 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 24 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 59 }
    ]
  },
  {
    id: 11,
    year: 2014,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 7 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 21 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 59 }
    ]
  },
  {
    id: 12,
    year: 2013,
    infoByYear: [
      { title: "\u041F\u0435\u0440\u0435\u043E\u0446\u0435\u043D\u043A\u0430 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0432 \u0442.\u0447. \u0432 \u0446\u0435\u043B\u044F\u0445 \u041C\u0421\u0424\u041E", value: 10 },
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 41 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 66 }
    ]
  },
  {
    id: 13,
    year: 2012,
    infoByYear: [
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 44 },
      { title: "\u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", value: 76 }
    ]
  },
  {
    id: 14,
    year: 2011,
    infoByYear: [
      { title: "\u041C\u0435\u0441\u0442\u043E \u0441\u0440\u0435\u0434\u0438 \u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439", value: 59 }
    ]
  }
];
const _sfc_main$2 = {
  name: "ratingBlock",
  head() {
    return {
      title: "\u0420\u0435\u0439\u0442\u0438\u043D\u0433\u0438",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B Everest Consulting \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u043B\u0438 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0434\u043B\u044F 45 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438\u0437 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 \xAB\u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0438\xBB (\u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u042D\u043A\u0441\u043F\u0435\u0440\u0442-400), \u0441\u043E\u0432\u043E\u043A\u0443\u043F\u043D\u0430\u044F \u0432\u044B\u0440\u0443\u0447\u043A\u0430 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0437\u0430 2008 \u0433\u043E\u0434 \u043F\u0440\u0435\u0432\u044B\u0441\u0438\u043B\u0430 9.3 \u0442\u0440\u043B\u043D. \u0440\u0443\u0431. \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u0434\u0435\u043B\u043E\u0432\u044B\u043C \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u043C \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u044B\u0441\u043E\u043A\u0438\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u0438\u0437\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043E\u043F\u044B\u0442 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430 \u0441 \u043F\u043E\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0441 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u043C\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C\u0438 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0438\u043C\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C\u0438. \u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 Everest Consulting \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0447\u043B\u0435\u043D\u0430\u043C\u0438 \u0442\u0430\u043A\u0438\u0445 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439, \u043A\u0430\u043A \u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u0430\u044F \u041C\u0435\u0436\u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u044F \u041E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (\u0421\u041C\u0410\u041E),  \u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0438\u0439 \u0441\u043E\u044E\u0437 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 (OSV), \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (ASA)"
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "\u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0438\u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u042D\u043A\u0441\u043F\u0435\u0440\u0442-400 Everest Consulting \u0410\u0440\u0442\u0435\u043B\u044C \u0441\u0442\u0430\u0440\u0430\u0442\u0435\u043B\u0435\u0439 \xAB\u0421\u0435\u043B\u0438\u0433\u0434\u0430\u0440\xBB, \u0413\u0440\u0443\u043F\u043F\u0430 \u041C\u0430\u0433\u043D\u0435\u0437\u0438\u0442, \u0413\u0440\u0443\u043F\u043F\u0430 \u041C\u0415\u0427\u0415\u041B, \u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0451\u043D\u043D\u0430\u044F \u043C\u0435\u0442\u0430\u043B\u043B\u0443\u0440\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u0420\u0423\u0421\u0410\u041B, \u0421\u0438\u0431\u0438\u0440\u0441\u043A\u0430\u044F \u0443\u0433\u043E\u043B\u044C\u043D\u043E-\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F (\u0421\u0423\u042D\u041A) \u0410\u043B\u044C\u0444\u0430-\u0411\u0430\u043D\u043A, \u0411\u0430\u043D\u043A \u0412\u0422\u0411 \u0421\u0435\u0432\u0435\u0440\u043E-\u0417\u0430\u043F\u0430\u0434, \u0411\u0430\u043D\u043A \xAB\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\xBB, \u0411\u0430\u043D\u043A \u0421\u043E\u0441\u044C\u0435\u0442\u0435 \u0416\u0435\u043D\u0435\u0440\u0430\u043B\u044C \u0412\u043E\u0441\u0442\u043E\u043A, \u0412\u043D\u0435\u0448\u044D\u043A\u043E\u043D\u043E\u043C\u0431\u0430\u043D\u043A, \u0412\u0422\u0411, \u0412\u0422\u0411 24, \u041A\u043E\u043C\u043C\u0435\u0440\u0446\u0431\u0430\u043D\u043A, \u041C\u0414\u041C \u0411\u0430\u043D\u043A, \u0420\u0430\u0439\u0444\u0444\u0430\u0439\u0437\u0435\u043D\u0431\u0430\u043D\u043A, \u0420\u043E\u0441\u0441\u0435\u043B\u044C\u0445\u043E\u0437\u0431\u0430\u043D\u043A, \u0421\u0431\u0435\u0440\u0431\u0430\u043D\u043A \u0420\u043E\u0441\u0441\u0438\u0438, \u042E\u043D\u0438\u041A\u0440\u0435\u0434\u0438\u0442 \u0411\u0430\u043D\u043A, \u0411\u0440\u0430\u043D\u0441\u0432\u0438\u043A \u0420\u0435\u0439\u043B \u041B\u0438\u0437\u0438\u043D\u0433 Glencairn, \u0410\u043B\u044C\u0444\u0430\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435, \u0418\u043D\u0433\u043E\u0441\u0441\u0442\u0440\u0430\u0445, \u0420\u043E\u0441\u0433\u043E\u0441\u0441\u0442\u0440\u0430\u0445, \u0421\u041E\u0413\u0410\u0417, \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430 \xAB\u041A\u0430\u043F\u0438\u0442\u0430\u043B\xBB \u0410\u041F\u041A \xAB\u041E\u0413\u041E\xBB, \u041C\u043E\u0441\u0441\u0435\u043B\u044C\u043F\u0440\u043E\u043C, \u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \xAB\u041D\u0418\u0414\u0410\u041D\xBB, \u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u044B, \u0421\u0410\u0425\u041E \u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \xAB\u0412\u0438\u043A\u0442\u043E\u0440\u0438\u044F\xBB, \u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \xAB\u041D\u0415\u0417\u0410\u0412\u0418\u0421\u0418\u041C\u041E\u0421\u0422\u042C\xBB, \u0420\u041E\u041B\u042C\u0424 \u0425\u043E\u043B\u0434\u0438\u043D\u0433, X5 \u0420\u0438\u0442\u0435\u0439\u043B \u0413\u0440\u0443\u043F, \u0425\u043E\u043B\u0434\u0438\u043D\u0433 \u041C\u0430\u0440\u0442\u0430 (\u0442\u043E\u0440\u0433\u043E\u0432\u0430\u044F \u0441\u0435\u0442\u044C Spar, Mosmart) Coalco, Mirax Group, \u0413\u043E\u0440\u043A\u0438-8, \u0414\u041E\u041D-\u0421\u0442\u0440\u043E\u0439, \u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u043E-\u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \xABNBM \u2013 \u0421\u0442\u0440\u043E\u0439\u0441\u0435\u0440\u0432\u0438\u0441\xBB, \u0418\u043D\u0442\u0435\u043A\u043E, \u0420\u0443\u0431\u043B\u0451\u0432\u043E-\u0410\u0440\u0445\u0430\u043D\u0433\u0435\u043B\u044C\u0441\u043A\u043E\u0435, \u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0413\u0430\u043B\u0441, \u0421\u0423-155 RRR (\xAB3\u0420\xBB), \u0413\u041A \xAB\u0422\u0440\u0430\u043D\u0441\u0431\u0443\u043D\u043A\u0435\u0440\xBB, \u0414\u0430\u043B\u044C\u043D\u0435\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0435 \u043C\u043E\u0440\u0441\u043A\u043E\u0435 \u043F\u0430\u0440\u043E\u0445\u043E\u0434\u0441\u0442\u0432\u043E, \u0418\u0421\u0422 \u041B\u0410\u0419\u041D (\u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442 \u0414\u043E\u043C\u043E\u0434\u0435\u0434\u043E\u0432\u043E), \u041A\u0430\u0432\u043C\u0438\u043D\u0432\u043E\u0434\u044B\u0430\u0432\u0438\u0430, \u041C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u044C\u043D\u0435\u0444\u0442\u0435\u043E\u0440\u0433\u0441\u0438\u043D\u0442\u0435\u0437, \u041C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442 \u0428\u0435\u0440\u0435\u043C\u0435\u0442\u044C\u0435\u0432\u043E, \u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0435 \u0436\u0435\u043B\u0435\u0437\u043D\u044B\u0435 \u0434\u043E\u0440\u043E\u0433\u0438 \u0413\u0430\u0437\u043F\u0440\u043E\u043C, \u0418\u043D\u0442\u0435\u0433\u0440\u0430 Golden Telecom, \u0412\u044B\u043C\u043F\u0435\u043B\u041A\u043E\u043C, \u041C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0422\u0435\u043B\u0435\u0421\u0438\u0441\u0442\u0435\u043C\u044B, \u0421\u041C\u0410\u0420\u0422\u0421, \u0421\u0432\u044F\u0437\u044C\u0438\u043D\u0432\u0435\u0441\u0442 \u0420\u0443\u0441\u0441\u043A\u0438\u0435 \u0424\u043E\u043D\u0434\u044B \u0414\u0430\u043B\u044C\u043D\u0435\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u0418\u043D\u0442\u0435\u0440-\u0420\u0410\u041E \u0415\u042D\u0421, \u041B\u0443\u0422\u042D\u041A, \u041E\u0413\u041A-1, \u0420\u043E\u0441\u044D\u043D\u0435\u0440\u0433\u043E\u0430\u0442\u043E\u043C, \u0420\u0443\u0441\u0413\u0438\u0434\u0440\u043E, \u0422\u0413\u041A-5 \u0410\u043D\u0433\u0430\u0440\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u043D\u044B\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0442, \u0415\u0444\u0440\u0435\u043C\u043E\u0432\u0441\u043A\u0438\u0439 \u0437\u0430\u0432\u043E\u0434 \u0441\u0438\u043D\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043A\u0430\u0443\u0447\u0443\u043A\u0430, \u041A\u0438\u0440\u043E\u0432\u043E-\u0427\u0435\u043F\u0435\u0446\u043A\u0438\u0439 \u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0442, \u041C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u043E-\u0425\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \xAB\u0415\u0432\u0440\u043E\u0445\u0438\u043C\xBB, \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u042D\u043B\u0435\u043A\u0442\u0440\u043E\u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0437\u0430\u0432\u043E\u0434, \u0421\u0438\u0431\u0438\u0440\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0442, \u0423\u0440\u0430\u043B\u044C\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0442"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://evcons.ru/rating"
        }
      ]
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    evFooter
  },
  data: () => ({
    slide: 1,
    number: 0,
    ratingConfig,
    currentRating: [],
    activeYear: 2024,
    yearMax: null,
    yearMin: null,
    inProcess: false,
    titles: [
      {
        id: 2,
        title: "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C\u0443 \u043E\u043F\u044B\u0442\u0443 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",
        icon: "pi-pencil"
      },
      {
        id: 1,
        title: "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u043A \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u044B\u043C \u0438 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u043C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u043C \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439,\n\u043A\u043E\u043C\u043C\u0435\u0440\u0447\u0435\u0441\u043A\u0438\u0445 \u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0431\u0430\u043D\u043A\u043E\u0432, \u0441\u0442\u0440\u0430\u0445\u043E\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439.",
        icon: "pi-info-circle"
      },
      {
        id: 3,
        title: "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0432 \u0441\u0436\u0430\u0442\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u043C \u043D\u0430\u0440\u0430\u0431\u043E\u0442\u043A\u0430\u043C \u0438 \u0431\u0430\u0437\u0435 \u0437\u043D\u0430\u043D\u0438\u0439.",
        icon: "pi-database"
      }
      // {
      //   id: 4,
      //   title: "Оптимальное соотношение «цена-качество».",
      //   icon: "pi-check-circle"
      // },
      // {
      //   id: 5,
      //   title: "Возможность привлечения к выполнению проектов специалистов,\n" +
      //       "обладающих международными квалификациями и опытом в различных областях знаний.",
      //   icon: "pi-users"
      // },
    ]
  })
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  const _component_Pagination = resolveComponent("Pagination");
  const _directive_motion = resolveDirective("motion");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "square z-20 relative w-full bg-gray-50 flex flex-col items-center py-2 md:py-6 lg:py-8 overflow-hidden" }, _attrs))}><div class="z-10 absolute bottom-[-25vw] md:bottom-[-20vw] opacity-15 sm:opacity-15 w-[100vw] md:w-[90vw]"><svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M403.2 776l-62.4 62.4c-1.6 1.6-3.2 1.6-6.4 1.6h-88c-4.8 0-8-3.2-8-8s3.2-8 8-8h84.8l59.2-59.2v-68.8c0-4.8 3.2-8 8-8s8 3.2 8 8v64H576c4.8 0 8 3.2 8 8s-3.2 8-8 8H403.2z m-11.2-436.8l-108.8-94.4c-3.2-3.2-3.2-8-1.6-11.2 3.2-3.2 8-3.2 11.2-1.6l110.4 94.4H528c4.8 0 8 3.2 8 8s-3.2 8-8 8h-120V400c0 4.8-3.2 8-8 8s-8-3.2-8-8v-60.8zM800 728c-4.8 0-8-3.2-8-8s3.2-8 8-8h88c4.8 0 8 3.2 8 8s-3.2 8-8 8H800z m-49.6-435.2c-3.2 3.2-8 3.2-11.2 1.6-3.2-3.2-3.2-8-1.6-11.2l96-112c3.2-3.2 8-3.2 11.2-1.6 3.2 3.2 3.2 8 1.6 11.2l-96 112zM160 504c-4.8 0-8-3.2-8-8s3.2-8 8-8h112c4.8 0 8 3.2 8 8s-3.2 8-8 8h-112z m536 144c0 4.8-3.2 8-8 8s-8-3.2-8-8V544c0-4.8 3.2-8 8-8s8 3.2 8 8v104z" fill="rgba(109, 40, 217, .75)"></path></svg></div><div class="z-10 text-gray-950 w-full rounded-sm py-4 pb-4 px-4 max-w-[920px]"><div${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0, translateY: -30 },
    visible: { opacity: 1, translateY: 0 },
    duration: 1200,
    delay: 300,
    class: "flex items-center text-lg md:text-2xl lg:text-4xl font-bold rounded-sm text-gray-800/95 w-fit"
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> \u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 </div><div class="mt-1 lg:mt-4 text-sm lg:text-base w-full"><div${ssrRenderAttrs(mergeProps({
    initial: { opacity: 0, translateY: -30 },
    visible: { opacity: 1, translateY: 0 },
    duration: 1200,
    delay: 600
  }, ssrGetDirectiveProps(_ctx, _directive_motion)))}> \u041D\u0430\u0448\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u043B\u0438 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B\u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u0434\u043B\u044F \u043C\u043D\u043E\u0433\u0438\u0445 (\u0431\u043E\u043B\u0435\u0435 50) \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u0438\u0437 \u0440\u0435\u0439\u0442\u0438\u043D\u0433\u0430 \xAB\u041A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0420\u043E\u0441\u0441\u0438\u0438\xBB (\u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u042D\u043A\u0441\u043F\u0435\u0440\u0442-400). \u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u0432 \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439 <a target="_blank" href="https://raex-rr.com/" class="ml-1 text-red-600 font-bold">\u0433\u0440\u0443\u043F\u043F\u044B RAEX</a></div><div><div class="bg-gray-900/15 mt-2 md:mt-4 h-[1px]"></div><div class="flex justify-between items-center w-full"><i class="select-none text-gray-800/70 pi pi-angle-left h-fit"></i>`);
  _push(ssrRenderComponent(_component_carousel, {
    modelValue: _ctx.slide,
    "onUpdate:modelValue": ($event) => _ctx.slide = $event,
    class: "w-full rounded-sm py-2 md:py-3.5",
    transition: 750,
    "items-to-show": 1,
    wrapAround: true
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.ratingConfig, (item) => {
          _push2(ssrRenderComponent(_component_slide, {
            key: item.id,
            class: "cursor-pointer"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="font-extrabold text-4xl text-blue-600"${_scopeId2}>${ssrInterpolate(item.year)}</div>`);
              } else {
                return [
                  createVNode("div", { class: "font-extrabold text-4xl text-blue-600" }, toDisplayString(item.year), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.ratingConfig, (item) => {
            return openBlock(), createBlock(_component_slide, {
              key: item.id,
              class: "cursor-pointer"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "font-extrabold text-4xl text-blue-600" }, toDisplayString(item.year), 1)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i class="select-none text-gray-800/70 pi pi-angle-right h-fit"></i></div><div class="bg-gray-900/15 h-[1px]"></div></div></div><div class="border-t border-b border-gray-300/15 mt-1 md:mt-2">`);
  _push(ssrRenderComponent(_component_carousel, {
    modelValue: _ctx.slide,
    "onUpdate:modelValue": ($event) => _ctx.slide = $event,
    class: "text-left rounded-sm bg-transparent pb-2 mt-1 md:mt-2 lg:mt-4",
    snapAlign: "start",
    transition: 950,
    "items-to-show": 1,
    wrapAround: true
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Pagination)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList(_ctx.ratingConfig, (item) => {
          _push2(ssrRenderComponent(_component_slide, {
            key: item.id,
            class: "cursor-pointer w-full text-left py-4 border border-gray-200/75 bg-gray-100/75 backdrop-blur-md rounded"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex items-center sm:items-start justify-start flex-col text-left"${_scopeId2}><!--[-->`);
                ssrRenderList(item.infoByYear, (e) => {
                  _push3(`<div class="flex flex-col text-center sm:flex-row items-center sm:justify-start text-gray-900 text-sm mt-1.5"${_scopeId2}><div class="font-extrabold text-2xl mr-2 sm:mr-6 text-blue-600 text-right sm:w-[40px]"${_scopeId2}>${ssrInterpolate(e.value)}</div><div${_scopeId2}>${ssrInterpolate(e.title)}</div></div>`);
                });
                _push3(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center sm:items-start justify-start flex-col text-left" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.infoByYear, (e) => {
                      return openBlock(), createBlock("div", { class: "flex flex-col text-center sm:flex-row items-center sm:justify-start text-gray-900 text-sm mt-1.5" }, [
                        createVNode("div", { class: "font-extrabold text-2xl mr-2 sm:mr-6 text-blue-600 text-right sm:w-[40px]" }, toDisplayString(e.value), 1),
                        createVNode("div", null, toDisplayString(e.title), 1)
                      ]);
                    }), 256))
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.ratingConfig, (item) => {
            return openBlock(), createBlock(_component_slide, {
              key: item.id,
              class: "cursor-pointer w-full text-left py-4 border border-gray-200/75 bg-gray-100/75 backdrop-blur-md rounded"
            }, {
              default: withCtx(() => [
                createVNode("div", { class: "flex items-center sm:items-start justify-start flex-col text-left" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(item.infoByYear, (e) => {
                    return openBlock(), createBlock("div", { class: "flex flex-col text-center sm:flex-row items-center sm:justify-start text-gray-900 text-sm mt-1.5" }, [
                      createVNode("div", { class: "font-extrabold text-2xl mr-2 sm:mr-6 text-blue-600 text-right sm:w-[40px]" }, toDisplayString(e.value), 1),
                      createVNode("div", null, toDisplayString(e.title), 1)
                    ]);
                  }), 256))
                ])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex flex-wrap justify-between items-start w-full bg-transparent mt-4 md:mt-8 lg:mt-12"><!--[-->`);
  ssrRenderList(_ctx.titles, (e) => {
    _push(`<div${ssrRenderAttrs(mergeProps({
      initial: { opacity: 0, scale: 0.85 },
      visible: { opacity: 1, y: 0, scale: 1 },
      delay: 400,
      key: e.id,
      class: "text-center text-sm lg:text-base w-full sm:w-[30%] text-gray-950 px-2 py-1 rounded-lg"
    }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><i class="${ssrRenderClass([e.icon, "underline text-3xl md:text-4xl mt-3 font-sans select-none cursor-pointer text-blue-600 mr-2 pi h-fit"])}"></i><div class="mt-3 sm:mt-4">${ssrInterpolate(e.title)}</div></div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ratingBlock.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const employees = [
  {
    id: 1,
    img: "alexey-2.png",
    fullName: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0416\u0443\u0440\u0430\u0432\u043B\u0435\u0432",
    post: "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
    area: "\u041C\u043E\u0441\u043A\u0432\u0430",
    text: "30 \u043B\u0435\u0442\u043D\u0438\u0439 \u043E\u043F\u044B\u0442 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u0430.\n\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u0430 \u043E\u0446\u0435\u043D\u043A\u0438 \u0430\u043A\u0442\u0438\u0432\u043E\u0432 \u0438 \u0431\u0438\u0437\u043D\u0435\u0441\u0430.\n\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u043F\u044B\u0442 \u043E\u0446\u0435\u043D\u043A\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0438 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043E\u0432.\n\u0427\u043B\u0435\u043D \u041D\u041F \u0421\u0420\u041E \u0414\u0435\u043B\u043E\u0432\u043E\u0439 \u0421\u043E\u044E\u0437 \u041E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432.\n\u0427\u043B\u0435\u043D \u0412\u043E\u0441\u0442\u043E\u0447\u043D\u043E-\u0415\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u044E\u0437\u0430 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 (OSV).\n\u0410\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (ASA).\n\u0421 2006 \u043F\u043E 2011 \u0433\u043E\u0434 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u043B \u043D\u0430 \u043A\u0430\u0444\u0435\u0434\u0440\u0435 \xAB\u041E\u0446\u0435\u043D\u043A\u0430 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438\xBB \u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0433\u043E \u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u043F\u0440\u0438 \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0435 \u0420\u0424."
  },
  {
    id: 2,
    img: "roman-2.png",
    fullName: "\u0420\u043E\u043C\u0430\u043D \u041A\u0430\u0440\u043F\u043E\u0432",
    post: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
    area: "\u041C\u043E\u0441\u043A\u0432\u0430",
    text: "20 -\u043B\u0435\u0442\u043D\u0438\u0439 \u043E\u043F\u044B\u0442 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u0432 \u0441\u0444\u0435\u0440\u0435 \u041C\u0421\u0424\u041E, \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u0443\u0447\u0435\u0442\u0430 \u0438 \u043E\u0446\u0435\u043D\u043A\u0438.\n\u041E\u0434\u0438\u043D \u0438\u0437 \u0432\u0435\u0434\u0443\u0449\u0438\u0445 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u0432 \u0420\u0424 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043E\u0446\u0435\u043D\u043A\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0438 \u043C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0438\u0438 \u0431\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0441\u043A\u043E\u0433\u043E \u0443\u0447\u0435\u0442\u0430.\n\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432, \u043E\u0446\u0435\u043D\u0449\u0438\u043A, \u0438\u043D\u0436\u0435\u043D\u0435\u0440.\n\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442 \u0410\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (ASA), \u0447\u043B\u0435\u043D \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430 \u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u043E\u0439 \u043C\u0435\u0436\u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u0438 \u043E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432."
  },
  {
    id: 3,
    img: "stepan-4.png",
    fullName: "\u0421\u0442\u0435\u043F\u0430\u043D \u041F\u043E\u0442\u0430\u043F\u043E\u0432",
    post: "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440",
    area: "\u041C\u043E\u0441\u043A\u0432\u0430",
    text: "14-\u043B\u0435\u0442\u043D\u0438\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u0445. \u0411\u043E\u043B\u0435\u0435 8 \u043B\u0435\u0442 \u043E\u043F\u044B\u0442\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0435\u0433\u043E \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0430 \u043A\u0440\u0443\u043F\u043D\u043E\u0439 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438\n\u0427\u043B\u0435\u043D \u0421\u0430\u043C\u043E\u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u043C\u043E\u0439 \u041C\u0435\u0436\u0440\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u0438 \u041E\u0446\u0435\u043D\u0449\u0438\u043A\u043E\u0432 (\u0421\u041C\u0410\u041E). \u0412\u0445\u043E\u0434\u0438\u043B \u0432 \u0441\u043E\u0441\u0442\u0430\u0432\n\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430 \u0438 \u0414\u0438\u0441\u0446\u0438\u043F\u043B\u0438\u043D\u0430\u0440\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u0438\u0442\u0435\u0442\u0430 \u0421\u0420\u041E.\n\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u043F\u044B\u0442 \u043E\u0446\u0435\u043D\u043E\u0447\u043D\u043E\u0439 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0432 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439 \u043E\u0442\u0440\u0430\u0441\u043B\u0438, \u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u043A\u0435, \u043D\u0435\u0444\u0442\u0435\u0433\u0430\u0437\u043E\u0434\u043E\u0431\u044B\u0432\u0430\u044E\u0449\u0435\u043C,\n\u0430\u0433\u0440\u043E\u043F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u043C \u0438 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u043C \u0441\u0435\u043A\u0442\u043E\u0440\u0430\u0445"
  }
];
const _sfc_main$1 = {
  name: "directorBlock",
  head() {
    return {
      title: "\u041E \u043D\u0430\u0441",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0416\u0443\u0440\u0430\u0432\u043B\u0435\u0432. \u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440. \u0420\u043E\u043C\u0430\u043D \u041A\u0430\u0440\u043F\u043E\u0432. \u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440.  \u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440. \u0420\u0416\u0414, \u0420\u041E\u0421\u0410\u0422\u041E\u041C, \u0410\u0432\u0442\u043E\u0412\u0410\u0417, \u0420\u0410\u041E \u0415\u042D\u0421, \u0411\u0430\u043D\u043A \u0412\u0422\u0411, \u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0434\u0438\u0442\u0435\u0440\u044B \u0420\u0416\u0414, \u041A\u0410\u041C\u0410\u0417, \u0410\u0432\u0442\u043E\u0412\u0410\u0417, \u0420\u0423\u0421\u0410\u041B, \u0411\u0430\u043D\u043A \u0412\u0422\u0411, \u0421\u041E\u0413\u0410\u0417, \u0420\u0410\u041E \u0415\u042D\u0421, \u0412\u042D\u0411 \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u0420\u0424"
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://evcons.ru/directors"
        }
      ]
    };
  },
  components: {
    evFooter,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data: () => ({
    employees
  })
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _directive_motion = resolveDirective("motion");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "directors-section relative" }, _attrs))} data-v-609a92cf><div class="z-10 flex flex-col w-full sm:max-w-[920px]" data-v-609a92cf><h1 class="text-gray-100 text-lg md:text-2xl lg:text-4xl font-bold duration-300 mt-2 md:mt-20 lg:mt-24" data-v-609a92cf> \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E <div class="mt-0.5 sm:mt-3 h-0.5 sm:h-1 w-[150px] translate-x-[0] bg-red-600/95" data-v-609a92cf></div></h1><h2 class="mb-1 mt-1 sm:mb-4 text-sm lg:text-lg text-gray-200 duration-300 space-y-0.5" data-v-609a92cf> \u0411\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u0430\u044F \u0440\u0435\u043F\u0443\u0442\u0430\u0446\u0438\u044F \u043D\u0430 \u0440\u044B\u043D\u043A\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 <span class="text-lg ld:text-3xl text-blue-500/95 font-semibold md:ml-1 text-nowrap" data-v-609a92cf>27 \u043B\u0435\u0442</span></h2><!--[-->`);
  ssrRenderList(_ctx.employees, (e) => {
    _push(`<div${ssrRenderAttrs(mergeProps({
      key: e.id,
      class: "card-director z-10 duration-300 mt-2 sm:mt-4 lg:mt-6",
      initial: { opacity: 0, translateX: -30 },
      visible: { opacity: 1, translateX: 0 },
      delay: e.id * 150
    }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-609a92cf><img class="card-image"${ssrRenderAttr("src", `/assets/avatars/${e.img}`)} alt="no img" data-v-609a92cf><p class="mt-0 text-gray-900 font-extrabold text-sm text-base lg:text-lg" data-v-609a92cf>${ssrInterpolate(e.fullName)}</p><p class="mt-0 text-gray-900/85 font-sans underline text-sm lg:text-base" data-v-609a92cf>${ssrInterpolate(e.post)}</p><p class="mt-2 md:mt-3 text-sm sm:text-base text-gray-700" data-v-609a92cf>${ssrInterpolate(e.text)}</p></div>`);
  });
  _push(`<!--]--><h1 class="text-gray-100 text-lg md:text-2xl lg:text-4xl font-bold duration-300 mt-4 md:mt-20 lg:mt-24" data-v-609a92cf> \u0413\u0434\u0435 \u043C\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u043C\u0441\u044F </h1><h2 class="mt-1 text-sm lg:text-lg text-gray-200 duration-300 space-y-0.5" data-v-609a92cf> \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, 3-\u044F \u0443\u043B\u0438\u0446\u0430 \u042F\u043C\u0441\u043A\u043E\u0433\u043E \u041F\u043E\u043B\u044F, \u0434\u043E\u043C 2, \u043A\u043E\u0440\u043F\u0443\u0441 7, \u043F\u043E\u0434\u044A\u0435\u0437\u0434 4 </h2></div><iframe class="z-50 rounded-sm md:rounded-sm w-full h-[350px] md:h-[600px] mb-2 md:mb-0 mt-2 md:mt-4 lg:mt-6" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aafd8686d54c13c498b1a79c66c5a343453e1df041ce335aebf229ee1ed8e9fa2&amp;source=constructor" data-v-609a92cf></iframe></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/directorBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-609a92cf"]]);
const _sfc_main = {
  name: "IndexPage",
  components: {
    evFooter,
    ratingBlock: __nuxt_component_2,
    directorBlock: __nuxt_component_3
  },
  data() {
    return {
      px: 12
    };
  },
  methods: {
    gotoFooter(id) {
      const element = (undefined).querySelector(id);
      const topPosition = element.getBoundingClientRect().top + (undefined).pageYOffset;
      (undefined).scrollTo({
        top: topPosition,
        behavior: "smooth"
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_news_block = __nuxt_component_1;
  const _component_ratingBlock = __nuxt_component_2;
  const _component_directorBlock = __nuxt_component_3;
  const _component_evFooter = resolveComponent("evFooter");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-ee0153fb><div class="scroll-hidden bg-gray-50" data-v-ee0153fb><div class="banner-container" data-v-ee0153fb><div class="z-10 flex flex-col items-center lg:items-start" data-v-ee0153fb><div class="w-full flex flex-col items-center lg:items-center text-gray-50" data-v-ee0153fb><div class="show-title title txt-shadow" data-v-ee0153fb><div data-v-ee0153fb>\u042D\u0432\u0435\u0440\u0435\u0441\u0442 \u041A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433</div></div><div class="show-sub-title subtitle" data-v-ee0153fb><div data-v-ee0153fb>\u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C - \u041E\u043A\u0430\u0437\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0432 \u043E\u0431\u043B\u0430\u0441\u0442\u0438</div><div data-v-ee0153fb>\u043E\u0446\u0435\u043D\u043A\u0438 \u0438 \u043A\u043E\u043D\u0441\u0430\u043B\u0442\u0438\u043D\u0433\u0430 (\u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0433\u043E, \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0447\u0435\u0441\u043A\u043E\u0433\u043E, \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0433\u043E \u0438</div><div data-v-ee0153fb> \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E) \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438, \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u043C\u0438</div><div data-v-ee0153fb> \u043A\u0432\u0430\u043B\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044F\u043C\u0438\u0438 \u0437\u043D\u0430\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F</div><div data-v-ee0153fb>\u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u043A\u0430\u043A \u0432 \u0420\u043E\u0441\u0441\u0438\u0438,</div><div data-v-ee0153fb>\u0442\u0430\u043A \u0438 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u043E\u043C.</div></div><div class="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-3.5 flex justify-center mt-6" data-v-ee0153fb><div class="show-btn1 font-semibold duration-300 hover:cursor-pointer hover:bg-gray-300 hover:backdrop-blur-md border border-gray-600/70 text-gray-900 bg-gray-50 py-1.5 rounded-2xl w-fit" data-v-ee0153fb><div class="flex items-center justify-center" data-v-ee0153fb>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/services",
    class: "pl-5 pr-2 md:text-lg"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \u041A \u0443\u0441\u043B\u0443\u0433\u0430\u043C `);
      } else {
        return [
          createTextVNode(" \u041A \u0443\u0441\u043B\u0443\u0433\u0430\u043C ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i class="select-none text-gray-800 mr-3.5 pi pi-angle-right h-fit" data-v-ee0153fb></i></div></div><div class="show-btn2 font-semibold duration-300 hover:cursor-pointer hover:bg-gray-900 bg-gray-950 text-gray-300 border border-gray-600/55 pr-0.5 py-1.5 rounded-2xl w-fit" data-v-ee0153fb><i class="select-none text-gray-300 ml-4 pi pi-at h-fit" data-v-ee0153fb></i><span class="pr-5 pl-3 md:text-lg" data-v-ee0153fb>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</span></div></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_news_block, null, null, _parent));
  _push(ssrRenderComponent(_component_ratingBlock, { id: "target-rating" }, null, _parent));
  _push(ssrRenderComponent(_component_directorBlock, { id: "target-directors" }, null, _parent));
  _push(ssrRenderComponent(_component_evFooter, { id: "target-footer" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ee0153fb"]]);

export { index as default };
//# sourceMappingURL=index-CU_4t286.mjs.map
