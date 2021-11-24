import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMedicamento',
})
export class FilterMedicamentoPipe implements PipeTransform {
  transform(data: any[], searchText: string): any[] {
    if (!data) return data;
    if (!searchText) return data;
    return data.filter(
      ({ numeroDeDocumento, nombre, apellido }) =>
        numeroDeDocumento.toUpperCase().includes(searchText.toUpperCase()) ||
        nombre.toUpperCase().includes(searchText.toUpperCase()) ||
        apellido.toUpperCase().includes(searchText.toUpperCase())
    );
  }
}
