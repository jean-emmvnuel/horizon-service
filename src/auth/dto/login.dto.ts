import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class loginDto {
    @IsString({ message: 'Email doit être une chaîne de caractères' })
    @IsEmail({}, { message: 'Email doit être une adresse email valide' })
    @IsNotEmpty({ message: 'Email est requis' })
    @ApiProperty({ example: 'fondateur@horizonservice.ci', description: 'Email', required: true })
    email: string;

    @IsString({ message: 'Password doit être une chaîne de caractères' })
    @IsNotEmpty({ message: 'Password est requis' })
    @ApiProperty({ example: 'admin', description: 'Password', required: true })
    password: string;
}
