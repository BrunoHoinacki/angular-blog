import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:String="https://wallpaperaccess.com/full/2291206.png"
  contentTitle:String="Noticia ex"
  contentDescription:String="bla bla bla bla bla"

  constructor(){}

  ngOnInit(): void{
  }

}
