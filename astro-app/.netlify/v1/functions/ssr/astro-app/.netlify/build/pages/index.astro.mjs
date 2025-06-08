import { u as urlFor, a as getPosts, $ as $$Layout } from '../chunks/sanity_DWELWDkH.mjs';
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderComponent } from '../chunks/astro/server_He6uf5Fb.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { Facebook, Linkedin, Github, Instagram } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-light rounded-lg shadow-lg overflow-hidden"> ${post.mainImage ? renderTemplate`<img class="w-full h-48 object-cover"${addAttribute(urlFor(post.mainImage).width(600).height(300).url(), "src")}${addAttribute(post.mainImage.alt || "Project image", "alt")}>` : renderTemplate`<div class="w-full h-48 bg-gray-200"></div>`} <div class="p-6 text-center"> <h3 class="text-xl font-bold mb-2 text-dark"> <a${addAttribute(`/post/${post.slug.current}`, "href")} class="hover:underline"> ${post.title} </a> </h3> <p class="text-sm text-muted mb-6">${post.excerpt}</p> <a${addAttribute(`/post/${post.slug.current}`, "href")} class="inline-block bg-secondary text-white px-6 py-2 rounded font-medium hover:bg-primary transition">
READ MORE
</a> </div> </div>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/components/Card.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#EAE7DC] pt-8 pb-20 px-6"> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-10"> <div class="text-center md:text-left"> <img src="/odde-jobb.jpg" alt="Developer at work" class="rounded-xl w-full max-w-md mx-auto shadow-lg"> </div> <div> <h1 class="text-3xl md:text-4xl font-headline text-dark mb-4">
Hi, I'm a creative front-end developer based in Namsos.
</h1> <p class="text-lg text-muted mb-6">
I build, design, and deploy digital solutions — blending code, creativity, and two years of hands-on learning at Noroff.
</p> <div class="flex gap-4"> <a href="#socials" class="inline-block bg-secondary text-light uppercase px-6 py-3 rounded font-medium hover:bg-primary transition">
Let's connect
</a> <a href="#portfolio" class="inline-block bg-primary text-light uppercase px-6 py-3 rounded font-medium hover:bg-secondary transition">
See my work
</a> </div> </div> </div> </div> </section>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/components/Hero.astro", void 0);

const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-2 px-6 md:px-20"> <div class="max-w-6xl mx-auto"> <h2 class="text-5xl font-headline text-dark mb-8 md:text-center">Welcome to My Portfolio</h2> <p class="text-lg text-muted mx-auto md:text-center">Hi! I am a front-end developer and graphic designer based in Namsos, currently working at Namdalsavisa. Over the past two years, Ive been studying front-end development at Noroff, where I have honed both my creative and technical skills.</p> <p class="text-lg text-muted mx-auto md:text-center mt-4">I specialize in building engaging, responsive user experiences using technologies like <span class="text-primary font-black uppercase">React, HTML, CSS, and JavaScript</span>, along with tools like <span class="text-primary font-black uppercase">Figma, Vev, Adobe Creative Suite, GitHub</span>, and <span class="text-primary font-black uppercase">CI/CD workflows</span>.</p> <p class="text-lg text-muted mx-auto md:text-center mt-4"> Whether I am designing clean layouts or developing modern web interfaces, I am passionate about turning ideas into functional, beautiful digital experiences.</p> </div> </section>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/components/Welcome.astro", void 0);

const SocialIcons = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-8 flex-wrap", children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://www.facebook.com/oddedodd/",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex flex-col items-center p-4 font-light rounded-full bg-secondary hover:bg-primary text-light transition-colors duration-300",
        children: /* @__PURE__ */ jsx(Facebook, { className: "w-8 h-8" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://www.linkedin.com/in/oddegilhselnes/",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex flex-col items-center p-4 font-light rounded-full bg-secondary hover:bg-primary text-light transition-colors duration-300",
        children: /* @__PURE__ */ jsx(Linkedin, { className: "w-8 h-8" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://github.com/oddedodd",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex flex-col items-center p-4 font-light rounded-full bg-secondary hover:bg-primary text-light transition-colors duration-300",
        children: /* @__PURE__ */ jsx(Github, { className: "w-8 h-8" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://www.instagram.com/oddedodd/",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex flex-col items-center p-4 font-light rounded-full bg-secondary hover:bg-primary text-light transition-colors duration-300",
        children: /* @__PURE__ */ jsx(Instagram, { className: "w-8 h-8" })
      }
    )
  ] });
};

const $$Social = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="px-6 mt-10" id="socials"> <div class="max-w-6xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-headline text-dark mb-8 font-medium">My Socials:</h2> ${renderComponent($$result, "SocialIcons", SocialIcons, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/components/SocialIcons.tsx", "client:component-export": "default" })} </div> </section>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/components/Social.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getPosts();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to my Portfolio" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Welcome", $$Welcome, {})} ${renderComponent($$result2, "Social", $$Social, {})} ${maybeRenderHead()}<section class="py-16 px-6" id="portfolio"> <div class="max-w-6xl mx-auto"> <h2 class="font-headline text-4xl text-center font-bold text-dark mb-10">My Work</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${posts.length ? posts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "post": post })}`) : renderTemplate`<p class="text-lg text-muted">No posts to show, try later...</p>`} </div> </div> </section> `, "hero": async ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, { "slot": "hero" })}` })}`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/pages/index.astro", void 0);

const $$file = "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
