import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Directive({
  selector: '[ambHighlight]'
})
export class HighlightDirective {

  @Input('ambHighlight') color: string = ''

  ngOnInit() {
    this.color ||= 'silver'
    this.el.nativeElement.style.backgroundColor = this.color
  }

  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  handleMouseover() {
    this.el.nativeElement.style.transform = 'scale(1.1)'
  }

  @HostListener('mouseleave')
  handleMouseleave() {
    this.el.nativeElement.style.transform = ''
  }

  @HostListener('details', ['$event'])
  handleDetails(product: Product) {
    console.log('DETAILS', product)
  }

}
