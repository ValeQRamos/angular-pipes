import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, PrimeNgModule, AppRoutingModule],
  exports: [MenuComponent],
})
export class SharedModule {}
