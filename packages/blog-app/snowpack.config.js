module.exports = {
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript'],
  packageOptions: {
    external: ['react'],
  },
  alias: {
    '@dplabs/shared': '../shared',
  },
};
