import { IsMongoId, IsNumber, IsString } from 'class-validator'

export class CreateRequestDTO {
  @IsMongoId()
  category: string

  @IsString()
  item: string

  @IsNumber()
  quantity: number

  @IsNumber()
  unitPrice: number

  @IsString()
  reason: string
}
