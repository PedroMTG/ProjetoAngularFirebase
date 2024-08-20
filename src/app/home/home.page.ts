import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  recado = {
    assunto:null,
    mensagem: null
  }
  // this.recado.mensagem 

  recados: any =[];
  constructor(
    public crudservice: CrudService
  ){}
  enviar(){
    this.crudservice.insert(this.recado,'recados');
  }
  
 

  carregar(){
    this.recados = [];
    this.crudservice.fetchAll('recados')
    .then((response)=>{
      this.recados = response;

    }) //tiver sucesso

    .catch((erro)=>{
      console.log(erro);
    })//ocorrer um erro

    .finally(()=>{
      console.log('processo finalizado!');
    }) // quanto finalizar a requisição
  }
  remover(id:string){
    this.crudservice.remove(id, 'recados');
    this.carregar();
  }




  
  pessoa = {
    foto:'https://professionalmoron.com/wp-content/uploads/2012/05/alpaca-985158_640.jpg',
    nome:'Leticia Foelho',
    objetivo:'Programador HTML & CSS',
    contato:{
      email:'jujaja@gbail.com',
      telefone:'99991-9999',
      github:'github.com/babayaga',
      linkedin:'linkedin.com/babayaga'
    },
    softskills:[
      'comunicação',
      'proatividade',
      'trabalho em grupo'
    ],

    formacao:[
    {
      ano_inicio:'2022',
      ano_fim:'2025',
      instituicao:'Etec Sales Gomes',
      cursos:'Técnico em Desenvolvimento de sistemas'
    },
    {
      ano_inicio:'2025',
      ano_fim:'2027',
      instituicao:'Faculdade de Tecnologia',
      cursos:'Superior em analise e desenvolvimento de sistemas'
    }
  ],
  
  projeto:[
    {
      ano:'2023',
      instituicao:'Etec Sales Gomes',
      nome_projeto: 'Etec de Portas Abertas',
      descricao:'Lorem'
    }
  ]

  }

}