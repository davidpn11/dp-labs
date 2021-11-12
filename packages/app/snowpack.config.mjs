export default {
  mount: {
    public: '/',
    src: '/dist',
    '../shared': '/@dplabs/shared',
    '../blog-app': '/@dplabs/blog-app',
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
    '@dplabs/blog-app': '../blog-app',
  },
};
