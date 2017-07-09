module.exports = {
  distDir: 'build',
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/foo": { page: "/foo" },
    }
  },
};