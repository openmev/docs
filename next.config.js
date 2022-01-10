/* eslint-disable */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
}

module.exports = withNextra(config);
