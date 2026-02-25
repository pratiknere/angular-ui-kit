import { AfterViewInit, ChangeDetectionStrategy, Component, effect, inject, ViewChild, ViewContainerRef } from '@angular/core';
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

  ngAfterViewInit() {
    effect(() => {
      const modalStack = this.modalService.modalStack();

      this.viewContainer.clear();

      if (modalStack.length > 0) {
        const topModal = modalStack[modalStack.length - 1];
        const componentRef = this.viewContainer.createComponent(topModal.component);

        if (topModal.data) {
          Object.assign(componentRef.instance, topModal.data);
        }
      }
    });
  }


  close() : void {
    this.modalService.closeTop();
  }

}
