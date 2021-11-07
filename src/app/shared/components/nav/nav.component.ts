import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService, MessagesModalService } from '../../../core/services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(
    private _StorageService: StorageService,
    private _MessagesModalService: MessagesModalService
  ) {}
  userName: string;
  ngOnInit(): void {
    this.userName = this._StorageService.userName;
  }

  logout(): void {
    this._MessagesModalService.messageConfirmacion();
  }
}
