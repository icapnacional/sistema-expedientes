/**
 * role-permissions.js — CORREGIDO Y FUNCIONAL
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
    action: () => window.location.href = 'historial-logs.html',
    tooltip: '🔒 Solo Administrador'
  },
  // ✅ Formulario de Pie de Fuerza — accesible para los 3 roles
  'btnPieFuerzaFormulario': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'pie-de-fuerza.html'
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
