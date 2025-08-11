// js/consultas.js
// Funciones relacionadas con la pestaña de consultas

// Variables globales específicas de consultas
let consultaProfilePicture, consultaNombres, consultaApellidos, consultaEdad, 
    consultaRango, consultaSexo, consultaCedula, consultaFechaNacimiento,
    consultaFechaInicio, consultaTipoExpediente, consultaIcap, 
    consultaCondicionFuncionario, consultaAnio, consultaServicioLabora,
    consultaTipoFalta, consultaOrigenFalta, consultaFalta, consultaDenunciante,
    consultaDetenido, consultaEstatus, consultaDecision,
    consultaExpedientePenal, consultaResenaCaso, consultaCausa,
    consultaRegistradoPor, consultaRemision, consultaExpedienteNumero,
    searchCedula, btnSearchExpediente, searchResults, noResults,
    searchedCedula, resultMessage, consultaForm, btnResetConsulta,
    btnUpdateExpediente;

// Inicializa los elementos de consulta
function initConsultaElements() {
    // Elementos de consulta
    consultaProfilePicture = document.getElementById('consulta-profile-picture');
    consultaNombres = document.getElementById('consulta-nombres');
    consultaApellidos = document.getElementById('consulta-apellidos');
    consultaEdad = document.getElementById('consulta-edad');
    consultaRango = document.getElementById('consulta-rango');
    consultaSexo = document.getElementById('consulta-sexo');
    consultaCedula = document.getElementById('consulta-cedula');
    consultaFechaNacimiento = document.getElementById('consulta-fecha-nacimiento');
    
    // Campos editables de consulta
    consultaFechaInicio = document.getElementById('consulta-fecha-inicio');
    consultaTipoExpediente = document.getElementById('consulta-tipo-expediente');
    consultaIcap = document.getElementById('consulta-icap');
    consultaCondicionFuncionario = document.getElementById('consulta-condicion-funcionario');
    consultaAnio = document.getElementById('consulta-anio');
    consultaServicioLabora = document.getElementById('consulta-servicio-labora');
    consultaTipoFalta = document.getElementById('consulta-tipo-falta');
    consultaOrigenFalta = document.getElementById('consulta-origen-falta');
    consultaFalta = document.getElementById('consulta-falta');
    consultaDenunciante = document.getElementById('consulta-denunciante');
    consultaDetenido = document.getElementById('consulta-detenido');
    consultaEstatus = document.getElementById('consulta-estatus');
    consultaDecision = document.getElementById('consulta-decision');
    
    // Campos solo lectura de consulta
    consultaExpedientePenal = document.getElementById('consulta-expediente-penal');
    consultaResenaCaso = document.getElementById('consulta-resena-caso');
    consultaCausa = document.getElementById('consulta-causa');
    consultaRegistradoPor = document.getElementById('consulta-registrado-por');
    consultaRemision = document.getElementById('consulta-remision');
    consultaExpedienteNumero = document.getElementById('consulta-expediente-numero');
    
    // Elementos de búsqueda
    searchCedula = document.getElementById('search-cedula');
    btnSearchExpediente = document.getElementById('btn-search-expediente');
    searchResults = document.getElementById('search-results');
    noResults = document.getElementById('no-results');
    searchedCedula = document.getElementById('searched-ceda');
    resultMessage = document.getElementById('result-message');
    consultaForm = document.getElementById('consulta-form');
    btnResetConsulta = document.getElementById('btn-reset-consulta');
    btnUpdateExpediente = document.getElementById('btn-update-expediente');
}

// Función para cargar opciones en los desplegables de consulta
async function loadConsultaDropdownOptions() {
    try {
        // Cargar opciones para tipo-expediente
        const { data: tipoExpedienteData, error: error1 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'tipo-expediente')
            .order('option');
            
        if (error1) throw error1;
        
        if (consultaTipoExpediente) {
            consultaTipoExpediente.innerHTML = '<option value="">Seleccione</option>';
            if (tipoExpedienteData && tipoExpedienteData.length > 0) {
                tipoExpedienteData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaTipoExpediente.appendChild(optionElement);
                });
            }
        }
        
        // Cargar opciones para icap
        const { data: icapData, error: error2 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'icap')
            .order('option');
            
        if (error2) throw error2;
        
        if (consultaIcap) {
            consultaIcap.innerHTML = '<option value="">Seleccione</option>';
            if (icapData && icapData.length > 0) {
                icapData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaIcap.appendChild(optionElement);
                });
            }
        }
        
        // Cargar opciones para condicion-funcionario
        const { data: condicionData, error: error3 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'condicion-funcionario')
            .order('option');
            
        if (error3) throw error3;
        
        if (consultaCondicionFuncionario) {
            consultaCondicionFuncionario.innerHTML = '<option value="">Seleccione</option>';
            if (condicionData && condicionData.length > 0) {
                condicionData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaCondicionFuncionario.appendChild(optionElement);
                });
            }
        }
        
        // Cargar opciones para servicio-labora
        const { data: servicioLaboraData, error: error4 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'servicio-labora')
            .order('option');
            
        if (error4) throw error4;
        
        if (consultaServicioLabora) {
            consultaServicioLabora.innerHTML = '<option value="">Seleccione</option>';
            if (servicioLaboraData && servicioLaboraData.length > 0) {
                servicioLaboraData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaServicioLabora.appendChild(optionElement);
                });
            }
        }
        
        // Cargar opciones para tipo-falta
        const { data: tipoFaltaData, error: error5 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'tipo-falta')
            .order('option');
            
        if (error5) throw error5;
        
        if (consultaTipoFalta) {
            consultaTipoFalta.innerHTML = '<option value="">Seleccione</option>';
            if (tipoFaltaData && tipoFaltaData.length > 0) {
                tipoFaltaData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaTipoFalta.appendChild(optionElement);
                });
            }
        }
        
        // Cargar opciones para origen-falta
        const { data: origenFaltaData, error: error6 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'origen-falta')
            .order('option');
            
        if (error6) throw error6;
        
        if (consultaOrigenFalta) {
            consultaOrigenFalta.innerHTML = '<option value="">Seleccione</option>';
            if (origenFaltaData && origenFaltaData.length > 0) {
                origenFaltaData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaOrigenFalta.appendChild(optionElement);
                });
            }
        }
        
        // Cargar opciones para falta
        const { data: faltaData, error: error7 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'falta')
            .order('option');
            
        if (error7) throw error7;
        
        if (consultaFalta) {
            consultaFalta.innerHTML = '<option value="">Seleccione</option>';
            if (faltaData && faltaData.length > 0) {
                faltaData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaFalta.appendChild(optionElement);
                });
            }
        }
        
        // Cargar opciones para denunciante
        const { data: denuncianteData, error: error8 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'denunciante')
            .order('option');
            
        if (error8) throw error8;
        
        if (consultaDenunciante) {
            consultaDenunciante.innerHTML = '<option value="">Seleccione</option>';
            if (denuncianteData && denuncianteData.length > 0) {
                denuncianteData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaDenunciante.appendChild(optionElement);
                });
            }
        }
        
        // Cargar opciones para estatus
        const { data: estatusData, error: error9 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'estatus')
            .order('option');
            
        if (error9) throw error9;
        
        if (consultaEstatus) {
            consultaEstatus.innerHTML = '<option value="">Seleccione</option>';
            if (estatusData && estatusData.length > 0) {
                estatusData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaEstatus.appendChild(optionElement);
                });
            }
        }
        
        // Cargar opciones para decision
        const { data: decisionData, error: error10 } = await supabaseClient
            .from('dropdown_options')
            .select('option')
            .eq('field', 'decision')
            .order('option');
            
        if (error10) throw error10;
        
        if (consultaDecision) {
            consultaDecision.innerHTML = '<option value="">Seleccione</option>';
            if (decisionData && decisionData.length > 0) {
                decisionData.forEach(option => {
                    const optionElement = document.createElement('option');
                    optionElement.value = option.option;
                    optionElement.textContent = option.option;
                    consultaDecision.appendChild(optionElement);
                });
            }
        }
        
        // Inicializar año
        if (document.getElementById('consulta-anio')) {
            const yearSelect = document.getElementById('consulta-anio');
            const currentYear = new Date().getFullYear();
            // Limpiar opciones existentes
            yearSelect.innerHTML = '<option value="">Seleccione</option>';
            // Añadir 10 años hacia atrás y 5 hacia adelante
            for (let i = 5; i >= 0; i--) {
                const year = currentYear - i;
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            }
            for (let i = 1; i <= 5; i++) {
                const year = currentYear + i;
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            }
        }
    } catch (error) {
        console.error('Error al cargar opciones de consulta:', error);
    }
}

