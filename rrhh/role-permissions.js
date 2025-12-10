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
    tooltip: ' ⓘ RRHH autorizado'
  },
  'btnAuditoriaModificar': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'modificar.html',
    tooltip: ' ⓘ RRHH autorizado'
  },
  'btnAuditoriaHistorial': {
    roles: ['admin'],
    action: () => window.location.href = 'historial-logs.html',
    tooltip: ' ⓘ Administrador'
  },

  // 🔹 RRHH ICAP
  'btnRhObjetivos': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'rrhh-icap.html#objetivos',
    tooltip: ' ⓘ RRHH autorizado'
  },
  'btnRhDesempeno': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'rrhh-icap.html#desempeno',
    tooltip: ' ⓘ RRHH autorizado'
  },
  'btnRhCapacitacion': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'rrhh-icap.html#capacitacion',
    tooltip: ' ⓘ RRHH autorizado'
  },

// 🔹 Pie de Fuerza (✅ agregado ahora)
  'btnPieFuerzaListado': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'pie-de-fuerza.html'
  },
  'btnPieFuerzaAsignaciones': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'pie-de-fuerza.html#asignaciones',
    tooltip: ' ⓘ RRHH autorizado'
  },
  'btnPieFuerzaMovimientos': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'pie-de-fuerza.html#movimientos',
    tooltip: ' ⓘ RRHH autorizado'
  },

  // 🔹 Orden de Servicio
  'btnOrdenNueva': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'orden-servicio.html',
    tooltip: ' ⓘ RRHH autorizado'
  },
  'btnOrdenSeguimiento': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'orden-servicio.html#seguimiento'
  },
  'btnOrdenReportes': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'orden-servicio.html#reportes'
  },

  // 🔹 Reposo
  'btnReposoSolicitud': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'reposo.html',
    tooltip: ' ⓘ RRHH autorizado'
  },
  'btnReposoAprobadas': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'reposo.html#aprobadas'
  },
  'btnReposoHistorial': {
    roles: ['admin'],
    action: () => window.location.href = 'reposo.html#registro',
    tooltip: ' ⓘ Administrador'
  },

  // 🔹 Vacaciones
  'btnVacacionesPlan': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'vacaciones.html',
    tooltip: ' ⓘ RRHH autorizado'
  },
  'btnVacacionesSolicitudes': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'vacaciones.html#solicitudes'
  },
  'btnVacacionesCalendario': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'vacaciones.html#calendario'
  },

  // 🔹 Cambio de Servicios
  'btnCambioNueva': {
    roles: ['admin', 'moderador'],
    action: () => window.location.href = 'cambio-servicios.html',
    tooltip: ' ⓘ RRHH autorizado'
  },
  'btnCambioProceso': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'cambio-servicios.html#aprobadas'
  },
  'btnCambioHistorial': {
    roles: ['admin'],
    action: () => window.location.href = 'cambio-servicios.html#historial',
    tooltip: ' ⓘ Administrador'
  },

  // 🔹 Documentos
  'btnDocFormularios': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'documentos.html#formularios'
  },
  'btnDocManuales': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'documentos.html#manuales'
  },
  'btnDocNormativas': {
    roles: ['admin', 'moderador', 'consultor'],
    action: () => window.location.href = 'documentos.html#normativas'
  }
  // 👇 Añadirás aquí las 13 pestañas de Pie de Fuerza cuando las crees:
  // 'btnFamiliar', 'btnLaboral', 'btnAcademico', etc.
};

// ▼▼▼ NO EDITAR A PARTIR DE AQUÍ ▼▼▼
function initRolePermissions(userRol) {
  if (!userRol || typeof userRol !== 'string') {
    console.warn('⚠️ initRolePermissions: userRol inválido:', userRol);
    return;
  }

  Object.entries(PERMISSIONS).forEach(([btnId, config]) => {
    const btn = document.getElementById(btnId);
    if (!btn) return;

    const hasAccess = config.roles.includes(userRol);

    if (hasAccess && typeof config.action === 'function') {
      // ✅ Acceso permitido
      btn.style.opacity = '1';
      btn.style.cursor = 'pointer';
      btn.removeAttribute('disabled');
      btn.onclick = config.action;
      // Eliminar tooltip rojo si existía
      const tooltipEl = btn.querySelector('.tooltip-i');
      if (tooltipEl) tooltipEl.remove();
      btn.removeAttribute('title');
    } else {
      // ❌ Acceso restringido: solo tooltip rojo
      btn.style.opacity = '0.5';
      btn.style.cursor = 'not-allowed';
      btn.setAttribute('disabled', 'true');
      btn.onclick = null;
      btn.title = config.tooltip || ' ⓘ Acceso restringido';

      // Añadir ⓘ rojo al título visual (solo una vez)
      const titleEl = btn.querySelector('.module-title');
      if (titleEl && !titleEl.querySelector('.tooltip-i')) {
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip-i';
        tooltip.innerHTML = ' <span style="color:#c62828; font-size:14px; cursor:help;" title="' + (config.tooltip || ' ⓘ Acceso restringido') + '">ⓘ</span>';
        titleEl.appendChild(tooltip);
      }
    }
  });
}

// ✅ Exponer globalmente
window.initRolePermissions = initRolePermissions;

// ✅ Opcional: autodetección desde el DOM (para pruebas)
window.detectAndApplyPermissions = function() {
  const rolSpan = document.getElementById('userRol');
  const userRol = rolSpan?.getAttribute('data-role') || 'consultor';
  initRolePermissions(userRol);
};
// ▲▲▲ FIN — NO EDITAR ▲▲▲
