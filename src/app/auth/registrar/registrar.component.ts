import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup;
  ngOnInit(): void {
    this.form = this.fb.group({
      nombres: [null],
      apellidos: [null],
      correo: [null],
      password: [null],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
