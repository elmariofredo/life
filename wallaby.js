module.exports = function () {
  return {
    files: [
      'app/*.js'
    ],

    tests: [
      'app/*.spec.js'
    ],

    env: {
      type: 'node'
    }
  };
};
