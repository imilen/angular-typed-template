import { Directive, inject, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Context } from '../../models/context';

@Directive({
  selector: '[template]',
  exportAs: 'tpl',
  standalone: true
})
export class TemplateDirective<T> implements OnInit {
  template = input.required<T>();
  tpl = inject<TemplateRef<Context<T>>>(TemplateRef);
  vcr = inject(ViewContainerRef);

  ngOnInit(): void {
    if (this.template()) {
      this.vcr.clear();
      this.vcr.createEmbeddedView(this.tpl, {
        $implicit: this.template(),
        item: this.template()
      } as Context<T>);

    }
  }

  static ngTemplateContextGuard<T>(_dir: TemplateDirective<T>, _ctx: any): _ctx is Context<T> {
    return true;
  }

}
