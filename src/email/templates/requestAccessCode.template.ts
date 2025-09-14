export const fillTemplate = (variables: any = {}) => {
    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Access Email</title>
            </head>
            <body style="margin: 0; padding: 0;">
                <section style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 32px 0; width: 100%; box-sizing: border-box;">
                    <article style="max-width: 480px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.07); overflow: hidden; border: 1px solid #e3e3e3;">
                    <header style="background: linear-gradient(90deg, #ffd700, #000); color: #fff; text-align: center; padding: 24px 20px 14px 20px;">
                        <h1 style="margin: 0; font-size: 25px; letter-spacing: 1px;">Tu código de acceso temporal</h1>
                    </header>
                    <section style="padding: 24px 26px 10px 26px; color: #333; font-size: 17px; text-align: left;">
                        <p>Hola <span style="color: #ffd700; font-weight: bold;">${variables.name}</span>,</p>
                        <p>Estás solicitando acceso a tu panel de miembro en <strong>Hispanos Club</strong>.</p>
                        <p>
                        Usa el siguiente código de acceso temporal para validar tu identidad y continuar con el proceso de reserva o gestión de tus servicios:
                        </p>
                        <div style="text-align:center; margin: 24px 0;">
                        <span style="display: inline-block; background: #ffd700; color: #000; font-size: 2rem; font-weight: bold; letter-spacing: 2px; padding: 16px 32px; border-radius: 8px;">
                            ${variables.code}
                        </span>
                        </div>
                        <p style="color:#888; font-size:15px; text-align:center;">
                        Este código es válido por <strong>15 minutos</strong>. Si no lo solicitaste tú, ignora este mensaje.
                        </p>
                    </section>
                    <footer style="text-align: center; font-size: 12px; color: #777; padding: 13px 10px 7px 10px; border-top: 1px solid #e0e0e0; background-color: #fafafa;">
                        <p>&copy; 2025 Hispanos Executive Club.</p>
                        <p>¿Tienes preguntas? Contáctanos en <a href="mailto:info@hispanosclub.com" style="color: #ffd700; text-decoration: none;">info@hispanosclub.com</a></p>
                    </footer>
                    </article>
                </section>
            </body>
        </html>
    `;
}