import { Injectable } from '@nestjs/common';

@Injectable()
export class ValueService {

    get username() {
        return 'sa';
    }
}
