import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseDatePipePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return new Date(value);
  }
}
