const PERMISSIONS = {
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
  'btnPieFuerzaListado': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'pie-de-fuerza/index.html',
    tooltip: '📋 Formulario integral de Pie de Fuerza'
  },
  'btnPieFuerzaAsignaciones': {
    roles: ['admin', 'moderador'],
    action: () => alert('Módulo en desarrollo'),
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnPieFuerzaMovimientos': {
    roles: ['admin'],
    action: () => alert('Módulo en desarrollo'),
    tooltip: '🔒 Solo Administrador'
  },
  'btnRhObjetivos': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnRhDesempeno': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnRhCapacitacion': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnOrdenNueva': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnOrdenSeguimiento': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnReposoSolicitud': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnReposoAprobadas': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnVacacionesPlan': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnVacacionesSolicitudes': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnCambioNueva': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnCambioHistorial': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnDocFormularios': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnDocManuales': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') }
};

function initRolePermissions(userRol) {
  if (!userRol) return;
  Object.entries(PERMISSIONS).forEach(([btnId, config]) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const hasAccess = config.roles.includes(userRol);
    if (hasAccess && typeof config.action === 'function') {
      btn.style.opacity = '1';
      btn.style.cursor = 'pointer';
      btn.removeAttribute('disabled');
      btn.onclick = config.action;
      btn.removeAttribute('title');
    } else {
      btn.style.opacity = '0.5';
      btn.style.cursor = 'not-allowed';
      btn.setAttribute('disabled', 'true');
      btn.title = config.tooltip || '🔒 Acceso restringido';
      btn.onclick = null;
    }
  });
}

window.initRolePermissions = initRolePermissions;
