interface NotificationExpiringVariables {
  teamName?: string;
  servicio?: string;
  applicationDate?: string;
  descripcion?: string;
  suscriber?: string;
  scheduleId?: string;
}

export const fillTemplate = (variables: NotificationExpiringVariables = {}) => {
  return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Notification Posponed Email</title>
            </head>
            <body style="margin: 0; padding: 0;">
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333;">Recordatorio de Schedule</h2>
                    <p>Hola <strong>${variables.teamName || 'Usuario'}</strong>,</p>
                    <p>Te recordamos que tienes un schedule próximo a cumplir 48 horas:</p>
                    
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #555;">Detalles del Schedule:</h3>
                    <p><strong>Servicio:</strong> ${variables.servicio || 'N/A'}</p>
                    <p><strong>Fecha de Aplicación:</strong> ${variables.applicationDate || 'N/A'}</p>
                    <p><strong>Descripción:</strong> ${variables.descripcion || 'N/A'}</p>
                    <p><strong>Suscriptor:</strong> ${variables.suscriber || 'N/A'}</p>
                    <p><strong>ID del Schedule:</strong> ${variables.scheduleId || 'N/A'}</p>
                    </div>
                    
                    <p>Por favor, asegúrate de estar preparado para este schedule.</p>
                    
                    <p style="color: #666; font-size: 12px;">
                    Este es un mensaje automático del sistema de Hispano Club.
                    </p>
                </div>
            </body>
        </html>
    `;
};
