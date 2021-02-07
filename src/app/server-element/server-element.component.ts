import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  constructor() {
    console.log('Constructor Called!');
  }
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ContentChild('contentParagraph', { static: true })
  contentParagraph: ElementRef;

  ngOnInit(): void {
    console.log(`Text Content: ${this.heading.nativeElement.textContent}`);
    console.log(
      `Text Content Paragraph: ${this.contentParagraph.nativeElement.textContent}`
    );
    console.log('ngOnInit Called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange Called!');
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck Called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit Called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called!');
  }
  ngAfterViewInit() {
    console.log(`Text Content: ${this.heading.nativeElement.textContent}`);
    console.log(
      `Text Content Paragraph: ${this.contentParagraph.nativeElement.textContent}`
    );
    console.log('ngAfterViewInit Called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called!');
  }
}
