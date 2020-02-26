// Copyright (c) 2020 shitaro2016
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// References:
// webpack
// https://webpack.js.org/configuration/resolve/#resolvealias
// typescript
// https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping

const path = require("path");

module.exports = pluginOptions => (nextConfig = {}) => {
    const baseDir = pluginOptions.baseDir;
    const aliases = pluginOptions.aliases;

    return Object.assign({}, nextConfig, {
        webpack(config, options) {
            aliases.forEach(item => {
                config.resolve.alias[item.alias] = path.join(baseDir, item.path);
            });

            if (typeof nextConfig.webpack === "function") {
                return nextConfig.webpack(config, options);
            }

            return config;
        },
    })
}