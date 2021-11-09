import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPaciente',
})
export class FilterPacientePipe implements PipeTransform {
  transform(data: any[], searchText: string): any[] {
    if (!data) return data;
    if (!searchText) return data;
    return data.filter(({ paciente }) =>
      paciente.includes(searchText.toUpperCase())
    );
  }
}