// Función para buscar expediente por cédula
async function searchExpediente() {
    const cedula = searchCedula.value.trim();
    if (!cedula) {
        alert('Por favor, ingrese un número de cédula');
        return;
    }
    
    try {
        // Verificar si Supabase está configurado
        if (!isSupabaseConfigured) {
            throw new Error("Supabase no está configurado. Verifica tus credenciales.");
        }
        
        // Manejo seguro de la sesión
        const { data, error: sessionError } = await supabaseClient.auth.getSession();
        if (sessionError || !data?.session) {
            throw new Error("No hay sesión activa. Por favor, inicie sesión.");
        }
        
        // Buscar expediente por cédula
        const { data: expedientes, error } = await supabaseClient
            .from('expedientes')
            .select('*')
            .eq('cedula', cedula)
            .order('fecha_registro', { ascending: false })
            .limit(1);
            
        if (error) throw error;
        
        // Mostrar resultados
        if (expedientes && expedientes.length > 0) {
            const expediente = expedientes[0];
            
            // Actualizar UI
            if (searchResults) searchResults.style.display = 'block';
            if (noResults) noResults.style.display = 'none';
            if (searchedCedula) searchedCedula.textContent = cedula;
            
            // Llenar campos de solo lectura
            if (consultaProfilePicture) consultaProfilePicture.src = expediente.foto || 'https://via.placeholder.com/150';
            if (consultaNombres) consultaNombres.value = expediente.nombres || '';
            if (consultaApellidos) consultaApellidos.value = expediente.apellidos || '';
            if (consultaEdad) consultaEdad.value = expediente.edad ? String(expediente.edad) : '';
            if (consultaRango) consultaRango.value = expediente.rango || '';
            if (consultaSexo) consultaSexo.value = expediente.sexo || '';
            if (consultaCedula) consultaCedula.value = expediente.cedula || '';
            
            // Formatear fecha de nacimiento
            if (expediente.fecha_nacimiento && consultaFechaNacimiento) {
                const fecha = new Date(expediente.fecha_nacimiento);
                consultaFechaNacimiento.value = fecha.toLocaleDateString('es-ES');
            }
            
            // Llenar campos editables
            if (expediente.fecha_inicio && consultaFechaInicio) {
                consultaFechaInicio.value = expediente.fecha_inicio;
            }
            
            // Cargar opciones para los desplegables
            await loadConsultaDropdownOptions();
            
            // Seleccionar valores en los desplegables
            if (expediente.tipo_expediente && consultaTipoExpediente) {
                consultaTipoExpediente.value = expediente.tipo_expediente;
            }
            if (expediente.icap && consultaIcap) {
                consultaIcap.value = expediente.icap;
            }
            if (expediente.condicion_funcionario && consultaCondicionFuncionario) {
                consultaCondicionFuncionario.value = expediente.condicion_funcionario;
            }
            if (expediente.anio && consultaAnio) {
                consultaAnio.value = expediente.anio;
            }
            if (expediente.servicio_labora && consultaServicioLabora) {
                consultaServicioLabora.value = expediente.servicio_labora;
            }
            if (expediente.tipo_falta && consultaTipoFalta) {
                consultaTipoFalta.value = expediente.tipo_falta;
            }
            if (expediente.origen_falta && consultaOrigenFalta) {
                consultaOrigenFalta.value = expediente.origen_falta;
            }
            if (expediente.falta && consultaFalta) {
                consultaFalta.value = expediente.falta;
            }
            if (expediente.denunciante && consultaDenunciante) {
                consultaDenunciante.value = expediente.denunciante;
            }
            if (expediente.detenido && consultaDetenido) {
                consultaDetenido.value = expediente.detenido;
            }
            if (expediente.estatus && consultaEstatus) {
                consultaEstatus.value = expediente.estatus;
            }
            if (expediente.decision && consultaDecision) {
                consultaDecision.value = expediente.decision;
            }
            
            // Llenar campos solo lectura
            if (consultaExpedientePenal) consultaExpedientePenal.value = expediente.expediente_penal || '';
            if (consultaResenaCaso) consultaResenaCaso.value = expediente.resena_caso || '';
            if (consultaCausa) consultaCausa.value = expediente.causa || '';
            if (consultaRegistradoPor) consultaRegistradoPor.value = expediente.registrado_por || '';
            if (consultaRemision) consultaRemision.value = expediente.remision || '';
            if (consultaExpedienteNumero) consultaExpedienteNumero.value = expediente.expediente_numero || '';
            
            // Mostrar mensaje de éxito
            if (resultMessage) {
                resultMessage.innerHTML = `Se encontró <strong>1</strong> expediente para la cédula: <strong>${cedula}</strong>`;
            }
        } else {
            // No se encontraron resultados
            if (searchResults) searchResults.style.display = 'none';
            if (noResults) noResults.style.display = 'block';
        }
    } catch (error) {
        console.error('Error al buscar expediente:', error);
        if (typeof showError === 'function') {
            showError(`Error al buscar expediente: ${error.message}`);
        }
    }
}

