import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateProductLocationDto } from './create-product-location.dto';
import { Type } from 'class-transformer';
export class CreateProductDto {
    @IsNotEmpty({
        message: 'Title is required',
    })
    name: string;

    @IsNotEmpty({
        message: 'Price is required',
    })
    price: number;

    @IsNotEmpty({
        message: 'Type is required',
    })
    type: number;

    @IsOptional()
    @IsArray({
        message: 'locationQty must be an array',
    })
    locationQty: any[];

    //@Type(() => CreateProductLocationDto)
    //locationQty: CreateProductLocationDto[];
}