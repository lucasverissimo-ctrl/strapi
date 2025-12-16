import { Component, Input } from '@angular/core';
import { FormInput } from '@app/shared/form-input/form-input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-block-contact-form',
  imports: [FormInput, ReactiveFormsModule],
  templateUrl: './block-contact-form.html',
  styleUrl: './block-contact-form.scss',
})
export class BlockContactForm {
  @Input() data: any;

  ngOnInit(): void {
    console.log('BlockContactForm data:', this.data);
  }
}
