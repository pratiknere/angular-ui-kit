import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ModalService } from '../../../core/modal/modal';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'ui-modal',
  standalone: true,
  imports: [ɵEmptyOutletComponent],
  templateUrl: './modal.html',
  styleUrl: './modal.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {

  private modalService = inject(ModalService);

  isOpen = this.modalService.isOpen;

  close() : void {
    this.modalService.close();
  }

}
