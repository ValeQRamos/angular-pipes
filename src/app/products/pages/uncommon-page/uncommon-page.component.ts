import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Nancy';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    (this.name = 'Valentin'), (this.gender = 'male');
  }

  // i19nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Melissa',
    'Natalia',
  ];

  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un Cliente esperando',
    '=2': 'Tenemos 2 personas esperando',
    other: 'Tenemos # clientes esperando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada',
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });
}
