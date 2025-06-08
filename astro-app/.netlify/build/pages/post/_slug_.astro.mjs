import { g as getPost, $ as $$Layout, a as getPosts, u as urlFor } from '../../chunks/sanity_DWELWDkH.mjs';
import { e as createComponent, f as createAstro, m as maybeRenderHead, s as spreadAttributes, k as renderSlot, r as renderTemplate, l as renderComponent, h as addAttribute, n as Fragment } from '../../chunks/astro/server_He6uf5Fb.mjs';
import 'kleur/colors';
import { LIST_NEST_MODE_HTML, isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, buildMarksTree, nestLists } from '@portabletext/toolkit';
import 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { Monitor, Github } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function useContext(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$6 = createAstro();
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = useContext(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$5 = createAstro();
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$4 = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$3 = createAstro();
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = useContext(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$2 = createAstro();
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$1 = createAstro();
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableText;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const serializeNode = (isInline) => (node, index = 0) => asComponentProps(node, index, isInline);
  const serializeChildren = (node, isInline) => node.children.map(serializeNode(isInline));
  const serializeMarksTree = (node) => buildMarksTree(node).map(serializeNode(true));
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type) => {
    const component = components[nodeType];
    return isComponent(component) ? component : component[type] ?? missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
  };
  const prepareForRender = (props) => {
    const { node } = props;
    return isPortableTextToolkitList(node) ? [
      provideComponent("list", node.listItem) ?? components.unknownList,
      serializeChildren(node, false)
    ] : isPortableTextListItemBlock(node) ? [
      provideComponent("listItem", node.listItem) ?? components.unknownListItem,
      serializeMarksTree(node).map((children) => {
        if (node.style !== "normal") {
          const { listItem, ...blockNode } = node;
          children = serializeNode(false)(blockNode, 0);
        }
        return children;
      })
    ] : isPortableTextToolkitSpan(node) ? [
      provideComponent("mark", node.markType) ?? components.unknownMark,
      serializeChildren(node, true)
    ] : isPortableTextBlock(node) ? [
      provideComponent(
        "block",
        node.style ?? (node.style = "normal")
        /* Make sure style has been set */
      ) ?? components.unknownBlock,
      serializeMarksTree(node)
    ] : isPortableTextToolkitTextNode(node) ? [
      "\n" === node.text && isComponent(components.hardBreak) ? components.hardBreak : node.text,
      []
    ] : [
      provideComponent("type", node._type) ?? components.unknownType,
      []
    ];
  };
  globalThis[key] = (node) => {
    return {
      getDefaultComponent: provideDefaultComponent.bind(null, node),
      getUnknownComponent: provideUnknownComponent.bind(null, node)
    };
  };
  const provideDefaultComponent = (node) => {
    return isPortableTextToolkitList(node) ? $$List : isPortableTextListItemBlock(node) ? $$ListItem : isPortableTextToolkitSpan(node) ? $$Mark : isPortableTextBlock(node) ? $$Block : isPortableTextToolkitTextNode(node) ? $$HardBreak : $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    return isPortableTextToolkitList(node) ? components.unknownList : isPortableTextListItemBlock(node) ? components.unknownListItem : isPortableTextToolkitSpan(node) ? components.unknownMark : isPortableTextBlock(node) ? components.unknownBlock : !isPortableTextToolkitTextNode(node) ? components.unknownType : (() => {
      throw new Error(
        `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
      );
    })();
  };
  const blocks = Array.isArray(value) ? value : [value];
  function* renderBlocks() {
    let index = 0;
    for (const it of nestLists(blocks, listNestingMode)) {
      yield asComponentProps(it, index++, false);
    }
  }
  return renderTemplate`${[...renderBlocks()].map(function render(props) {
    const [Cmp, children] = prepareForRender(props);
    return !isComponent(Cmp) ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${Cmp}` })}` : renderTemplate`${renderComponent($$result, "Cmp", Cmp, { ...props }, { "default": ($$result2) => renderTemplate`${children.map(render)}` })}`;
  })}`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const portableTextComponents = {
  block: {
    h1: ({ children }) => /* @__PURE__ */ jsx("h1", { className: "text-4xl font-headline font-bold mt-8 mb-4 text-dark", children }),
    h2: ({ children }) => /* @__PURE__ */ jsx("h2", { className: "text-3xl font-headline font-semibold mt-6 mb-3 text-dark", children }),
    h3: ({ children }) => /* @__PURE__ */ jsx("h3", { className: "text-2xl font-headline font-medium mt-4 mb-2 text-dark", children }),
    normal: ({ children }) => /* @__PURE__ */ jsx("p", { className: "text-base text-muted mb-4 font-light font-body", children })
  },
  list: {
    bullet: ({ children }) => /* @__PURE__ */ jsx("ul", { className: "list-disc ml-6 mb-4", children }),
    number: ({ children }) => /* @__PURE__ */ jsx("ol", { className: "list-decimal ml-6 mb-4", children })
  },
  listItem: {
    bullet: ({ children }) => /* @__PURE__ */ jsx("li", { className: "mb-2", children })
  },
  marks: {
    strong: ({ children }) => /* @__PURE__ */ jsx("strong", { className: "font-semibold text-dark", children }),
    em: ({ children }) => /* @__PURE__ */ jsx("em", { className: "italic", children }),
    link: ({ value, children }) => /* @__PURE__ */ jsx("a", { href: value?.href, className: "text-secondary underline hover:text-primary", target: "_blank", rel: "noopener noreferrer", children })
  }
};

const ProjectLinks = ({ liveUrl, githubUrl }) => {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-6 mb-8", children: [
    liveUrl && /* @__PURE__ */ jsxs(
      "a",
      {
        href: liveUrl,
        className: "flex items-center gap-2 text-sm text-dark hover:underline",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ jsx(Monitor, { className: "w-4 h-4" }),
          " Go to website"
        ]
      }
    ),
    githubUrl && /* @__PURE__ */ jsxs(
      "a",
      {
        href: githubUrl,
        className: "flex items-center gap-2 text-sm text-dark hover:underline",
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          /* @__PURE__ */ jsx(Github, { className: "w-4 h-4" }),
          " View on github"
        ]
      }
    )
  ] });
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getPosts();
  return posts.map((post) => ({
    params: { slug: post.slug.current }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getPost(slug);
  console.log(post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-background pt-2 pb-24 px-6"> <div class="max-w-4xl mx-auto bg-light p-6 md:p-10 rounded-lg"> ${post.mainImage && renderTemplate`<img class="w-full rounded mb-10"${addAttribute(urlFor(post.mainImage).url(), "src")}${addAttribute(post.mainImage.alt || "Project image", "alt")}>`} <h1 class="text-3xl md:text-4xl font-black font-headline text-center text-dark mb-4"> ${post.title} </h1> <p class="text-center text-muted mb-4 font-light font-body"> ${post.excerpt} </p> ${renderComponent($$result2, "ProjectLinks", ProjectLinks, { "liveUrl": post.liveUrl, "githubUrl": post.githubUrl, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/components/ProjectLinks.tsx", "client:component-export": "default" })} <div class="prose prose-neutral max-w-none"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": post.body, "components": portableTextComponents })} </div> <div class="text-center mt-10"> <a href="/" class="inline-block bg-secondary text-light uppercase px-6 py-3 rounded-lg hover:bg-primary transition">
Back to homepage
</a> </div> </div> </section> ` })}`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/pages/post/[slug].astro", void 0);

const $$file = "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
