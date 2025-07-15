import { IsDateString, IsEnum, IsMongoId, IsNumber, IsString } from 'class-validator'
import { RequestStatus } from '../../utils/enums'

export class CreateRequestDTO {
  @IsDateString()
  date: string

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

  @IsEnum(RequestStatus)
  status: RequestStatus

  @IsMongoId()
  requester: string
}
