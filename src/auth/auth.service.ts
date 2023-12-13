import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'you are login';
  }
  sigup() {
    return 'you are sigup';
  }
}
