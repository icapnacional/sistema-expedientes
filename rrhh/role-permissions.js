// role-permissions.js
// ✅ Sistema centralizado de control de acceso por rol y módulo
// ✅ Extensible: añade nuevas pestañas/módulos sin tocar el index

/**
 * Definición de permisos por rol y módulo
 * Formato:
 *   [moduloId]: { roles: ['rol1', 'rol2', ...], action: () => redirección o función }
 */
const PERMISSIONS = {
  // 🔹 Auditoría de Personal
  'btnConsulta': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'auditoria-personal-consulta.html'
  },
  'btnRegistro': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'registro-personal.html',
    tooltip: '🔒 Solo RRHH autorizado puede registrar'
  },
  'btnModificar': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'modificar-personal.html',
    tooltip: '🔒 Solo RRHH autorizado puede modificar'
  },
  'btnHistorial': {
    roles: ['admin'],
    action: () => window.location.href = 'historial-personal.html',
    tooltip: '🔒 Solo el Administrador puede ver el historial'
  },

  // 🔹 Ejemplo de cómo añadir más después (descomentar/editar):
  /*
  'btnOrdenNueva': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'orden-servicio-nueva.html'
  },
  'btnVacacionesCalendario': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'vacaciones-calendario.html'
  }
  */
};

/**
 * Inicializa los permisos para el rol actual
 * @param {string} userRole - 'admin', 'moderador', o 'consultor'
 */
function initRolePermissions(userRole) {
  // Recorre cada módulo definido
  Object.entries(PERMISSIONS).forEach(([moduleId, config]) => {
    const element = document.getElementById(moduleId);
    if (!element) return;

    const hasAccess = config.roles.includes(userRole);

    if (hasAccess) {
      // ✅ Acceso permitido: habilitar y asignar acción
      element.removeAttribute('disabled');
      element.style.opacity = '1';
      element.style.cursor = 'pointer';
      element.onclick = config.action;
      element.removeAttribute('title'); // limpia tooltip anterior
    } else {
      // ❌ Acceso restringido: deshabilitar + tooltip
      element.setAttribute('disabled', 'true');
      element.style.opacity = '0.5';
      element.style.cursor = 'not-allowed';
      element.onclick = () => alert(config.tooltip || '🔒 Acceso restringido');
      if (config.tooltip) {
        element.title = config.tooltip;
      }
    }
  });
}

// ✅ Exponer globalmente (requerido por onclick inline y otros scripts)
window.initRolePermissions = initRolePermissions;
