import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStruct]'
})
export class CustomStructDirective {
  hasView: boolean = false;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    @Input() set appCustomStruct(condition: boolean) {
      if (!condition && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (condition && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    }

}
