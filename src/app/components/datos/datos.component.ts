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
        this.formatDates(); // Llama al método para formatear las fechas
      },
      (error: any) => {
        console.error('Error al obtener los datos del sensor:', error);
      }
    );
  }

  formatDates() {
    // Itera sobre los datos y formatea las fechas
    this.datos.forEach((dato: any) => {
      dato.FechaHora = new Date(dato.FechaHora).toLocaleDateString('es-ES', { 
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      });
    });
  }
}