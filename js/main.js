// main.js
// ... código existente ...

// Inicializar la pestaña de consulta cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    // ... código existente ...
    
    // Asegurar que la pestaña de consulta esté lista
    if (typeof ensureConsultaTabReady === 'function') {
        ensureConsultaTabReady();
    }
    
    // Verificar periódicamente si la pestaña de consulta está vacía
    const checkInterval = setInterval(() => {
        const consultaTab = document.getElementById('consulta-content');
        if (consultaTab && consultaTab.innerHTML.trim() === '') {
            console.log('La pestaña de consulta está vacía. Intentando reconstruirla...');
            if (typeof fixConsultaTabLoadingIssue === 'function') {
                fixConsultaTabLoadingIssue();
            }
            clearInterval(checkInterval);
        }
    }, 1500);
    
    // Detener la verificación después de 10 segundos
    setTimeout(() => {
        clearInterval(checkInterval);
    }, 10000);
});
