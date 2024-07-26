import { defineConfig } from 'astro/config';

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'ramiv2jj',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    apiVersion: "2024-07-26",
    studioBasePath: '/admin' // If you want to access the Studio on a route
  }), react()]
});