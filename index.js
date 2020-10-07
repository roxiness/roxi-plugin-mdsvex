import { mdsvex } from 'mdsvex'
const extension = ['.md', '.svx', '.svelte']

/** @type {import('roxi')['RoxiPlugin']} */
module.exports.default = {
  name: 'mdsvex',
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
                  ...app.config.mdsvex,
                  ...params
                })
              ],
              extensions: params.extension
                || app.config.svelte.extensions
                || app.config.mdsvex.extension
                || extension
            }
          }
        })
      }
    }
  ]
}