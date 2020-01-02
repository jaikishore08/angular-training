import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({selector: ".changeStyle"})
export class CustomDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        renderer.setStyle(el.nativeElement,'backgroundColor', 'green')
    }

    @HostListener('click') onClick() {
        this.renderer.setStyle(this.el.nativeElement,'backgroundColor', 'yellow')
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.setStyle(this.el.nativeElement,'backgroundColor', 'orange')
    }
    @HostListener('mouseleave') onMouseleave() {
        this.renderer.setStyle(this.el.nativeElement,'backgroundColor', 'black')
    }
}