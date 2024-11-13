import { IsNotEmpty, IsString, MaxLength, MinLength, } from "class-validator";

export class autorDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly nome: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly sobrenome: string;
}