
export interface IStudents {
    apellido: string;
    nombre: string;
    parcialUno: number;
    parcialDos: number;
    final: number;
    aprobado: boolean;
}

export class Students implements IStudents {

    constructor(
      public apellido: string,
      public nombre: string,
      public parcialUno: number,
      public parcialDos: number,
      public final: number= 0,
      public aprobado: boolean=true
    ){}

    increment(){
      /* this.final = this.final + 1; */
      if (this.final < 10){
        this.final = this.final + 1;
      } 
    }
    decrement(){
      /* this.final = this.final - 1; */
      if (this.final > 0){
        this.final = this.final - 1;
      } 
    }
    aprobar(){
      this.aprobado = !this.aprobado;
    }
  
  }