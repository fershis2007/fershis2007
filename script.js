document.addEventListener('DOMContentLoaded', () => {
    const addToCalendarButton = document.getElementById('add-to-calendar');
    const openMapButton = document.getElementById('open-map');

    // Añadir evento para el botón "Añadir al Calendario"
    addToCalendarButton.addEventListener('click', () => {
        const eventTitle = "Carlos fest";
        const eventDetails = "¡Te esperamos en la fiesta!";
        const eventLocation = "Las Carabinas";
        const startDate = "2024110919:00:00Z"; // 9 de noviembre de 2024, 7:00

        const calendarUrl = `https://calendar.google.com/calendar /render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}&details=${eventDetails}&location=${eventLocation}`;
        window.open(calendarUrl, '_blank');
    });

    // Añadir evento para el botón "Ver en Google Maps"
    openMapButton.addEventListener('click', () => {
        window.open('https://maps.app.goo.gl/JjtX4nvgmqkgqsqD6', '_blank');
    });
});