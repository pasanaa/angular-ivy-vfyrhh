import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataListComponent } from "./data-list/data-list.component";
import { SingleDataComponent } from "./single-data/single-data.component";
import { CatsService } from "./cats.service";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http'; 

const routes: Routes = [
  {
    path: "",
    component: DataListComponent
  },
  {
    path: ":id",
    component: SingleDataComponent
  }
];

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [DataListComponent, SingleDataComponent],
  providers: [CatsService]
})
export class CatsModule {}