// Función para actualizar expediente
async function updateExpediente(e) {
    e.preventDefault();
    const cedula = searchCedula.value.trim();
    if (!cedula) {
        alert('No hay expediente cargado para actualizar');
        return;
    }
    
    try {
        // Verificar si Supabase está configurado
        if (!isSupabaseConfigured) {
            throw new Error("Supabase no está configurado. Verifica tus credenciales.");
        }
        
        // Manejo seguro de la sesión
        const { data, error: sessionError } = await supabaseClient.auth.getSession();
        if (sessionError || !data?.session) {
            throw new Error("No hay sesión activa. Por favor, inicie sesión.");
        }
        
        // Obtener el rol del usuario
        const { role } = await checkUserRole();
        // Verificar permisos
        if (role !== 'admin' && role !== 'super_admin') {
            throw new Error("No tiene permisos para actualizar expedientes. Solo los administradores pueden actualizar.");
        }
        
        // Crear objeto expediente actualizado
        const expedienteActualizado = {
            fecha_inicio: consultaFechaInicio.value,
            tipo_expediente: consultaTipoExpediente.value,
            icap: consultaIcap.value,
            condicion_funcionario: consultaCondicionFuncionario.value,
            anio: consultaAnio.value,
            servicio_labora: consultaServicioLabora.value,
            tipo_falta: consultaTipoFalta.value,
            origen_falta: consultaOrigenFalta.value,
            falta: consultaFalta.value,
            denunciante: consultaDenunciante.value,
            detenido: consultaDetenido.value,
            estatus: consultaEstatus.value,
            decision: consultaDecision.value
        };
        
        // Actualizar en Supabase
        const { error } = await supabaseClient
            .from('expedientes')
            .update(expedienteActualizado)
            .eq('cedula', cedula)
            .order('fecha_registro', { ascending: false })
            .limit(1);
            
        if (error) throw error;
        
        alert('Expediente actualizado exitosamente');
        
        // Actualizar campos solo lectura con fecha de actualización
        if (consultaRegistradoPor) {
            consultaRegistradoPor.value = data.session.user.email?.split('@')[0] || 'Usuario';
        }
        
    } catch (error) {
        console.error('Error al actualizar expediente:', error);
        if (typeof showError === 'function') {
            showError(`Error al actualizar expediente: ${error.message || 'Error desconocido'}`);
        }
    }
}

// Función para restablecer el formulario de consulta
function resetConsultaForm() {
    // Limpiar búsqueda
    if (searchCedula) searchCedula.value = '';
    if (searchResults) searchResults.style.display = 'none';
    if (noResults) noResults.style.display = 'none';
    
    // Limpiar campos
    if (consultaProfilePicture) consultaProfilePicture.src = 'https://via.placeholder.com/150';
    if (consultaNombres) consultaNombres.value = '';
    if (consultaApellidos) consultaApellidos.value = '';
    if (consultaEdad) consultaEdad.value = '';
    if (consultaRango) consultaRango.value = '';
    if (consultaSexo) consultaSexo.value = '';
    if (consultaCedula) consultaCedula.value = '';
    if (consultaFechaNacimiento) consultaFechaNacimiento.value = '';
    
    if (consultaFechaInicio) consultaFechaInicio.value = '';
    if (consultaTipoExpediente) consultaTipoExpediente.value = '';
    if (consultaIcap) consultaIcap.value = '';
    if (consultaCondicionFuncionario) consultaCondicionFuncionario.value = '';
    if (consultaAnio) consultaAnio.value = '';
    if (consultaServicioLabora) consultaServicioLabora.value = '';
    if (consultaTipoFalta) consultaTipoFalta.value = '';
    if (consultaOrigenFalta) consultaOrigenFalta.value = '';
    if (consultaFalta) consultaFalta.value = '';
    if (consultaDenunciante) consultaDenunciante.value = '';
    if (consultaDetenido) consultaDetenido.value = '';
    if (consultaEstatus) consultaEstatus.value = '';
    if (consultaDecision) consultaDecision.value = '';
    
    if (consultaExpedientePenal) consultaExpedientePenal.value = '';
    if (consultaResenaCaso) consultaResenaCaso.value = '';
    if (consultaCausa) consultaCausa.value = '';
    if (consultaRegistradoPor) consultaRegistradoPor.value = '';
    if (consultaRemision) consultaRemision.value = '';
    if (consultaExpedienteNumero) consultaExpedienteNumero.value = '';
}

