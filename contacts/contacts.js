// Lista de contactos básica
const contacts = [
    {
        name: "Juan Pérez",
        email: "juan.perez@email.com",
        phone: "+34 123 456 789"
    },
    {
        name: "María García", 
        email: "maria.garcia@email.com",
        phone: "+34 987 654 321"
    },
    {
        name: "Carlos López",
        email: "carlos.lopez@email.com", 
        phone: "+34 555 123 456"
    }
];

// Función para mostrar contactos
function displayContacts() {
    console.log("Contactos cargados:", contacts.length);
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    displayContacts();
    console.log("Sistema de contactos inicializado");
});
