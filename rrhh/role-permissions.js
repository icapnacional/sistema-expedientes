/**
 * role-permissions.js
 * Sistema centralizado de control de acceso por rol.
 * ✅ Solo edita PERMISSIONS. El resto no se toca.
 */
const PERMISSIONS = {
  // 🔹 Auditoría Nacional
  'btnAuditoriaConsulta': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'consulta.html'
  },
  'btnAuditoriaRegistro': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'registro.html',
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnAuditoriaModificar': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'modificar.html',
    tooltip: '🔒 Solo RRHH autorizado'
  },
 'btnAuditoriaHistorial': {
  roles: ['admin'],
  action: () => window.location.href = 'rrhh/historial-logs.html'  // ← si está en /rrhh/
  // o
  // action: () => window.location.href = 'auditoria-nacional/historial-logs.html'  // ← si prefieres modularidad
}

 // 🔹 Pie de Fuerza — ✅ AQUÍ VA LA CORRECCIÓN PRINCIPAL
  'btnPieFuerzaListado': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'pie-de-fuerza.html',
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
    action: () => alert('Módulo en desarrollo'),
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnRhDesempeno': {
    roles: ['admin', 'moderador'],
    action: () => alert('Módulo en desarrollo'),
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnRhCapacitacion': {
    roles: ['admin', 'moderador'],
    action: () => alert('Módulo en desarrollo'),
    tooltip: '🔒 Solo RRHH autorizado'
  },

  // 🔹 Orden de Servicio
  'btnOrdenNueva': {
    roles: ['admin', 'moderador'],
    action: () => alert('Módulo en desarrollo'),
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnOrdenSeguimiento': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => alert('Módulo en desarrollo')
  },

  // 🔹 Reposo
  'btnReposoSolicitud': {
    roles: ['admin', 'moderador'],
    action: () => alert('Módulo en desarrollo'),
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnReposoAprobadas': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => alert('Módulo en desarrollo')
  },

  // 🔹 Vacaciones, Cambio de Servicios, Documentos → todos visibles para admin/moderador/consultor (solo lectura si aplica)
  'btnVacacionesPlan': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnVacacionesSolicitudes': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnCambioNueva': { roles: ['admin', 'moderador'], action: () => alert('Módulo en desarrollo'), tooltip: '🔒 Solo RRHH autorizado' },
  'btnCambioHistorial': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnDocFormularios': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') },
  'btnDocManuales': { roles: ['admin', 'moderador', 'consultor'], action: () => alert('Módulo en desarrollo') }
};

// ▼▼▼ NO EDITAR A PARTIR DE AQUÍ ▼▼▼
function initRolePermissions(userRol) {
  if (!userRol) {
    console.warn('initRolePermissions llamado sin userRol');
    return;
  }
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
      btn.onclick = () => alert(btn.title);
    }
  });
}
window.initRolePermissions = initRolePermissions;
// ▲▲▲ FIN — NO EDITAR ▲▲▲
