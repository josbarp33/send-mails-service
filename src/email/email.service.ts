import { Injectable } from '@nestjs/common';
import { EmailProvider } from './email';
import { SendMailDto } from './dto/send-mails.dto';
import { fillTemplate as welcomeTemplate } from './templates/welcome.template';
import { fillTemplate as requestAccessCodeTemplate } from './templates/requestAccessCode.template';
import { fillTemplate as requestTemplate } from './templates/request.template';
import { fillTemplate as accessCodeTEmplate } from './templates/accessCode.template';
import { fillTemplate as notificationPosponedTemplate } from './templates/notificationPosponed.template';
import { fillTemplate as notificationLinkTemplate } from './templates/notificationLink.template';
import { fillTemplate as notificationAttendedTemplate } from './templates/notificationAttended.template';
import { fillTemplate as notificationExpiringTemplate } from './templates/notificationExpiring.template';

@Injectable()
export class EmailService {
  constructor(private readonly emailProvider: EmailProvider) {}

  async sendEmail(emailDto: SendMailDto): Promise<void> {
    try {
      const { from, to, subject } = emailDto;
      const html = this.getTemplate(emailDto.template, emailDto.data);
      await this.emailProvider.sendEmail(from, to, subject, html);
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      const errorObj = error as Error;
      throw new Error(
        `Failed to send email: ${errorObj.message || 'Unknown error'}`,
      );
    }
  }

  getTemplate(
    templateName: string,
    variables: Record<string, any> = {},
  ): string {
    const template = this.getTemplateFile(templateName);
    const html = template(variables || {});
    return html;
  }

  private getTemplateFile(template: string) {
    switch (template) {
      case 'welcome':
        return welcomeTemplate;
      case 'requestAccessCode':
        return requestAccessCodeTemplate;
      case 'request':
        return requestTemplate;
      case 'accessCode':
        return accessCodeTEmplate;
      case 'notificationPosponed':
        return notificationPosponedTemplate;
      case 'notificationLink':
        return notificationLinkTemplate;
      case 'notificationAttended':
        return notificationAttendedTemplate;
      case 'notificationExpiring':
        return notificationExpiringTemplate;
      default:
        throw new Error(`Template ${template} not found`);
    }
  }
}