// Función para inicializar la pestaña de consulta
function initializeConsultaTab() {
    console.log('Inicializando pestaña de consulta...');
    
    // Verificar si la pestaña de consulta existe
    const consultaTab = document.getElementById('consulta-content');
    if (!consultaTab) {
        console.error('No se encontró la pestaña de consulta');
        return;
    }
    
    // Si los elementos de consulta no existen, crearlos
    if (!document.getElementById('search-cedula')) {
        console.log('Creando elementos de consulta...');
        
        // Crear la estructura HTML de la pestaña de consulta
        consultaTab.innerHTML = `
            <div class="card shadow-sm">
                <div class="card-header bg-white py-3">
                    <h5 class="mb-0">Búsqueda de Expedientes</h5>
                </div>
                <div class="card-body p-4">
                    <!-- Barra de búsqueda -->
                    <div class="mb-4">
                        <div class="row g-3">
                            <div class="col-md-8">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-id-card"></i></span>
                                    <input type="text" class="form-control form-control-lg" id="search-cedula" placeholder="Ingrese número de cédula para buscar">
                                    <button class="btn btn-primary" id="btn-search-expediente">
                                        <i class="fas fa-search me-2"></i>Buscar Expediente
                                    </button>
                                </div>
                                <div class="form-text text-muted mt-2">
                                    <i class="fas fa-info-circle me-1"></i> 
                                    Ingrese el número de cédula del funcionario para buscar su expediente
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Resultados de búsqueda -->
                    <div id="search-results" style="display: none;">
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle me-2"></i> 
                            <span id="result-message">Resultados para la cédula: <strong id="searched-cedula"></strong></span>
                        </div>
                        
                        <!-- Formulario de consulta -->
                        <form id="consulta-form">
                            <div class="row">
                                <div class="col-md-4 mb-4">
                                    <!-- Foto -->
                                    <div class="text-center mb-4">
                                        <div class="profile-picture-container position-relative d-inline-block">
                                            <img id="consulta-profile-picture" src="https://via.placeholder.com/150" class="profile-picture rounded-circle" alt="Foto de perfil">
                                        </div>
                                        <p class="text-muted small mt-2">Foto del funcionario</p>
                                    </div>
                                    <!-- Nombres y Apellidos en una sola fila -->
                                    <div class="row g-2 mb-3">
                                        <div class="col-md-6">
                                            <label for="consulta-nombres" class="form-label small fw-bold">Nombres</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-nombres" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-apellidos" class="form-label small fw-bold">Apellidos</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-apellidos" readonly>
                                        </div>
                                    </div>
                                    <!-- Cédula y Edad en una sola fila -->
                                    <div class="row g-2 mb-3">
                                        <div class="col-md-6">
                                            <label for="consulta-cedula" class="form-label small fw-bold">Cédula</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-cedula" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-edad" class="form-label small fw-bold">Edad</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-edad" readonly>
                                        </div>
                                    </div>
                                    <!-- Rango y Sexo en una sola fila -->
                                    <div class="row g-2 mb-3">
                                        <div class="col-md-6">
                                            <label for="consulta-rango" class="form-label small fw-bold">Rango</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-rango" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-sexo" class="form-label small fw-bold">Sexo</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-sexo" readonly>
                                        </div>
                                    </div>
                                    <!-- Fecha de Nacimiento -->
                                    <div class="mb-3">
                                        <label for="consulta-fecha-nacimiento" class="form-label small fw-bold">Fecha de Nacimiento</label>
                                        <input type="text" class="form-control form-control-sm" id="consulta-fecha-nacimiento" readonly>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-fecha-inicio" class="form-label small fw-bold">Fecha de Inicio</label>
                                            <div class="input-group input-group-sm">
                                                <input type="date" class="form-control form-control-sm" id="consulta-fecha-inicio">
                                                <button type="button" class="btn btn-sm btn-outline-secondary reset-field" data-field="consulta-fecha-inicio" title="Restablecer">
                                                    <i class="fas fa-undo"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-tipo-expediente" class="form-label small fw-bold">Tipo de Expediente</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-tipo-expediente">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="tipo-expediente" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-icap" class="form-label small fw-bold">ICAP (Oficina)</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-icap">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="icap" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-condicion-funcionario" class="form-label small fw-bold">Condición en el Caso</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-condicion-funcionario">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="condicion-funcionario" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-anio" class="form-label small fw-bold">Año</label>
                                            <select class="form-select form-select-sm" id="consulta-anio">
                                                <option value="">Seleccione</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-servicio-labora" class="form-label small fw-bold">Servicio Labora</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-servicio-labora">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="servicio-labora" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-tipo-falta" class="form-label small fw-bold">Tipo de Falta</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-tipo-falta">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="tipo-falta" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-origen-falta" class="form-label small fw-bold">Origen de la Falta</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-origen-falta">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="origen-falta" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-falta" class="form-label small fw-bold">Falta</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-falta">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="falta" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-denunciante" class="form-label small fw-bold">Denunciante</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-denunciante">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="denunciante" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-4">
                                            <label for="consulta-detenido" class="form-label small fw-bold">Detenido</label>
                                            <select class="form-select form-select-sm" id="consulta-detenido">
                                                <option value="">Seleccione</option>
                                                <option value="Sí">Sí</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="consulta-estatus" class="form-label small fw-bold">Estatus</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-estatus">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="estatus" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="consulta-decision" class="form-label small fw-bold">Decisión</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-decision">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="decision" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-expediente-penal" class="form-label small fw-bold">Expediente Penal</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-expediente-penal" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-expediente-numero" class="form-label small fw-bold">Expediente Número</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-expediente-numero" readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="consulta-resena-caso" class="form-label small fw-bold">Reseña del Caso</label>
                                        <textarea class="form-control form-control-sm" id="consulta-resena-caso" rows="2" readonly></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="consulta-causa" class="form-label small fw-bold">Causa</label>
                                        <textarea class="form-control form-control-sm" id="consulta-causa" rows="2" readonly></textarea>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label for="consulta-registrado-por" class="form-label small fw-bold">Registrado por Sustanciador</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-registrado-por" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-remision" class="form-label small fw-bold">Remisión</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-remision" readonly>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4 pt-3 border-top">
                                <button type="button" class="btn btn-outline-secondary btn-sm" id="btn-reset-consulta">
                                    <i class="fas fa-redo me-1"></i>Limpiar
                                </button>
                                <button type="button" class="btn btn-primary btn-sm px-4" id="btn-update-expediente">
                                    <i class="fas fa-save me-1"></i>Actualizar Expediente
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <!-- Mensaje cuando no hay resultados -->
                    <div id="no-results" class="text-center py-5" style="display: none;">
                        <i class="fas fa-search" style="font-size: 4rem; color: #0066CC; opacity: 0.3;"></i>
                        <h3 class="mt-4" style="color: #6c757d;">No se encontraron expedientes</h3>
                        <p class="text-muted mt-2">No se encontró ningún expediente con la cédula proporcionada. Verifique el número e intente nuevamente.</p>
                    </div>
                </div>
            </div>
        `;
        
        // Inicializar elementos de consulta
        initConsultaElements();
        
        // Configurar eventos para la pestaña de consulta
        if (btnSearchExpediente) {
            btnSearchExpediente.addEventListener('click', searchExpediente);
        }
        
        // Permitir buscar con Enter
        if (searchCedula) {
            searchCedula.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchExpediente();
                }
            });
        }
        
        // Configurar botón de restablecer
        if (btnResetConsulta) {
            btnResetConsulta.addEventListener('click', resetConsultaForm);
        }
        
        // Configurar botón de actualizar
        if (btnUpdateExpediente) {
            btnUpdateExpediente.addEventListener('click', updateExpediente);
        }
        
        // Configurar botones de restablecer campos
        document.querySelectorAll('.reset-field').forEach(button => {
            button.addEventListener('click', function() {
                const fieldId = this.getAttribute('data-field');
                if (fieldId && document.getElementById(fieldId)) {
                    document.getElementById(fieldId).value = '';
                }
            });
        });
        
        // Inicializar los desplegables de consulta
        loadConsultaDropdownOptions();
        
        console.log('Pestaña de consulta re-inicializada correctamente');
    } else {
        // Inicializar elementos de consulta
        initConsultaElements();
        
        // Configurar eventos para la pestaña de consulta
        if (btnSearchExpediente) {
            btnSearchExpediente.addEventListener('click', searchExpediente);
        }
        
        // Permitir buscar con Enter
        if (searchCedula) {
            searchCedula.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchExpediente();
                }
            });
        }
        
        // Configurar botón de restablecer
        if (btnResetConsulta) {
            btnResetConsulta.addEventListener('click', resetConsultaForm);
        }
        
        // Configurar botón de actualizar
        if (btnUpdateExpediente) {
            btnUpdateExpediente.addEventListener('click', updateExpediente);
        }
        
        // Configurar botones de restablecer campos
        document.querySelectorAll('.reset-field').forEach(button => {
            button.addEventListener('click', function() {
                const fieldId = this.getAttribute('data-field');
                if (fieldId && document.getElementById(fieldId)) {
                    document.getElementById(fieldId).value = '';
                }
            });
        });
        
        // Inicializar los desplegables de consulta
        loadConsultaDropdownOptions();
    }
}

