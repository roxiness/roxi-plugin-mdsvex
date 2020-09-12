import { mdsvex } from 'mdsvex'
const extension = ['.md', '.svx']

export default {
  hooks: [
    {
      condition: 'start',
      action: (ctx, params) => ({ config: { mdsvex: {} } }), //provide an mdsvex object for the developer to modify
    },
    {
      condition: 'afterUserConfig',
      action: (ctx, params) => ({
        config: {
          svelte: {
            preprocess: [
              mdsvex({
                extension: ['md', 'svx'],
                // extension: params.extension || ctx.config.mdsvex.extension || extension,
                ...ctx.config.mdsvex,
                ...params
              })
            ],
            extensions: ['.md', '.svx', '.svelte']
            // extensions: params.extension || ctx.config.mdsvex.extension || extension
          }
        }
      })
    }
  ]
}