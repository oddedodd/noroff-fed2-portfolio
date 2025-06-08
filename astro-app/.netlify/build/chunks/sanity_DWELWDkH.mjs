import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, o as renderHead, l as renderComponent, k as renderSlot } from './astro/server_He6uf5Fb.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';
import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';
import groq from 'groq';

const sanityClient = createClient(
            {"apiVersion":"2024-12-08","projectId":"wypra2xy","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="text-center py-2"> <a href="/"> <img src="/logopng.png" alt="Front-End Portfolio Logo" class="h-64 mx-auto"> </a> </header>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-background h-screen"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["hero"])} <main class="max-w-6xl mx-auto"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="footer"></footer> </body></html>`;
}, "/Users/odde/Documents/Coding/NOROFF/noroff-fed2-portfolio/astro-app/src/layouts/Layout.astro", void 0);

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

async function getPosts() {
  return await sanityClient.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}
async function getPost(slug) {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug
    }
  );
}

export { $$Layout as $, getPosts as a, getPost as g, urlFor as u };
