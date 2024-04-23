globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { e as evFooter } from './ev-footer-xy6hj6rx.mjs';
import { resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
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

const companies = [
  {
    id: 1,
    img: "inter-rao",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430", cssClasses: "bg-red-700" },
      { id: 2, title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432", cssClasses: "bg-cyan-700" }
    ]
  },
  {
    id: 2,
    img: "rosatom",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0431\u0438\u0437\u043D\u0435\u0441\u0430", cssClasses: "bg-red-700" },
      { id: 2, title: "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0430\u043A\u0442\u0438\u0432\u043E\u0432", cssClasses: "bg-cyan-700" }
    ]
  },
  {
    id: 3,
    img: "moskowkiy-bank",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 4,
    img: "rosekim-bank",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 5,
    img: "rosselhoz-bank",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 6,
    img: "afk-systema",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 7,
    img: "web-rf",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 8,
    img: "sber",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 9,
    img: "mkb",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 10,
    img: "novikom-bank",
    services: [
      { id: 1, title: "\u041E\u0446\u0435\u043D\u043A\u0430", cssClasses: "bg-blue-700" }
    ]
  },
  {
    id: 11,
    img: "pcb",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0424\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E-\u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u0434\u0437\u043E\u0440", cssClasses: "bg-fuchsia-700" }
    ]
  },
  {
    id: 12,
    img: "otkritie-bank",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 13,
    img: "cb-rf",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 14,
    img: "almaz-antay",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 15,
    img: "turizm-rf",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 16,
    img: "frp",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  },
  {
    id: 17,
    img: "rosteh",
    services: [
      { id: 1, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442", cssClasses: "bg-violet-700" },
      { id: 2, title: "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-emerald-700" },
      { id: 3, title: "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430", cssClasses: "bg-gray-700" }
    ]
  }
];
const _sfc_main = {
  name: "experience",
  head() {
    return {
      title: "\u041E\u043F\u044B\u0442 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B",
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
          content: "https://evcons.ru/experience"
        }
      ]
    };
  },
  data: () => ({
    companies,
    selectedGroups: {
      // "Строительный аудит": null,
      // "Строительная экспертиза": null,
    }
  }),
  components: {
    evFooter,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  methods: {
    isSelected(name) {
      return this.selectedGroups.hasOwnProperty(name) || false;
    },
    unselect(name) {
      let obj = {};
      Object.keys(this.selectedGroups).forEach((key) => {
        if (name === key)
          return;
        obj[key] = null;
      });
      this.selectedGroups = obj;
    },
    chipCLick(name) {
      let status = this.isSelected(name);
      console.log("status:", status);
      console.log("arr size:", Object.keys(this.selectedGroups).length);
      if (!status) {
        this.selectedGroups[name] = null;
      } else {
        this.unselect(name);
      }
    },
    getGroups() {
      let groups = {};
      this.companies.forEach((company) => {
        company.services.forEach((group) => {
          groups[group.title] = group;
        });
      });
      return Object.keys(groups).map((groupTitle, i) => ({ name: groupTitle, id: i + 1 }));
    },
    getCompaniesLogo() {
      const logotypeImageNames = [];
      this.companies.forEach((company) => {
        let isExclude = company.services.find((group) => {
          return this.selectedGroups.hasOwnProperty(group.title);
        });
        if (isExclude)
          return;
        logotypeImageNames.push(company.img);
      });
      return logotypeImageNames.map((e, i) => ({ id: i + 1, img: e }));
    }
    // getImageURL: (name) => new URL(`../../assets/experience_logotypes/${name}.png`, globalThis._importMeta_.url).href
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_carousel = resolveComponent("carousel");
  const _component_slide = resolveComponent("slide");
  const _component_Navigation = resolveComponent("Navigation");
  const _component_evFooter = resolveComponent("evFooter");
  const _directive_motion_fade = resolveDirective("motion-fade");
  const _directive_motion = resolveDirective("motion");
  const _directive_motion_slide_bottom = resolveDirective("motion-slide-bottom");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-cf09b941><div class="customers-container" data-v-cf09b941><div class="customers-sub-container" data-v-cf09b941><div${ssrRenderAttrs(mergeProps({
    class: "customer-title",
    delay: 400
  }, ssrGetDirectiveProps(_ctx, _directive_motion_fade)))} data-v-cf09b941> \u041E\u043F\u044B\u0442 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B </div><div${ssrRenderAttrs(mergeProps({
    class: "chips",
    delay: 400
  }, ssrGetDirectiveProps(_ctx, _directive_motion_fade)))} data-v-cf09b941><!--[-->`);
  ssrRenderList($options.getGroups(), (group) => {
    _push(`<div class="${ssrRenderClass([{ "chip": !$options.isSelected(group.name), "chip-active": $options.isSelected(group.name) }, "duration-100"])}" data-v-cf09b941>${ssrInterpolate(group.name)} <i class="ml-1.5 text-xs pi pi-filter" data-v-cf09b941></i></div>`);
  });
  _push(`<!--]--></div><div${ssrRenderAttrs(mergeProps({
    class: "logotype-images-wrapper duration-100",
    delay: 800
  }, ssrGetDirectiveProps(_ctx, _directive_motion_slide_bottom)))} data-v-cf09b941><!--[-->`);
  ssrRenderList($options.getCompaniesLogo(), (companyLogo) => {
    _push(`<img${ssrRenderAttrs(mergeProps({
      key: companyLogo.id,
      src: `/assets/experience_logotypes/${companyLogo.img}.png`,
      class: "logo",
      alt: "err",
      initial: { opacity: 0, y: 100 },
      enter: { opacity: 1, y: 0, scale: 1 },
      variants: { custom: { scale: 2 } },
      hovered: { scale: 1.2 }
    }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-cf09b941>`);
  });
  _push(`<!--]--></div></div>`);
  _push(ssrRenderComponent(_component_carousel, {
    "items-to-show": 3,
    class: "slider hidden sm:block md:hidden min-h-[128px]",
    transition: "400",
    autoplay: "4000",
    wrapAround: "",
    mouseDrag: "",
    pauseAutoplayOnHover: ""
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Navigation, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Navigation)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($options.getCompaniesLogo(), (companyLogo) => {
          _push2(ssrRenderComponent(_component_slide, {
            key: companyLogo.id
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img class="slide-img"${ssrRenderAttr("src", `/assets/experience_logotypes/${companyLogo.img}.png`)} alt="err" data-v-cf09b941${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "slide-img",
                    src: `/assets/experience_logotypes/${companyLogo.img}.png`,
                    alt: "err"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($options.getCompaniesLogo(), (companyLogo) => {
            return openBlock(), createBlock(_component_slide, {
              key: companyLogo.id
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  class: "slide-img",
                  src: `/assets/experience_logotypes/${companyLogo.img}.png`,
                  alt: "err"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_carousel, {
    "items-to-show": 1,
    class: "slider sm:hidden min-h-[128px]",
    transition: "400",
    autoplay: "4000",
    wrapAround: "",
    mouseDrag: "",
    pauseAutoplayOnHover: ""
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Navigation, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Navigation)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($options.getCompaniesLogo(), (companyLogo) => {
          _push2(ssrRenderComponent(_component_slide, {
            key: companyLogo.id,
            class: "slide"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<img class="slide-img"${ssrRenderAttr("src", `/assets/experience_logotypes/${companyLogo.img}.png`)} alt="err" data-v-cf09b941${_scopeId2}>`);
              } else {
                return [
                  createVNode("img", {
                    class: "slide-img",
                    src: `/assets/experience_logotypes/${companyLogo.img}.png`,
                    alt: "err"
                  }, null, 8, ["src"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($options.getCompaniesLogo(), (companyLogo) => {
            return openBlock(), createBlock(_component_slide, {
              key: companyLogo.id,
              class: "slide"
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  class: "slide-img",
                  src: `/assets/experience_logotypes/${companyLogo.img}.png`,
                  alt: "err"
                }, null, 8, ["src"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_evFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const experience = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-cf09b941"]]);

export { experience as default };
//# sourceMappingURL=experience-T7gN8R_r.mjs.map
