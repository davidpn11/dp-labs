export default {
  mount: {
    public: '/',
    src: '/dist',
    '../shared': '/@dplabs/shared',
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-react-refresh',
    'snowpack-plugin-svgr',
  ],
  alias: {
    '@dplabs/shared': '../shared',
  },
};
