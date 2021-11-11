export default {
  mount: {
    public: '/',
    src: '/dist',
    '../labs-ui': '/@dplabs/labs-ui',
  },
  plugins: ['@snowpack/plugin-typescript', '@snowpack/plugin-react-refresh'],
  alias: {
    '@dplabs/labs-ui': '../labs-ui',
  },
};