// Verificación y corrección de elementos de consulta
function verifyAndFixConsultaElements() {
    console.log('--- INICIO DE VERIFICACIÓN DE ELEMENTOS DE CONSULTA ---');
    
    // Verificar si existe la pestaña de consulta
    const consultaTab = document.getElementById('consulta-content');
    if (!consultaTab) {
        console.error('ERROR: No se encontró la pestaña de consulta (ID: consulta-content)');
        return;
    }
    
    // Verificar elementos principales
    const searchCedula = document.getElementById('search-cedula');
    const btnSearchExpediente = document.getElementById('btn-search-expediente');
    const searchResults = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');
    
    // Si algún elemento principal está faltando, reconstruir la interfaz
    if (!searchCedula || !btnSearchExpediente || !searchResults || !noResults) {
        console.warn('ALGUNOS ELEMENTOS DE CONSULTA ESTÁN FALTANDO. RECONSTRUYENDO INTERFAZ...');
        
        // Eliminar contenido existente de la pestaña de consulta
        consultaTab.innerHTML = '';
        
        // Crear la estructura completa de la pestaña de consulta
        const consultaContent = `
            <div class="card shadow-sm">
                <div class="card-header bg-white py-3">
                    <h5 class="mb-0">Búsqueda de Expedientes</h5>
                </div>
                <div class="card-body p-4">
                    <!-- Barra de búsqueda -->
                    <div class="mb-4">
                        <div class="row g-3">
                            <div class="col-md-8">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-id-card"></i></span>
                                    <input type="text" class="form-control form-control-lg" id="search-cedula" placeholder="Ingrese número de cédula para buscar">
                                    <button class="btn btn-primary" id="btn-search-expediente">
                                        <i class="fas fa-search me-2"></i>Buscar Expediente
                                    </button>
                                </div>
                                <div class="form-text text-muted mt-2">
                                    <i class="fas fa-info-circle me-1"></i> 
                                    Ingrese el número de cédula del funcionario para buscar su expediente
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Resultados de búsqueda -->
                    <div id="search-results" style="display: none;">
                        <div class="alert alert-info">
                            <i class="fas fa-info-circle me-2"></i> 
                            <span id="result-message">Resultados para la cédula: <strong id="searched-cedula"></strong></span>
                        </div>
                        
                        <!-- Formulario de consulta -->
                        <form id="consulta-form">
                            <div class="row">
                                <div class="col-md-4 mb-4">
                                    <!-- Foto -->
                                    <div class="text-center mb-4">
                                        <div class="profile-picture-container position-relative d-inline-block">
                                            <img id="consulta-profile-picture" src="https://via.placeholder.com/150" class="profile-picture rounded-circle" alt="Foto de perfil">
                                        </div>
                                        <p class="text-muted small mt-2">Foto del funcionario</p>
                                    </div>
                                    <!-- Nombres y Apellidos en una sola fila -->
                                    <div class="row g-2 mb-3">
                                        <div class="col-md-6">
                                            <label for="consulta-nombres" class="form-label small fw-bold">Nombres</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-nombres" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-apellidos" class="form-label small fw-bold">Apellidos</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-apellidos" readonly>
                                        </div>
                                    </div>
                                    <!-- Cédula y Edad en una sola fila -->
                                    <div class="row g-2 mb-3">
                                        <div class="col-md-6">
                                            <label for="consulta-cedula" class="form-label small fw-bold">Cédula</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-cedula" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-edad" class="form-label small fw-bold">Edad</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-edad" readonly>
                                        </div>
                                    </div>
                                    <!-- Rango y Sexo en una sola fila -->
                                    <div class="row g-2 mb-3">
                                        <div class="col-md-6">
                                            <label for="consulta-rango" class="form-label small fw-bold">Rango</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-rango" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-sexo" class="form-label small fw-bold">Sexo</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-sexo" readonly>
                                        </div>
                                    </div>
                                    <!-- Fecha de Nacimiento -->
                                    <div class="mb-3">
                                        <label for="consulta-fecha-nacimiento" class="form-label small fw-bold">Fecha de Nacimiento</label>
                                        <input type="text" class="form-control form-control-sm" id="consulta-fecha-nacimiento" readonly>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-fecha-inicio" class="form-label small fw-bold">Fecha de Inicio</label>
                                            <div class="input-group input-group-sm">
                                                <input type="date" class="form-control form-control-sm" id="consulta-fecha-inicio">
                                                <button type="button" class="btn btn-sm btn-outline-secondary reset-field" data-field="consulta-fecha-inicio" title="Restablecer">
                                                    <i class="fas fa-undo"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-tipo-expediente" class="form-label small fw-bold">Tipo de Expediente</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-tipo-expediente">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="tipo-expediente" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-icap" class="form-label small fw-bold">ICAP (Oficina)</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-icap">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="icap" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-condicion-funcionario" class="form-label small fw-bold">Condición en el Caso</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-condicion-funcionario">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="condicion-funcionario" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-anio" class="form-label small fw-bold">Año</label>
                                            <select class="form-select form-select-sm" id="consulta-anio">
                                                <option value="">Seleccione</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-servicio-labora" class="form-label small fw-bold">Servicio Labora</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-servicio-labora">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="servicio-labora" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-tipo-falta" class="form-label small fw-bold">Tipo de Falta</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-tipo-falta">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="tipo-falta" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-origen-falta" class="form-label small fw-bold">Origen de la Falta</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-origen-falta">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="origen-falta" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-falta" class="form-label small fw-bold">Falta</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-falta">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="falta" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-denunciante" class="form-label small fw-bold">Denunciante</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-denunciante">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="denunciante" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-4">
                                            <label for="consulta-detenido" class="form-label small fw-bold">Detenido</label>
                                            <select class="form-select form-select-sm" id="consulta-detenido">
                                                <option value="">Seleccione</option>
                                                <option value="Sí">Sí</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="consulta-estatus" class="form-label small fw-bold">Estatus</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-estatus">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="estatus" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <label for="consulta-decision" class="form-label small fw-bold">Decisión</label>
                                            <div class="input-group input-group-sm">
                                                <select class="form-select form-select-sm" id="consulta-decision">
                                                    <option value="">Seleccione</option>
                                                </select>
                                                <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="decision" title="Editar opciones">
                                                    <i class="fas fa-pen"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row g-3 mb-4">
                                        <div class="col-md-6">
                                            <label for="consulta-expediente-penal" class="form-label small fw-bold">Expediente Penal</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-expediente-penal" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-expediente-numero" class="form-label small fw-bold">Expediente Número</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-expediente-numero" readonly>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="consulta-resena-caso" class="form-label small fw-bold">Reseña del Caso</label>
                                        <textarea class="form-control form-control-sm" id="consulta-resena-caso" rows="2" readonly></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="consulta-causa" class="form-label small fw-bold">Causa</label>
                                        <textarea class="form-control form-control-sm" id="consulta-causa" rows="2" readonly></textarea>
                                    </div>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <label for="consulta-registrado-por" class="form-label small fw-bold">Registrado por Sustanciador</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-registrado-por" readonly>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="consulta-remision" class="form-label small fw-bold">Remisión</label>
                                            <input type="text" class="form-control form-control-sm" id="consulta-remision" readonly>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4 pt-3 border-top">
                                <button type="button" class="btn btn-outline-secondary btn-sm" id="btn-reset-consulta">
                                    <i class="fas fa-redo me-1"></i>Limpiar
                                </button>
                                <button type="button" class="btn btn-primary btn-sm px-4" id="btn-update-expediente">
                                    <i class="fas fa-save me-1"></i>Actualizar Expediente
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <!-- Mensaje cuando no hay resultados -->
                    <div id="no-results" class="text-center py-5" style="display: none;">
                        <i class="fas fa-search" style="font-size: 4rem; color: #0066CC; opacity: 0.3;"></i>
                        <h3 class="mt-4" style="color: #6c757d;">No se encontraron expedientes</h3>
                        <p class="text-muted mt-2">No se encontró ningún expediente con la cédula proporcionada. Verifique el número e intente nuevamente.</p>
                    </div>
                </div>
            </div>
        `;
        
        consultaTab.innerHTML = consultaContent;
        console.log('Interfaz de consulta reconstruida correctamente');
        
        // Inicializar elementos de consulta
        initConsultaElements();
        
        // Configurar eventos para la pestaña de consulta
        if (btnSearchExpediente) {
            btnSearchExpediente.addEventListener('click', searchExpediente);
        }
        
        // Permitir buscar con Enter
        if (searchCedula) {
            searchCedula.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchExpediente();
                }
            });
        }
        
        // Configurar botón de restablecer
        if (btnResetConsulta) {
            btnResetConsulta.addEventListener('click', resetConsultaForm);
        }
        
        // Configurar botón de actualizar
        if (btnUpdateExpediente) {
            btnUpdateExpediente.addEventListener('click', updateExpediente);
        }
        
        // Configurar botones de restablecer campos
        document.querySelectorAll('.reset-field').forEach(button => {
            button.addEventListener('click', function() {
                const fieldId = this.getAttribute('data-field');
                if (fieldId && document.getElementById(fieldId)) {
                    document.getElementById(fieldId).value = '';
                }
            });
        });
        
        // Cargar opciones para los desplegables de consulta
        loadConsultaDropdownOptions();
        
        console.log('Eventos de consulta configurados correctamente');
    } else {
        console.log('La pestaña de consulta parece estar correctamente configurada');
        
        // Inicializar elementos de consulta
        initConsultaElements();
        
        // Verificar si los campos de consulta existen
        if (!consultaNombres) {
            console.warn('Los campos de consulta no están inicializados. Forzando inicialización...');
            setTimeout(loadConsultaDropdownOptions, 500);
        }
    }
    
    console.log('--- VERIFICACIÓN DE ELEMENTOS DE CONSULTA COMPLETADA ---');
}

