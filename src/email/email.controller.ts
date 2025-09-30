import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { EmailService } from './email.service';
import { Response } from 'express';
import { SendMailDto } from './dto/send-mails.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() emailDto: SendMailDto, @Res() res: Response) {
    try {
      await this.emailService.sendEmail(emailDto);
      return res.status(HttpStatus.OK).json({
        message: 'Email sent successfully',
        status: 'success',
      });
    } catch (error: unknown) {
      console.error('Controller error:', error);

      // Determinar el tipo de error y el código de estado apropiado
      let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      let errorMessage = 'Failed to send email';

      const errorObj = error as Error;
      const errorMsg = errorObj.message || 'Unknown error';

      if (
        errorMsg.includes('Recipient email address is required') ||
        errorMsg.includes('Invalid email address format')
      ) {
        statusCode = HttpStatus.BAD_REQUEST;
        errorMessage = errorMsg;
      } else if (
        errorMsg.includes('Template') &&
        errorMsg.includes('not found')
      ) {
        statusCode = HttpStatus.BAD_REQUEST;
        errorMessage = errorMsg;
      }

      return res.status(statusCode).json({
        message: errorMessage,
        error: errorMsg,
        status: 'error',
      });
    }
  }
}
