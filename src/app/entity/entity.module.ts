import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityRoutingModule } from './entity-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { QueryComponent } from './query/query.component';
import { SaveComponent } from './save/save.component';
import { RelationshipsComponent } from './relationships/relationships.component';
import { MigrationsComponent } from './migrations/migrations.component';

@NgModule({
  declarations: [
    StartComponent,
    QueryComponent,
    SaveComponent,
    RelationshipsComponent,
    MigrationsComponent
  ],
  imports: [
    CommonModule,
    EntityRoutingModule,
    SharedModule
  ]
})
export class EntityModule { }
