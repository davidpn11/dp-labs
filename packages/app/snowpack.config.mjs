export default {
  mount: {
    public: '/',
    src: '/dist',
    '../shared': '/@dplabs/shared',
  },
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh',
    'snowpack-plugin-svgr',
  ],
  alias: {
    '@dplabs/shared': '../shared',
  },
};
