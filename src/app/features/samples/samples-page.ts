import { Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NewSampleDialog } from '../../shared/dialogs/new-sample-dialog';
import { UploadApprovalDialog } from '../../shared/dialogs/upload-approval-dialog';

type SampleTab = 'active' | 'resolved' | 'approvals';
type ResolutionFilter = 'approved' | 'rejected';
type SampleStatus =
  | 'Todos los estados'
  | 'Creada'
  | 'Enviada a Vendedor'
  | 'Recibida por Vendedor'
  | 'Entregada a Cliente'
  | 'En Seguimiento'
  | 'Rechazada';

@Component({
  selector: 'app-samples-page',
  imports: [MatIconModule, NewSampleDialog, UploadApprovalDialog],
  templateUrl: './samples-page.html'
})
export class SamplesPage {
  readonly selectedTab = signal<SampleTab>('active');
  readonly resolutionFilter = signal<ResolutionFilter>('approved');
  readonly statusFilter = signal<SampleStatus>('Todos los estados');
  readonly isNewSampleOpen = signal(false);
  readonly isApprovalUploadOpen = signal(false);

  readonly tabs: { id: SampleTab; label: string; icon: string }[] = [
    { id: 'active', label: 'Muestras Activas', icon: 'science' },
    { id: 'resolved', label: 'Muestras Resueltas', icon: 'handshake' },
    { id: 'approvals', label: 'Planillas de Aprobacion', icon: 'verified' }
  ];

  readonly resolutionFilters: { id: ResolutionFilter; label: string }[] = [
    { id: 'approved', label: 'Aprobadas' },
    { id: 'rejected', label: 'Rechazadas' }
  ];

  readonly statuses: SampleStatus[] = [
    'Todos los estados',
    'Creada',
    'Enviada a Vendedor',
    'Recibida por Vendedor',
    'Entregada a Cliente',
    'En Seguimiento',
    'Rechazada'
  ];

  readonly emptyMessage = computed(() =>
    this.resolutionFilter() === 'approved' ? 'No hay muestras resueltas.' : 'No hay muestras rechazadas.'
  );

  openNewSample(): void {
    this.isNewSampleOpen.set(true);
  }

  openApprovalUpload(): void {
    this.isApprovalUploadOpen.set(true);
  }

  closeDialogs(): void {
    this.isNewSampleOpen.set(false);
    this.isApprovalUploadOpen.set(false);
  }
}
