import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDiagnostico',
})
export class FilterDiagnosticoPipe implements PipeTransform {
  transform(data: any[], searchText: string): any[] {
    if (!data) return data;
    if (!searchText) return data;
    return data.filter(({ descripcion }) =>
      descripcion.includes(searchText.toUpperCase())
    );
  }
}
