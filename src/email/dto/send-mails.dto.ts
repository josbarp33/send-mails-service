import { IsEnum, IsNotEmpty, IsObject, IsOptional, IsString, IsEmail } from "class-validator";
import { EmailTemplate } from "../enums/template.enum";


export class SendMailDto {
    @IsString()
    @IsNotEmpty()
    from: string;
    
    @IsEmail({}, { message: 'Please provide a valid email address' })
    @IsNotEmpty()
    to: string;
    
    @IsString()
    @IsNotEmpty()
    subject: string;
    
    @IsEnum(EmailTemplate)
    @IsNotEmpty()
    template: EmailTemplate;
    
    @IsObject()
    @IsOptional()
    data: Object;
}