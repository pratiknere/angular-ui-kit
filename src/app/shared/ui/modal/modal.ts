import { AfterViewInit, ChangeDetectionStrategy, Component, effect, ElementRef, HostListener, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../../core/modal/modal';


@Component({
  selector: 'ui-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements AfterViewInit {

   modalService = inject(ModalService);

  @ViewChild('modalHost', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  @ViewChild('modalcontainer')modalContainer! : ElementRef;

  ngAfterViewInit() {
    effect(() => {
      const modalStack = this.modalService.modalStack();

      this.viewContainer.clear();

      if (modalStack.length > 0) {
        const topModal = modalStack[modalStack.length - 1];
        const componentRef = this.viewContainer.createComponent(topModal.component);
        document.body.setAttribute('inert', '');

        if (topModal.data) {
          Object.assign(componentRef.instance, topModal.data);
        }
      }
      else{
        document.body.removeAttribute('inert');
      }
    });

    setTimeout(()=>{
      const modalElement = document.querySelector('.modal') as HTMLElement;
      if(modalElement){
        modalElement.focus();
      }
    })
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    const modalStack = this.modalService.modalStack();
    if (modalStack.length > 0) {
      this.modalService.closeTop();
    }
    }

  close() : void {
    this.modalService.closeTop();
  }

}
