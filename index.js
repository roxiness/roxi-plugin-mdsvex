import { mdsvex } from 'mdsvex'
const extension = ['.md', '.svx']

export default {
  hooks: [
    {
      event: 'start',
      action: (app, params) => app.config.mdsvex = {}, //provide an mdsvex object for the developer to modify
    },
    {
      event: 'before:bundle',
      action: (app, params) => {
        app.merge({
          config: {
            svelte: {
              preprocess: [
                mdsvex({
                  extension: ['md', 'svx'],
                  // extension: params.extension || app.config.mdsvex.extension || extension,
                  ...app.config.mdsvex,
                  ...params
                })
              ],
              extensions: ['.md', '.svx', '.svelte']
              // extensions: params.extension || app.config.mdsvex.extension || extension
            }
          }
        })
      }
    }
  ]
}