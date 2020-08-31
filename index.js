import { mdsvex } from 'mdsvex'

export const wrappers = {
  svelte: (svelte, ctx) => {
    svelte.preprocess = [
      ...svelte.preprocess,
      mdsvex({ extension: '.md', ...ctx.options })
    ]
    svelte.extensions = [].concat(
      '.svelte',
      '.md',
      ctx.options.extensions,
      svelte.extensions
    )
    return svelte
  },
  rollup: config => ({ ...config }),
  routify: config => ({ ...config })
}
