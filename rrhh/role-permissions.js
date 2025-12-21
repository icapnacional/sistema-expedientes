const PERMISSIONS = {
  // 🔹 Auditoría Nacional — ✅ Rutas corregidas
  'btnAuditoriaConsulta': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'auditoria-nacional/consulta.html'
  },
  'btnAuditoriaRegistro': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'auditoria-nacional/registro.html',
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnAuditoriaModificar': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'auditoria-nacional/modificar.html',
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnAuditoriaHistorial': {
    roles: ['admin'],
    action: () => window.location.href = 'auditoria-nacional/historial-logs.html',
    tooltip: '🔒 Solo Administrador'
  },
  // 🔹 Pie de Fuerza
  'btnPieFuerzaListado': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'pie-de-fuerza/index.html',
    tooltip: '📋 Formulario integral de Pie de Fuerza'
  },
  'btnPieFuerzaAsignaciones': {
    roles: ['admin', 'moderador'],
    action: () => alert('⚠️ Módulo en desarrollo'),
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnPieFuerzaMovimientos': {
    roles: ['admin'],
    action: () => alert('⚠️ Módulo en desarrollo'),
    tooltip: '🔒 Solo Administrador'
  },
  // 🔹 RRHH ICAP
  'btnRhObjetivos': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'rrhh-icap/objetivos.html',
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnRhDesempeno': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'rrhh-icap/desempeno.html',
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnRhCapacitacion': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'rrhh-icap/capacitacion.html',
    tooltip: '🔒 Solo RRHH autorizado'
  },
  // 🔹 Resto: módulos en desarrollo (puedes ajustar rutas luego)
  'btnOrdenNueva': {
    roles: ['admin', 'moderador'],
    action: () => alert('Módulo en desarrollo'),
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnOrdenSeguimiento': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => alert('Módulo en desarrollo')
  },
  'btnReposoSolicitud': {
    roles: ['admin', 'moderador'],
    action: () => alert('Módulo en desarrollo'),
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnReposoAprobadas': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => alert('Módulo en desarrollo')
  },
  'btnVacacionesPlan': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnVacacionesSolicitudes': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnCambioNueva': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnCambioHistorial': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnDocFormularios': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnDocManuales': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') }
};
