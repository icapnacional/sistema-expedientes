/**
 * role-permissions.js
 * ── Sistema centralizado de control de acceso por rol
 * 
 * ✅ Cómo usar:
 * 1. En index.html: asegúrate de tener <span id="userRol" data-role="admin|moderador|consultor">...
 * 2. Cada botón debe tener un `id` único (ej. id="btnAuditoriaRegistro").
 * 3. Aquí defines qué rol puede acceder a cada botón.
 * 4. Llama a `initRolePermissions(userRol)` tras cargar la sesión.
 */

// ▼▼▼ EDITA A PARTIR DE AQUÍ ▼▼▼
const PERMISSIONS = {
  // Ejemplo base (puedes eliminarlo o mantenerlo como plantilla):
  // 'btnAuditoriaRegistro': {
  //   roles: ['admin', 'moderador'], // quiénes pueden acceder
  //   action: () => window.location.href = 'registro.html',
  //   tooltip: '🔒 Solo RRHH autorizado puede registrar'
  // },
  // 'btnHistorialLogs': {
  //   roles: ['admin'],
  //   action: () => window.location.href = 'historial-logs.html',
  //   tooltip: '🔒 Solo el Administrador puede ver el historial'
  // }

  // 👇 AQUÍ IRÁN TUS PERMISOS (agrega uno por uno conforme los definas)
};

// ▲▲▲ EDITA HASTA AQUÍ ▲▲▲

/**
 * Aplica permisos según el rol del usuario
 * @param {string} userRol - 'admin', 'moderador', o 'consultor'
 */
function initRolePermissions(userRol) {
  if (!userRol) {
    console.warn('⚠️ initRolePermissions llamado sin userRol');
    return;
  }

  Object.entries(PERMISSIONS).forEach(([btnId, config]) => {
    const btn = document.getElementById(btnId);
    if (!btn) {
      console.warn(`⚠️ Botón con id="${btnId}" no encontrado en el DOM.`);
      return;
    }

    const hasAccess = config.roles.includes(userRol);

    if (hasAccess && typeof config.action === 'function') {
      // ✅ Acceso permitido
      btn.style.opacity = '1';
      btn.style.cursor = 'pointer';
      btn.removeAttribute('disabled');
      btn.removeAttribute('title');
      // Remueve onclick anterior (por si acaso)
      btn.onclick = null;
      // Asigna nueva acción
      btn.addEventListener('click', config.action, { once: false });
      // Añade efecto hover visual si no estaba
      btn.classList.add('module-card'); // asegura clases de estilo
    } else {
      // ❌ Acceso restringido
      btn.style.opacity = '0.5';
      btn.style.cursor = 'not-allowed';
      btn.setAttribute('disabled', 'true');
      btn.title = config.tooltip || '🔒 Acceso restringido';
      // Evita redirección accidental
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (config.tooltip) alert(config.tooltip);
      };
    }
  });
}

// ✅ Exponer globalmente para que index.html pueda llamarla
window.initRolePermissions = initRolePermissions;

// ✅ Opcional: autodetección de rol desde el DOM (si no lo pasas explícitamente)
window.detectAndApplyPermissions = function() {
  const rolSpan = document.getElementById('userRol');
  const userRol = rolSpan?.getAttribute('data-role') || 'consultor';
  initRolePermissions(userRol);
};
