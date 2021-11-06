import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMedicamento',
})
export class FilterMedicamentoPipe implements PipeTransform {
  transform(data: any[], searchText: string): any[] {
    if (!searchText) return data;
    return data.filter(({ descripcion }) =>
      descripcion.includes(searchText.toUpperCase())
    );
  }
}