// Función para asegurar que la pestaña de consulta se muestre
function ensureConsultaTabIsVisible() {
    // Verificar si la pestaña de consulta está oculta
    const consultaTabLink = document.querySelector('a[href="#consulta-content"]');
    const consultaTabContent = document.getElementById('consulta-content');
    
    if (consultaTabLink && consultaTabContent) {
        // Asegurar que la pestaña esté visible
        consultaTabLink.style.display = 'block';
        consultaTabContent.style.display = 'block';
        
        // Si es usuario normal, asegurar que la pestaña esté activa
        if (currentUserRole === 'user') {
            consultaTabLink.classList.add('active');
            consultaTabContent.classList.add('show', 'active');
        }
        
        console.log('Pestaña de consulta asegurada como visible');
    }
}

// Solución definitiva para problemas de carga de la pestaña de consulta
function fixConsultaTabLoadingIssue() {
    console.log('Aplicando solución definitiva para problemas de carga de consulta...');
    
    // Verificar y corregir elementos de consulta
    verifyAndFixConsultaElements();
    
    // Asegurar que la pestaña esté visible
    ensureConsultaTabIsVisible();
    
    // Si después de 2 segundos la pestaña sigue vacía, forzar inicialización
    setTimeout(() => {
        const consultaTabContent = document.getElementById('consulta-content');
        if (consultaTabContent && consultaTabContent.innerHTML.trim() === '') {
            console.error('La pestaña de consulta sigue vacía después de 2 segundos. Forzando inicialización...');
            // Forzar la creación de la pestaña de consulta
            if (document.getElementById('consulta-content')) {
                document.getElementById('consulta-content').innerHTML = `
                    <div class="card shadow-sm">
                        <div class="card-header bg-white py-3">
                            <h5 class="mb-0">Búsqueda de Expedientes</h5>
                        </div>
                        <div class="card-body p-4">
                            <!-- Barra de búsqueda -->
                            <div class="mb-4">
                                <div class="row g-3">
                                    <div class="col-md-8">
                                        <div class="input-group">
                                            <span class="input-group-text"><i class="fas fa-id-card"></i></span>
                                            <input type="text" class="form-control form-control-lg" id="search-cedula" placeholder="Ingrese número de cédula para buscar">
                                            <button class="btn btn-primary" id="btn-search-expediente">
                                                <i class="fas fa-search me-2"></i>Buscar Expediente
                                            </button>
                                        </div>
                                        <div class="form-text text-muted mt-2">
                                            <i class="fas fa-info-circle me-1"></i> 
                                            Ingrese el número de cédula del funcionario para buscar su expediente
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Resultados de búsqueda -->
                            <div id="search-results" style="display: none;">
                                <div class="alert alert-info">
                                    <i class="fas fa-info-circle me-2"></i> 
                                    <span id="result-message">Resultados para la cédula: <strong id="searched-cedula"></strong></span>
                                </div>
                                
                                <!-- Formulario de consulta -->
                                <form id="consulta-form">
                                    <div class="row">
                                        <div class="col-md-4 mb-4">
                                            <!-- Foto -->
                                            <div class="text-center mb-4">
                                                <div class="profile-picture-container position-relative d-inline-block">
                                                    <img id="consulta-profile-picture" src="https://via.placeholder.com/150" class="profile-picture rounded-circle" alt="Foto de perfil">
                                                </div>
                                                <p class="text-muted small mt-2">Foto del funcionario</p>
                                            </div>
                                            <!-- Nombres y Apellidos en una sola fila -->
                                            <div class="row g-2 mb-3">
                                                <div class="col-md-6">
                                                    <label for="consulta-nombres" class="form-label small fw-bold">Nombres</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-nombres" readonly>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-apellidos" class="form-label small fw-bold">Apellidos</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-apellidos" readonly>
                                                </div>
                                            </div>
                                            <!-- Cédula y Edad en una sola fila -->
                                            <div class="row g-2 mb-3">
                                                <div class="col-md-6">
                                                    <label for="consulta-cedula" class="form-label small fw-bold">Cédula</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-cedula" readonly>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-edad" class="form-label small fw-bold">Edad</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-edad" readonly>
                                                </div>
                                            </div>
                                            <!-- Rango y Sexo en una sola fila -->
                                            <div class="row g-2 mb-3">
                                                <div class="col-md-6">
                                                    <label for="consulta-rango" class="form-label small fw-bold">Rango</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-rango" readonly>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-sexo" class="form-label small fw-bold">Sexo</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-sexo" readonly>
                                                </div>
                                            </div>
                                            <!-- Fecha de Nacimiento -->
                                            <div class="mb-3">
                                                <label for="consulta-fecha-nacimiento" class="form-label small fw-bold">Fecha de Nacimiento</label>
                                                <input type="text" class="form-control form-control-sm" id="consulta-fecha-nacimiento" readonly>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="row g-3 mb-4">
                                                <div class="col-md-6">
                                                    <label for="consulta-fecha-inicio" class="form-label small fw-bold">Fecha de Inicio</label>
                                                    <div class="input-group input-group-sm">
                                                        <input type="date" class="form-control form-control-sm" id="consulta-fecha-inicio">
                                                        <button type="button" class="btn btn-sm btn-outline-secondary reset-field" data-field="consulta-fecha-inicio" title="Restablecer">
                                                            <i class="fas fa-undo"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-tipo-expediente" class="form-label small fw-bold">Tipo de Expediente</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-tipo-expediente">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="tipo-expediente" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-3 mb-4">
                                                <div class="col-md-6">
                                                    <label for="consulta-icap" class="form-label small fw-bold">ICAP (Oficina)</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-icap">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="icap" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-condicion-funcionario" class="form-label small fw-bold">Condición en el Caso</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-condicion-funcionario">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="condicion-funcionario" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-3 mb-4">
                                                <div class="col-md-6">
                                                    <label for="consulta-anio" class="form-label small fw-bold">Año</label>
                                                    <select class="form-select form-select-sm" id="consulta-anio">
                                                        <option value="">Seleccione</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-servicio-labora" class="form-label small fw-bold">Servicio Labora</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-servicio-labora">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="servicio-labora" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-3 mb-4">
                                                <div class="col-md-6">
                                                    <label for="consulta-tipo-falta" class="form-label small fw-bold">Tipo de Falta</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-tipo-falta">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="tipo-falta" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-origen-falta" class="form-label small fw-bold">Origen de la Falta</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-origen-falta">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="origen-falta" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-3 mb-4">
                                                <div class="col-md-6">
                                                    <label for="consulta-falta" class="form-label small fw-bold">Falta</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-falta">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="falta" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-denunciante" class="form-label small fw-bold">Denunciante</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-denunciante">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="denunciante" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-3 mb-4">
                                                <div class="col-md-4">
                                                    <label for="consulta-detenido" class="form-label small fw-bold">Detenido</label>
                                                    <select class="form-select form-select-sm" id="consulta-detenido">
                                                        <option value="">Seleccione</option>
                                                        <option value="Sí">Sí</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="consulta-estatus" class="form-label small fw-bold">Estatus</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-estatus">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="estatus" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-md-4">
                                                    <label for="consulta-decision" class="form-label small fw-bold">Decisión</label>
                                                    <div class="input-group input-group-sm">
                                                        <select class="form-select form-select-sm" id="consulta-decision">
                                                            <option value="">Seleccione</option>
                                                        </select>
                                                        <button type="button" class="btn btn-sm btn-outline-secondary manage-dropdown" data-field="decision" title="Editar opciones">
                                                            <i class="fas fa-pen"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row g-3 mb-4">
                                                <div class="col-md-6">
                                                    <label for="consulta-expediente-penal" class="form-label small fw-bold">Expediente Penal</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-expediente-penal" readonly>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-expediente-numero" class="form-label small fw-bold">Expediente Número</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-expediente-numero" readonly>
                                                </div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="consulta-resena-caso" class="form-label small fw-bold">Reseña del Caso</label>
                                                <textarea class="form-control form-control-sm" id="consulta-resena-caso" rows="2" readonly></textarea>
                                            </div>
                                            <div class="mb-3">
                                                <label for="consulta-causa" class="form-label small fw-bold">Causa</label>
                                                <textarea class="form-control form-control-sm" id="consulta-causa" rows="2" readonly></textarea>
                                            </div>
                                            <div class="row g-3">
                                                <div class="col-md-6">
                                                    <label for="consulta-registrado-por" class="form-label small fw-bold">Registrado por Sustanciador</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-registrado-por" readonly>
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="consulta-remision" class="form-label small fw-bold">Remisión</label>
                                                    <input type="text" class="form-control form-control-sm" id="consulta-remision" readonly>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-4 pt-3 border-top">
                                        <button type="button" class="btn btn-outline-secondary btn-sm" id="btn-reset-consulta">
                                            <i class="fas fa-redo me-1"></i>Limpiar
                                        </button>
                                        <button type="button" class="btn btn-primary btn-sm px-4" id="btn-update-expediente">
                                            <i class="fas fa-save me-1"></i>Actualizar Expediente
                                        </button>
                                    </div>
                                </form>
                            </div>
                            
                            <!-- Mensaje cuando no hay resultados -->
                            <div id="no-results" class="text-center py-5" style="display: none;">
                                <i class="fas fa-search" style="font-size: 4rem; color: #0066CC; opacity: 0.3;"></i>
                                <h3 class="mt-4" style="color: #6c757d;">No se encontraron expedientes</h3>
                                <p class="text-muted mt-2">No se encontró ningún expediente con la cédula proporcionada. Verifique el número e intente nuevamente.</p>
                            </div>
                        </div>
                    </div>
                `;
                
                // Inicializar elementos de consulta
                initConsultaElements();
                
                // Configurar eventos
                setTimeout(() => {
                    if (btnSearchExpediente) {
                        btnSearchExpediente.addEventListener('click', searchExpediente);
                    }
                    if (searchCedula) {
                        searchCedula.addEventListener('keypress', function(e) {
                            if (e.key === 'Enter') searchExpediente();
                        });
                    }
                    if (btnResetConsulta) {
                        btnResetConsulta.addEventListener('click', resetConsultaForm);
                    }
                    if (btnUpdateExpediente) {
                        btnUpdateExpediente.addEventListener('click', updateExpediente);
                    }
                    
                    // Configurar botones de administración de desplegables
                    document.querySelectorAll('#consulta-content .manage-dropdown').forEach(button => {
                        button.addEventListener('click', async function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            const field = this.getAttribute('data-field');
                            if (field) {
                                await showManageDropdownModal(field);
                            }
                        });
                    });
                    
                    // Cargar opciones para los desplegables
                    loadConsultaDropdownOptions();
                    
                    console.log('Pestaña de consulta creada manualmente');
                }, 300);
            }
        }, 2000);
    }
}

