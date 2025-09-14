export const fillTemplate = async (variables: any = {}) => {

    const servicesIncludesHtml = await variables.servicesIncludes.map(element => {
        return `
            <li style="margin-bottom: 10px; padding-left: 24px; position: relative; font-size: 15px;">
                <span style="position: absolute; left: 0; top: 0; color: #d4af37; font-size: 15px;">✔</span>
                <strong>${element.title}</strong><br />${element.description}
            </li>
        `;
    }).join(''); 

    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome Email</title>
            </head>
            <body style="margin: 0; padding: 0;">
                <section style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 32px 0; width: 100%; box-sizing: border-box;">
                    <article style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.07); overflow: hidden; border: 1px solid #e3e3e3;">
                        <header style="background: linear-gradient(90deg, #ffd700, #000); color: #fff; text-align: center; padding: 28px 20px 18px 20px;">
                            <h1 style="margin: 0; font-size: 28px; letter-spacing: 1px;">"Emigrar no es solo cambiar de lugar, es cambiar de vida. Quien se atreve a empezar de nuevo descubre que no hay límites para sus sueños."</h1>
                            <p style="margin: 6px 0 0 0; font-size: 18px; color: #fffbe5; font-weight: 600;">Erika Raigoso</p>
                        </header>
                        <section style="padding: 30px 28px 15px 28px; color: #333; font-size: 18px; text-align: left;">
                            !Hola <span style="color: #ffd700; font-weight: bold; font-size: 22px;">${variables.name}</span>!,<br><br>
                            ¡Primero, queremos felicitarte. Tomar la decisión de emigrar y construir una nueva vida no es sencillo; requiere valor, determinación y un gran corazón. Y ahora, al unirte a Hispanos Club, has dado otro paso valiente: rodearte de una comunidad que está aquí para acompañarte y apoyarte en cada etapa de tu camino en España!<br>
                            <br>
                            Como nuevo miembro, queremos invitarte a agendar tu primera sesión de consultoría personalizada. Podrás elegir el tema que más te interese y reservar tu cita y máximo en en las próximas 48 horas recibirás tu consultoría online.<br>
                        </section>
                        <section style="background-color: #fffbe5; margin: 20px 28px; border-radius: 7px; padding: 18px 20px;">
                            <h2 style="color: #d4af37; font-size: 17px; font-weight: bold; margin-bottom: 8px;">Servicios seleccionados:</h2>
                            <ul style="padding-left: 0; margin: 0; list-style: none;">
                                ${servicesIncludesHtml}
                            </ul>
                        </section>
                        <div style="text-align: center; margin: 32px 0 24px 0;">    
                            <p style="font-size: 16px; color: #333;">💡 Tu primera sesión es parte de tu membresía. Nuestro objetivo es que tengas toda la información y el apoyo que necesitas para avanzar con confianza.</p>
                            <a href="https://hispanosclub.com/mi-panel" target="_blank" rel="noopener noreferrer"
                                style="
                                    background-color: #ffd700;
                                    color: #000 !important;
                                    padding: 14px 38px;
                                    text-decoration: none;
                                    border-radius: 4px;
                                    font-weight: bold;
                                    font-size: 17px;
                                    box-shadow: 0 2px 6px rgba(212,175,55,0.09);
                                    display: inline-block;
                                    transition: background 0.2s;
                                "
                            >Agenda tu sesión aquí</a>
                        </div>
                        <footer style="text-align: center; font-size: 12px; color: #777; padding: 15px 10px 8px 10px; border-top: 1px solid #e0e0e0; background-color: #fafafa;">
                            <p>Bienvenido/a a tu nueva casa en España. Con Hispanos Club nunca estarás solo/a.
                                <br />¡Gracias por confiar en nosotros!
                                Un abrazo,<br />
                                <br />El equipo de Hispanos Club
                            </p>
                            <p>&copy; 2025 Hispanos Executive Club. Todos los derechos reservados.</p>
                        </footer>
                    </article>
                </section>
            </body>
        </html>
    `;
}