import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {
  datos: any;

  constructor(private apiService: ApiService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.apiService.getDatosSensor().subscribe(
      (data: any) => {
        this.datos = data.response;
        this.formatDates(); // Llama al método para formatear las fechas
      },
      (error: any) => {
        console.error('Error al obtener los datos del sensor:', error);
        // Aquí puedes realizar alguna acción adicional, como mostrar un mensaje de error en la interfaz de usuario
      }
    );
  }

  formatDates() {
    // Itera sobre los datos y formatea las fechas
    this.datos.forEach((dato: any) => {
      dato.FechaHora = this.datePipe.transform(dato.FechaHora, 'dd/MM/yyyy HH:mm:ss');
    });
  }
}
