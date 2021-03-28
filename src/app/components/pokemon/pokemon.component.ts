import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokemonService } from './service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: PokemonService) { 
    this.form = fb.group({
      namePokemon: ["", Validators.required]
    })
  }

  form: FormGroup; 

  ngOnInit(): void {
  }

  searchPokemon(): void{
   const name = this.form.value.namePokemon.toLowerCase();
    this.service.search(name).subscribe(result => {
      console.log(result);
    })
  }

}
