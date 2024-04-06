import { Component, OnInit } from '@angular/core'; // Ruta relativa para acceder al archivo ApiService en la misma carpeta
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  datos: any;

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getDatosSensor().subscribe(
      (data: any) => {
        this.datos = data.response;
      },
      (error: any) => {
        console.error('Error al obtener los datos del sensor:', error);
      }
    );
  }
}
