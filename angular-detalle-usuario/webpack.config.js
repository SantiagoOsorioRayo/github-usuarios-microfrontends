const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angular_detalle_usuario',

  exposes: {
    './DetalleUsuario': './src/app/detalle-usuario/detalle/detalle.ts',
  },

  shared: {
    '@angular/core': { singleton: true, strictVersion: false },
    '@angular/common': { singleton: true, strictVersion: false },
    '@angular/router': { singleton: true, strictVersion: false },
    'rxjs': { singleton: true, strictVersion: false }
  }
});