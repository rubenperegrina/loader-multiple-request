import { Component, inject } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
	selector: 'app-demo-request',
	templateUrl: './demo-request.component.html',
	styleUrls: ['./demo-request.component.scss']
})
export class DemoRequestComponent {
	_apiService = inject(ApiService);

	clickRequest(): void {
		this._apiService.getDitto().subscribe();
		this._apiService.getCharizard().subscribe();
		this._apiService.getDitto().subscribe();
	}
}