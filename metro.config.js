const { getDefaultConfig } = require("expo/metro-config");
const projectRoot = __dirname;
const config = getDefaultConfig(projectRoot);

// Block ../codelab-1 and ../codelab-2 from being scanned
config.resolver.blockList = [
  /.*\/codelab-1\/.*/,
  /.*\/codelab-2\/.*/,
];

module.exports = config;
