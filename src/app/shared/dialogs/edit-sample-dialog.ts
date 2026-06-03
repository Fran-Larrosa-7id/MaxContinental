import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {
  MockClient,
  MockSupply,
  MockUser,
  Sample,
  SampleStatus,
  StatusFilter,
  UpdateSamplePayload
} from '../../features/samples/samples.types';

@Component({
  selector: 'app-edit-sample-dialog',
  imports: [FormsModule, MatIconModule],
  templateUrl: './edit-sample-dialog.html'
})
export class EditSampleDialog {
  readonly sample = input.required<Sample>();
  readonly client = input.required<MockClient>();
  readonly supply = input.required<MockSupply>();
  readonly seller = input.required<MockUser>();
  readonly coordinator = input.required<MockUser>();
  readonly users = input.required<MockUser[]>();
  readonly statuses = input.required<StatusFilter[]>();

  readonly closed = output<void>();
  readonly saved = output<UpdateSamplePayload>();
  readonly deleteRequested = output<string>();

  readonly comment = signal('');
  readonly mentionUserId = signal('');
  readonly selectedStatus = signal<SampleStatus | ''>('');

  save(): void {
    this.saved.emit({
      id: this.sample().id,
      status: this.selectedStatus() || this.sample().status,
      comment: this.comment(),
      mentionUserId: this.mentionUserId()
    });
  }

  requestDelete(): void {
    this.deleteRequested.emit(this.sample().id);
  }

  close(): void {
    this.closed.emit();
  }
}
