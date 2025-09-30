import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailProvider {
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    this.transporter = (nodemailer as any).createTransport({
      host: this.configService.get<string>('EMAIL_HOST') || 'smtp.gmail.com',
      port: this.configService.get<number>('EMAIL_PORT') || 465,
      secure: true, // SSL directo para puerto 465
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2',
      },
    });
  }

  async sendEmail(
    from: string,
    to: string,
    subject: string,
    html: string,
  ): Promise<nodemailer.SentMessageInfo> {
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

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const info = await (this.transporter as any).sendMail({
        from: '"Hispanos Club" <info.hispanos.club@gemail.com>',
        to: to.trim(),
        subject: subject,
        html: html,
      });

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      console.log('Message sent:', info.messageId);
      return info;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  }
}
