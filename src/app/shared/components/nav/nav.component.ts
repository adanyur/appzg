import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private _StorageService: StorageService) {}
  userName: string;
  ngOnInit(): void {
    this.userName = this._StorageService.userName;
  }
}
