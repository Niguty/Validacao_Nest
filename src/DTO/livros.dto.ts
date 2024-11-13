import { ArrayMinSize, IsNotEmpty, IsNotEmptyObject, IsNumber, isNumber, IsPositive, isPositive, IsString, MaxLength, MinLength, ValidateNested,} from "class-validator";
import { autorDTO } from "./autor.dto";
import { Type } from "class-transformer";

export class livroDTO {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly nome: string;

    @IsNotEmpty()
    @ArrayMinSize(1)
    @ValidateNested({each:true})
    @Type(() => autorDTO)
    readonly autor: autorDTO[];

    @IsNotEmpty()
    @IsString()
    @MinLength(1)
    @MaxLength(100)
    readonly idioma: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly anoPublicacao: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly isbn: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly paginas: number;

}