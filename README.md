<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invitación Vaquera</title>
   <styles>
     /* Estilos para los botones */
.button-container {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
    flex-wrap: wrap;
}

.button {
    background-color: #ffffff;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    text-transform: uppercase;
}

.button:hover {
    background-color: #000000;
    transform: scale(1.05);
}

/* Animaciones */
@keyframes openEnvelope {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
}

@keyframes flapOpen {
    0% { transform: rotateX(0); }
    100% { transform: rotateX(-180deg); }
}

@keyframes fadeIn {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
}

.countdown-timer {
    text-align: center;
    background: white;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: 30px;
}

#timer {
    font-size: 24px;
    margin-top: 5px;
}

/* styles.css */
#cont {
    font-family: 'Georgia', serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0e6d2; /* Color de fondo suave */
}

.countdown-timer {
    text-align: center;
    background: #f9f3e9; /* Color de fondo del contenedor */
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    border: 5px solid #8c6b4f; /* Borde con color marrón */
    max-width: 400px;
}

#timer {
    font-size: 32px;
    color: #4a3d2e; /* Color del texto del temporizador */
    font-weight: bold;
}

#timer span {
    display: inline-block;
    padding: 10px 15px;
    margin: 5px;
    border: 2px solid #8c6b4f; /* Borde de los números */
    border-radius: 10px;
    background-color: #fff; /* Fondo blanco para los números */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

#timer span:hover {
    background-color: #e7d8c333; /* Cambio de color al pasar el mouse */
}
/* Estilos para el audio */
.audio-container {
    margin-bottom: 20px;
    background-color: rgba(0, 0, 0, 0);
    
}

.audio-container audio {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
}

/* Estilos para el mapa */
.map-container {
    margin-bottom: 20px;
}

.map-container iframe {
    width: 100%;
    height: 200px;
    border: none;
}
@media screen and (max-width: 768px) {
    .container {
        width: 90%;
        max-width: 400px;
    }

    .audio-container audio {
        max-width: 250px;
    }

    .map-container iframe {
        height: 250px;
    }
    .timer {
        max-width: 100px;
    }
    
    #timer span {
        padding: 5px 9px;
    }

}

@media screen and (max-width: 500px) {
    .container {
        width: 85%;
        max-width: 320px;
    }

   
    .audio-container audio {
        max-width: 220px;
    }

    .map-container iframe {
        height: 280px;
    }
    .timer {
        max-width: 3px;
    }
    
    #timer span {
        padding: 1px 2px;
    }
}
@media screen and (max-width: 400px) {
    .container {
        width: 85%;
        max-width: 320px;
    }

   
    .audio-container audio {
        max-width: 220px;
    }

    .map-container iframe {
        height: 280px;
    }
    .timer {
        max-width: 1px;
    }
    
    #timer span {
        padding: 1px 2px;
    }
}
/* Para teléfonos pequeños (menos de 375px) */
@media screen and (max-width: 375px) {
    .container {
        width: 80%;
        max-width: 570px;
    }

    .audio-container audio {
        max-width: 200px;
    }

    .map-container iframe {
        height: 240px;
    }
    .timer {
        max-width: 10px;
    }
    
    #timer span {
        padding: 1px 2px;
    }
}

/* Para dispositivos extremadamente pequeños (menos de 320px) */
@media screen and (max-width: 370px) {
    .container {
        width: 80%;
        max-width: 300px;
    }

    .audio-container audio {
        max-width: 180px;
    }

    .map-container iframe {
        height: 260px;
    }
    .timer {
        max-width: 7px;
    }
    
    #timer span {
        padding: 1px 2px;
    }
}

   </styles>
</head>
<body>
    <div class="container">
        <div class="envelope" id="envelope">
            <div class="flap"></div>
            <div class="content">
                <h1 class="title">Carlos fest</h1>
                <div class="audio-container">
                    <img src="abuelo.jpg"  class="party-image">
                    <audio preload="auto" controls>
                        <source src="cancionn.mp3" type="audio/mpeg">

                    </audio>
                </div>
                <p>¡Te espero en mi fiesta!</p>
                <p>¡No te la pierdas!ven a festejar comigo mi cumpleaños,te espero con mucho gusto a pasar un momento muy agradable </p>
                <br>
                <br>
                <p><strong>El día: </strong> 09 de noviembre de 2024  7:00 PM</p> 
                <button id="add-to-calendar">Añadir al Calendario</button>
                <br><br>
                <script>
                    document.addEventListener('DOMContentLoaded', () => {
                        const addToCalendarButton = document.getElementById('add-to-calendar');
                        const openMapButton = document.getElementById('open-map');
            
                        // Añadir evento para el botón "Añadir al Calendario"
                        addToCalendarButton.addEventListener('click', () => {
                            const eventTitle = "Carlos fest";
                            const eventDetails = "¡Te esperamos en la fiesta!";
                            const eventLocation = "Las Carabinas";
                            const startDate = "20241109T190000Z"; // 9 de noviembre de 2024, 7:00 PM UTC
                            const endDate = "20241109T210000Z";   // 9 de noviembre de 2024, 9:00 PM UTC
            
                            const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startDate}/${endDate}&details=${eventDetails}&location=${eventLocation}`;
                            window.open(calendarUrl, '_blank');
                        });
            
                        // Añadir evento para el botón "Ver en Google Maps"
                        openMapButton.addEventListener('click', () => {
                            window.open('https://maps.app.goo.gl/JjtX4nvgmqkgqsqD6', '_blank');
                        });
                    });
                </script>        
                <div class="con">
                    <div id="timer">
                        <span id="days">0</span> :
                        <span id="hours"> 0</span> :
                        <span id="minutes">0</span> :
                        <span id="seconds">0</span> 
                    </div>
                </div>
                <script>
                    // script.js
                // Set the date we're counting down to
                const countDownDate = new Date("November 9, 2024 00:00:00").getTime();

                // Update the count down every 1 second
                const x = setInterval(function() {

                    // Get today's date and time
                    const now = new Date().getTime();

                    // Find the distance between now and the count down date
                    const distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    // Display the result in the elements
                    document.getElementById("days").innerHTML = days;
                    document.getElementById("hours").innerHTML = hours;
                    document.getElementById("minutes").innerHTML = minutes;
                    document.getElementById("seconds").innerHTML = seconds;

                    // If the countdown is finished, write some text
                    if (distance < 0) {
                        clearInterval(x);
                        document.getElementById("timer").innerHTML = "EXPIRED";
                    }
                }, 1000);
                </script>
                <p><strong>En las carabinas </strong></p>
                <div class="map-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.3147800087712!2d-109.8432254762987!3d27.480046605713255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c8114e4c0390d1%3A0x13e8c74e6bdb136e!2sJuan+Mungu%C3%ADa%2C+85205+La+Carabina%2C+Son.!5e0!3m2!1ses-419!2smx!4v1729972684214!5m2!1ses-419!2smx" width="300" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <button id="open-map">Ver en Google Maps</button>
               
            </div>

        </div>
    </div>

</body>
</html>
