import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from "class-validator";


export class registerDto {


    @ApiProperty({
        example: 'Doe',
        description: 'Nom de l\'utilisateur',
        required: true,
        minLength: 3,
        maxLength: 50,
    })
    @IsString({ message: 'Le nom d\'utilisateur doit etre une chaine de caracteres' })
    @IsNotEmpty({ message: 'Le nom d\'utilisateur est obligatoire' })
    username: string;


    @ApiProperty({
        example: 'john.doe@example.com',
        description: 'Email de l\'utilisateur',
        required: true,
    })
    @IsString({ message: 'L\'email doit etre une chaine de caracteres' })
    @IsNotEmpty({ message: 'L\'email est obligatoire' })
    @IsEmail({
        blacklisted_chars: "/,?{}[]#$%^&*()",
    }, { message: 'L\'email doit etre un email valide' })
    email: string;


    @ApiProperty({
        example: 'password123',
        description: 'Mot de passe de l\'utilisateur',
        required: true,
        minLength: 8,
        maxLength: 50,
    })
    @IsString({ message: 'Le mot de passe doit etre une chaine de caracteres' })
    @MinLength(12, { message: 'Le mot de passe doit contenir au moins 12 caracteres' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/, {
        message: 'Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial'
    })
    password: string;
}