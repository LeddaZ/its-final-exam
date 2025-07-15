import { IsBoolean, IsEmail, IsString, Matches, MinLength } from 'class-validator'

export class AddUserDTO {
  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsEmail()
  username: string

  @MinLength(8)
  @Matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
    message:
      'The password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special character, and be at least 8 characters long.'
  })
  password: string

  @IsBoolean()
  admin: boolean
}

export class LoginDTO {
  @IsEmail()
  username: string

  @IsString()
  password: string
}
