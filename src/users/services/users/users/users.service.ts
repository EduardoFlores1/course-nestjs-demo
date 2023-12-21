import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {

  private fakeUsers = [
    {username: 'Eduardo Flores', email: 'eduardo@gmail.com'},
    {username: 'Juan Martinez', email: 'juan@gmail.com'},
    {username: 'Leandro Rodríguez', email: 'leandro@gmail.com'}
  ]

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(createUserDTo: CreateUserDTO) {
    this.fakeUsers.push(createUserDTo)
    return ;
  }

  fetchUserById(id: number) {
    //return {id, username: 'random', email: 'random@gmail.com'};
    return null;
  }
}
