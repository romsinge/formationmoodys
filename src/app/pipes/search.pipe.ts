import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], searchString: string): Product[] {
    return products.filter(product => product.title.toLowerCase().includes(searchString.toLowerCase()))
  }

}
