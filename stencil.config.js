exports.config = {
  namespace: 'stIndexeddb',
  generateDistribution: true,
  bundles: [
    { components: ['st-indexeddb'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
