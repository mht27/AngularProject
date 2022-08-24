import { style } from "@angular/animations";
import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appBasicHighlight]'
})
export class BasicHightLightDirective implements OnInit{

    @Input() defaultColor:string = 'blue'
    @Input() highLightColor:string = 'yellow'

    @HostBinding('style.backgroundColor')
    backgroundColor!: string;

    constructor(private elementRef:ElementRef,private renderer:Renderer2){

    }

    @HostListener('mouseenter') mouseover(eventData:Event){
        // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue')
        this.backgroundColor = this.highLightColor
    }

    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
    }

    ngOnInit(): void {
        this.backgroundColor = this.defaultColor;
        this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue')
        // this.elementRef.nativeElement.style.backgroundColor = 'green'
    }
}