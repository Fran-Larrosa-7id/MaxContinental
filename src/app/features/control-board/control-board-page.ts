import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

type ActivityRange = 'Hoy' | 'Esta Semana' | 'Este Mes' | 'Historico';

@Component({
  selector: 'app-control-board-page',
  imports: [MatIconModule],
  templateUrl: './control-board-page.html'
})
export class ControlBoardPage {
  readonly selectedRange = signal<ActivityRange>('Este Mes');
  readonly reportFilesLabel = signal('No se eligio ningun archivo');

  readonly metrics = [
    { label: 'Total Muestras', value: 0, color: '#3b82f6', valueColor: '#082653' },
    { label: 'En Seguimiento / Activas', value: 0, color: '#facc15', valueColor: '#b77900' },
    { label: 'Aprobadas', value: 0, color: '#22c55e', valueColor: '#16a34a' }
  ];

  readonly ranges: ActivityRange[] = ['Hoy', 'Esta Semana', 'Este Mes', 'Historico'];

  setReportFiles(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (!files?.length) {
      this.reportFilesLabel.set('No se eligio ningun archivo');
      return;
    }

    this.reportFilesLabel.set(files.length === 1 ? files[0].name : `${files.length} archivos seleccionados`);
  }
}
