import { IsString, IsNotEmpty, Length, IsEmail } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(3, 30)
    readonly name: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string
}