// Función para asegurar que la pestaña de consulta esté lista
function ensureConsultaTabReady() {
    // Verificar si la pestaña de consulta existe
    const consultaTab = document.getElementById('consulta-content');
    if (!consultaTab) return;
    
    // Si la pestaña está visible pero vacía, inicializar
    if (consultaTab.style.display !== 'none' && consultaTab.innerHTML.trim() === '') {
        initializeConsultaTab();
    }
    
    // Verificar periódicamente si la pestaña de consulta está vacía
    const checkInterval = setInterval(() => {
        const consultaTab = document.getElementById('consulta-content');
        if (consultaTab && consultaTab.innerHTML.trim() === '') {
            console.log('La pestaña de consulta está vacía. Intentando reconstruirla...');
            fixConsultaTabLoadingIssue();
            clearInterval(checkInterval);
        }
    }, 1500);
    
    // Detener la verificación después de 10 segundos
    setTimeout(() => {
        clearInterval(checkInterval);
    }, 10000);
}

// Exponer las funciones necesarias al ámbito global
window.initializeConsultaTab = initializeConsultaTab;
window.fixConsultaTabLoadingIssue = fixConsultaTabLoadingIssue;
window.ensureConsultaTabReady = ensureConsultaTabReady;
window.searchExpediente = searchExpediente;
window.updateExpediente = updateExpediente;
window.resetConsultaForm = resetConsultaForm;
window.loadConsultaDropdownOptions = loadConsultaDropdownOptions;
