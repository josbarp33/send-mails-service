import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';


@Injectable()
export class EmailProvider {

    private transporter;

    constructor(private configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            host: this.configService.get<string>('EMAIL_HOST') || "smtp.gmail.com",
            port: this.configService.get<number>('EMAIL_PORT') || 465,
            secure: true, // SSL directo para puerto 465
            auth: {
                user: this.configService.get<string>('EMAIL_USER'),
                pass: this.configService.get<string>('EMAIL_PASS'),
            },
            tls: {
                rejectUnauthorized: false,
                minVersion: 'TLSv1.2'
            }
        });
    } 

    async sendEmail(from: string, to: string, subject: string, html: string): Promise<any> {
        try {
                // Validar que el campo 'to' no esté vacío
                if (!to || to.trim() === '') {
                throw new Error('Recipient email address is required');
            }

            // Validar formato básico de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(to.trim())) {
                throw new Error('Invalid email address format');
            }

            const info = await this.transporter.sendMail({
                from: '"Hispanos Club" <info.hispanos.club@gemail.com>',
                to: to.trim(),
                subject: subject,
                html: html,
            });

            console.log("Message sent:", info.messageId);
            return info;
        } catch (error) {
            console.error('Email sending failed:', error);
            throw error;
        }
    }

}
