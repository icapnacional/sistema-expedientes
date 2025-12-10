/**
 * role-permissions.js
 * Sistema centralizado de acceso por rol.
 * ✅ Solo edita PERMISSIONS.
 */

const PERMISSIONS = {
  // 🔹 Auditoría Nacional
  'btnAuditoriaConsulta': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'consulta.html'
  },
  'btnAuditoriaRegistro': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'registro.html'
  },
  'btnAuditoriaModificar': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'modificar.html'
  },
  'btnAuditoriaHistorial': {
    roles: ['admin'],
    action: () => window.location.href = 'historial-logs.html'
  },
  // 🔹 Pie de Fuerza — ✅ Nuevo
  'btnPieFuerzaFormulario': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'pie-de-fuerza.html'
  }
};

// ▼▼▼ NO EDITAR A PARTIR DE AQUÍ ▼▼▼
function initRolePermissions(userRol) {
  if (!userRol) return console.warn('initRolePermissions: userRol no definido');
  
  Object.entries(PERMISSIONS).forEach(([btnId, config]) => {
    const btn = document.getElementById(btnId);
    if (!btn) return console.warn(`⚠️ Botón "${btnId}" no encontrado`);

    const hasAccess = config.roles.includes(userRol);

    if (hasAccess) {
      // ✅ Acceso permitido
      btn.style.opacity = '1';
      btn.style.cursor = 'pointer';
      btn.onclick = config.action;
      // Limpiar tooltip si existía
      const tooltipEl = btn.querySelector('.tooltip-i');
      if (tooltipEl) tooltipEl.remove();
      btn.removeAttribute('title');
    } else {
      // ❌ Acceso restringido: solo tooltip rojo
      btn.style.opacity = '0.5';
      btn.style.cursor = 'not-allowed';
      btn.onclick = null;
      btn.title = ' ⓘ RRHH autorizado';
      
      // Añadir ⓘ rojo visual (solo si no existe)
      const titleEl = btn.querySelector('.module-title');
      if (titleEl && !titleEl.querySelector('.tooltip-i')) {
        const i = document.createElement('span');
        i.className = 'tooltip-i';
        i.innerHTML = ' <span style="color:#c62828; font-size:14px; cursor:help;" title=" ⓘ RRHH autorizado">ⓘ</span>';
        titleEl.appendChild(i);
      }
    }
  });
}

window.initRolePermissions = initRolePermissions;
// ▲▲▲ FIN — NO EDITAR ▲▲▲
