import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '../shared/ui/button/button';
import { ModalService } from '../core/modal/modal';
import { ModalComponent } from "../shared/ui/modal/modal";

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ButtonComponent, ModalComponent],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo {

  private modalService = inject(ModalService);

  openModal() : void {
    this.modalService.open();
  }

}
