import { Component, OnInit,ViewChild  } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular';
   displayedColumns: string[] = ['fileName', 'extension', 'date', 'view', 'delete'];
  dataSource = new MatTableDataSource<Files>(ELEMENT_DATA);
  data = ELEMENT_DATA;
  selects: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
 
  ngAfterViewInit() {    
  this.dataSource.sort = this.sort;
  this.dataSource.sortingDataAccessor = (data, attribute) => {
    let formattedData=data[attribute]
    if(attribute=="fileName")
    {  
       formattedData=parseInt(formattedData.match(/(\d)*$/)[0]);
    }
    return formattedData;
  };
   this.dataSource.paginator = this.paginator;
}
   changeFiles(value) {
    console.log('option:', value);
    switch (parseInt(value)) {
      case 1:
        this.dataSource = new MatTableDataSource<Files>(ELEMENT_DATA);
        break;
      case 2:
        this.dataSource = new MatTableDataSource<Files>(Charts);
        break;
      case 3:
        this.dataSource = new MatTableDataSource<Files>(Documents);
        break;
      default:
        this.dataSource = new MatTableDataSource<Files>(ELEMENT_DATA);
        break;
    }
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
export interface Files {
  fileName:string;
  url:string;
  extension:string;
  date:string
}
const ELEMENT_DATA: Files[]=[
  {fileName:'Reporte1',url:'/url/to/the/file',extension:'PDF',date:'01/01/20'},
  {fileName:'Reporte2',url:'/url/to/the/file',extension:'PDF',date:'02/01/20'},
  {fileName:'Reporte3',url:'/url/to/the/file',extension:'PDF',date:'03/01/20'},
  {fileName:'Reporte4',url:'/url/to/the/file',extension:'PDF',date:'04/01/20'},
  {fileName:'Reporte5',url:'/url/to/the/file',extension:'PDF',date:'05/01/20'},
  {fileName:'Reporte6',url:'/url/to/the/file',extension:'PDF',date:'06/01/20'},
  {fileName:'Reporte7',url:'/url/to/the/file',extension:'PDF',date:'07/01/20'},
  {fileName:'Reporte8',url:'/url/to/the/file',extension:'PDF',date:'08/01/20'},
  {fileName:'Reporte9',url:'/url/to/the/file',extension:'PDF',date:'09/01/20'},
  {fileName:'Reporte10',url:'/url/to/the/file',extension:'PDF',date:'10/01/20'},
  {fileName:'Reporte11',url:'/url/to/the/file',extension:'PDF',date:'11/01/20'},
  {fileName:'Reporte12',url:'/url/to/the/file',extension:'PDF',date:'12/01/20'},
  {fileName:'Reporte13',url:'/url/to/the/file',extension:'PDF',date:'13/01/20'},
  {fileName:'Reporte14',url:'/url/to/the/file',extension:'PDF',date:'14/01/20'},
  {fileName:'Reporte15',url:'/url/to/the/file',extension:'PDF',date:'15/01/20'},
  {fileName:'Reporte16',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Reporte17',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Reporte18',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Reporte19',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},

];
const Charts: Files[]=[
  {fileName:'Chart1',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart2',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart3',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart4',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart5',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart6',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart7',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart8',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart9',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart10',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart11',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Chart12',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
];
const Documents: Files[]=[
  {fileName:'Document1',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document2',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document3',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document4',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document5',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document6',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document7',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document8',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document9',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document10',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
  {fileName:'Document11',url:'/url/to/the/file',extension:'PDF',date:'24/01/20'},
];