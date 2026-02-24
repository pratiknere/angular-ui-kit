import { ChangeDetectionStrategy, Component, Input } from '@angular/core';


export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ButtonComponent {

  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled: boolean = false;

  get classes() : string {
    return `btn btn-${this.variant} btn-${this.size}`;
  }
  

}
