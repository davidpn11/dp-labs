module.exports = {
  mount: {
    public: '/',
    src: '/dist',
    '../shared': '/@dplabs/shared',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript'],
  packageOptions: {
    external: ['react'],
  },
  alias: {
    '@dplabs/shared': '../shared',
  },
};
