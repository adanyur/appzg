import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPaciente',
})
export class FilterPacientePipe implements PipeTransform {
  transform(data: any[], searchText: string): any[] {
    if (!searchText) return data;
    console.log(searchText);
    return data.filter(({ paciente }) =>
      paciente.includes(searchText.toUpperCase())
    );
  }
}
