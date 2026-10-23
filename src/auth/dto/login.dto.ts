import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class loginDto {
    @IsString({ message: "L'adresse e-mail doit être une chaîne de caractères" })
    @IsEmail({}, { message: "L'adresse e-mail doit être valide" })
    @IsNotEmpty({ message: "L'adresse e-mail est obligatoire" })
    @ApiProperty({ example: 'fondateur@horizonservice.ci', description: 'Email', required: true })
    email: string;

    @IsString({ message: 'Le mot de passe doit être une chaîne de caractères' })
    @IsNotEmpty({ message: 'Le mot de passe est obligatoire' })
    @ApiProperty({ example: 'admin', description: 'Password', required: true })
    password: string;
}
