/* eslint-disable @typescript-eslint/no-var-requires */
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { TDesignResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [
          TDesignResolver({
            library: "vue-next",
          }),
        ],
      }),
      Components({
        resolvers: [
          TDesignResolver({
            library: "vue-next",
          }),
        ],
      }),
    ],
  },
};
