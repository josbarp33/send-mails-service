import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { EmailService } from './email.service';
import { Response } from 'express';
import { SendMailDto } from './dto/send-mails.dto';

@Controller('email')
export class EmailController {

    constructor(
        private readonly emailService: EmailService,
    ) {}

    @Post('send')
    async sendEmail(@Body() emailDto: SendMailDto, @Res() res: Response){
        try {
            await this.emailService.sendEmail(emailDto);
            return res.status(HttpStatus.OK).json({
                message: 'Email sent successfully',
                status: 'success'
            });
        } catch (error) {
            console.error('Controller error:', error);
            
            // Determinar el tipo de error y el código de estado apropiado
            let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
            let errorMessage = 'Failed to send email';
            
            if (error.message.includes('Recipient email address is required') || 
                error.message.includes('Invalid email address format')) {
                statusCode = HttpStatus.BAD_REQUEST;
                errorMessage = error.message;
            } else if (error.message.includes('Template') && error.message.includes('not found')) {
                statusCode = HttpStatus.BAD_REQUEST;
                errorMessage = error.message;
            }
            
            return res.status(statusCode).json({
                message: errorMessage,
                error: error.message,
                status: 'error'
            });
        }
    }

}
