try {
  require('ts-node').register({ project: './tsconfig.json' });
  require('./src/index');
}
catch (error) {
  console.error(error);
}
