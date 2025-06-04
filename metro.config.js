// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = config;

config.resolver.sourceExts.push("cjs");

// This is the new line you should add in, after the previous lines
config.resolver.unstable_enablePackageExports = false;
