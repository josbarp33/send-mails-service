import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailProvider } from './email';

@Module({
  controllers: [EmailController],
  providers: [EmailService, EmailProvider]
})
export class EmailModule {}
