// @ts-check
import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      // This most probably started to happen due to some Vite v6 / v7 discrepancies.
      // Once it's patched properly, the type error should be gone.
      // @ts-expect-error Type 'HotUpdatePluginContext' is missing the following properties from type 'MinimalPluginContext': debug, error, info, meta, warn
      tailwindcss(),
    ],
  },
});
