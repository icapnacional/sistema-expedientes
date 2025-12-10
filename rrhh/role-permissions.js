/**
 * role-permissions.js
 * Sistema centralizado de control de acceso por rol.
 * ✅ Solo edita PERMISSIONS. El resto no se toca.
 */
const PERMISSIONS = {
  // 🔹 Auditoría Nacional
  'btnAuditoriaConsulta': {
    roles: ['admin', 'moderador', 'consultor', '1'],
    action: () => window.location.href = 'consulta.html'
  },
  'btnAuditoriaRegistro': {
    roles: ['admin', 'moderador', '1'],
    action: () => window.location.href = 'registro.html',
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnAuditoriaModificar': {
    roles: ['admin', 'moderador', '1'],
    action: () => window.location.href = 'modificar.html',
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnAuditoriaHistorial': {
    roles: ['admin', '1'],
    action: () => window.location.href = 'historial-logs.html',
    tooltip: '🔒 Solo Administrador'
  },
  
  // 🔹 Pie de Fuerza (✅ agregado)
  'btnPieFuerzaListado': {
    roles: ['admin', '1'],
    action: () => window.location.href = 'pie-de-fuerza.html'
  },
  'btnPieFuerzaAsignaciones': {
    roles: ['admin', '1'],
    action: () => alert('📌 Módulo en desarrollo: Asignaciones'),
    tooltip: '🔒 Solo RRHH autorizado'
  },
  'btnPieFuerzaMovimientos': {
    roles: ['admin', '1'],
    action: () => alert('🔄 Módulo en desarrollo: Movimientos'),
    tooltip: '🔒 Solo RRHH autorizado'
  }
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
