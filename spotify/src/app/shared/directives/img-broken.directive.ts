import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  //EL uso de estas directivas es reemplazar una imagen rota por otra cuando  no se encuentra 
  @HostListener('error')handleError(): void {
    const elNative = this.elHost.nativeElement
    // console.log('Imagen No encontrada', this.elHost);
    elNative.src = 'https://i.imgur.com/JmLr58c.jpeg'
  }


  constructor(private elHost: ElementRef) {
   
   }

}
