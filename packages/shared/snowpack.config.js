module.exports = {
  mount: {
    src: '/dist',
    '../qik-ui': '/@dplabs/qik-ui',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript'],
  packageOptions: {
    external: ['react'],
  },
  alias: {
    '@dplabs/qik-ui': '../qik-ui',
  },
};
