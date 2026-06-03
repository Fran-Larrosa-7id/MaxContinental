import { Component, output, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upload-approval-dialog',
  imports: [MatIconModule],
  templateUrl: './upload-approval-dialog.html'
})
export class UploadApprovalDialog {
  readonly closed = output<void>();
  readonly selectedFile = signal<File | null>(null);
  readonly fileName = signal('No se eligio ningun archivo');

  setFile(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0] ?? null;
    this.selectedFile.set(file);
    this.fileName.set(file?.name ?? 'No se eligio ningun archivo');
  }

  close(): void {
    this.closed.emit();
  }
}
