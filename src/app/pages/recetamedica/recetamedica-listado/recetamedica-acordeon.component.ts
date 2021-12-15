import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recetamedica-acordeon',
  template: ` 
          <div class="table">
            <div  class="table__header">
              <div class="cell">Medico</div>
              <div class="cell">Especialidad</div>
            </div>
            <div  class="table__body">
              <div class="cell">Gonzalo Ziegler</div>
              <div class="cell">mastologia</div>
            </div>
          </div>                    
          `,
  styleUrls: ['./recetamedica-acordeon.component.css'],
})
export class RecetamedicaAcordeonComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
