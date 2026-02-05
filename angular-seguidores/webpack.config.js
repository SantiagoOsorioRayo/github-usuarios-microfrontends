const { withModuleFederationPlugin } =
  require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angular_seguidores',

  library: {
    type: 'var',
    name: 'angular_seguidores',
  },

  exposes: {
    './Seguidores': './src/app/seguidores/seguidores.ts',
  },

  shared: {
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    rxjs: { singleton: true, strictVersion: true, requiredVersion: 'auto' },
  },
});