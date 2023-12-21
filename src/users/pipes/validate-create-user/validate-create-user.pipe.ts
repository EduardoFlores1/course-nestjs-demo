import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDTO, metadata: ArgumentMetadata) {

    console.log('Inside to ValidateCreateUserPipe');
    console.log(value);
    console.log(metadata);

    const parseAgeToInt = parseInt(value.age.toString());

    if(isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number!`);
      throw new HttpException(
        'Invalid data type for property age. Expect Number',
        HttpStatus.BAD_REQUEST
      );
    }

    console.log(`${parseAgeToInt} is a number. Returning...`)

    return {...value, age: parseAgeToInt};
  }
}
