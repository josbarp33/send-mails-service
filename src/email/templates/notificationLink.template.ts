interface NotificationLinkVariables {
  platformIcon?: string;
  subscriberName?: string;
  serviceName?: string;
  fechaFormateada?: string;
  horaAsesoria?: string;
  platformName?: string;
  linkConexion?: string;
  teamName?: string;
}

export const fillTemplate = (variables: NotificationLinkVariables = {}) => {
  return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Notification Posponed Email</title>
            </head>
            <body style="margin: 0; padding: 0;">
                <section style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 32px 0; width: 100%; box-sizing: border-box;">
                    <article style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 4px 16px rgba(0,0,0,0.07); overflow: hidden; border: 1px solid #e3e3e3;">
                    <header style="background: linear-gradient(90deg, #ffd700, #000); color: #fff; text-align: center; padding: 24px 20px 14px 20px;">
                        <h1 style="margin: 0; font-size: 25px; letter-spacing: 1px;">${variables.platformIcon || '🔗'} Link de Conexión</h1>
                    </header>
                    <section style="padding: 24px 26px 10px 26px; color: #333; font-size: 17px; text-align: left;">
                        <p>Hola <span style="color: #ffd700; font-weight: bold;">${variables.subscriberName || 'Usuario'}</span>,</p>
                        <p>Te enviamos el link de conexión para tu asesoría del servicio <strong>${variables.serviceName || 'N/A'}</strong>.</p>
                        
                        <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                        <h3 style="margin: 0 0 15px 0; color: #856404; font-size: 18px;">📅 Detalles de la Asesoría</h3>
                        <p style="margin: 8px 0; color: #856404;"><strong>Fecha:</strong> ${variables.fechaFormateada || 'N/A'}</p>
                        <p style="margin: 8px 0; color: #856404;"><strong>Hora:</strong> ${variables.horaAsesoria || 'N/A'}</p>
                        <p style="margin: 8px 0; color: #856404;"><strong>Plataforma:</strong> ${variables.platformName || 'N/A'}</p>
                        </div>
                        
                        <div style="background-color: #e8f5e8; border-left: 4px solid #28a745; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                        <h3 style="margin: 0 0 15px 0; color: #155724; font-size: 18px;">${variables.platformIcon || '🔗'} Conexión por ${variables.platformName || 'N/A'}</h3>
                        <p style="margin: 8px 0; color: #155724;">Haz clic en el siguiente enlace para unirte a tu asesoría:</p>
                        <div style="text-align: center; margin: 20px 0;">
                            <a href="${variables.linkConexion || '#'}" 
                            style="display: inline-block; background: #28a745; color: #fff; font-size: 16px; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none; transition: background-color 0.3s;">
                            🚀 Unirse a la Asesoría
                            </a>
                        </div>
                        <p style="margin: 8px 0; color: #155724; font-size: 14px; word-break: break-all;">
                            <strong>Link:</strong> ${variables.linkConexion || 'N/A'}
                        </p>
                        </div>

                        <div style="background-color: #f8f9fa; border-left: 4px solid #ffd700; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                        <h3 style="margin: 0 0 15px 0; color: #333; font-size: 18px;">📋 Instrucciones</h3>
                        <ul style="margin: 8px 0; color: #333; padding-left: 20px;">
                            <li style="margin: 5px 0;">Asegúrate de tener una conexión estable a internet</li>
                            <li style="margin: 5px 0;">Prueba tu micrófono y cámara antes de la reunión</li>
                            <li style="margin: 5px 0;">Únete unos minutos antes de la hora programada</li>
                            <li style="margin: 5px 0;">Si tienes problemas técnicos, contacta al responsable: <strong>${variables.teamName || 'N/A'}</strong></li>
                        </ul>
                        </div>

                        <div style="background-color: #d1ecf1; border-left: 4px solid #17a2b8; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                        <h3 style="margin: 0 0 15px 0; color: #0c5460; font-size: 18px;">💡 Consejos</h3>
                        <p style="margin: 8px 0; color: #0c5460;">• Ten preparadas tus preguntas y documentos relevantes</p>
                        <p style="margin: 8px 0; color: #0c5460;">• Busca un lugar tranquilo y bien iluminado</p>
                        <p style="margin: 8px 0; color: #0c5460;">• Mantén tu dispositivo cargado o conectado a la corriente</p>
                        </div>
                        
                        <div style="text-align: center; margin: 30px 0;">
                        <a href="https://hispanosclub.com/mi-panel" 
                            style="display: inline-block; background: #ffd700; color: #000; font-size: 16px; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none; transition: background-color 0.3s;">
                            📱 Ir a Mi Panel
                        </a>
                        </div>
                        
                        <p style="color:#888; font-size:15px; text-align:center; margin-top: 30px;">
                        <strong>Importante:</strong> Este es un mensaje automático del sistema. Por favor, no respondas directamente a este email.
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
};

export default fillTemplate;
