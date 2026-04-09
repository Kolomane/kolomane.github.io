import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links'; 

export default defineConfig({
  site: 'https://kolomane.github.io',
  markdown: {                                                                                                                    
      rehypePlugins: [                                                    
        [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],                                              
      ],                                                                                                                           
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), sitemap()],
});
