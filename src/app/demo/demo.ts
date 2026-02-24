import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '../shared/ui/button/button';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Demo {

}
