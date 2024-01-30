import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsArray, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProductLocationDto } from './create-product-location.dto';
export class UpdateProductDto extends PartialType(CreateProductDto) {

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

    @IsArray({
        message: 'locationQty must be an array',
    })
    locationQty: any[];

    //@Type(() => CreateProductLocationDto)
    //locationQty: CreateProductLocationDto[];
}