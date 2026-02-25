import { Injectable, signal, Type } from '@angular/core';


export interface ModalConfig<T = any> {
  component: Type<T>;
  data?: any
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {

  // private _isOpen = signal(false);
  // readonly isOpen = this._isOpen.asReadonly();

  // open() : void {
  //   this._isOpen.set(true);
  // }

  // close() : void{
  //   this._isOpen.set(false);
  // }

  private _modalStack = signal<ModalConfig[]>([]);

  readonly modalStack = this._modalStack.asReadonly();

  open<T>(component: Type<T>, data?: any) : void {
    this._modalStack.update(stack=>[
      ...stack,
      {
        component,
        data
      }
    ])
  }

  closeTop() : void{
    this._modalStack.update(stack=>stack.slice(0, -1));
  }

  
}
