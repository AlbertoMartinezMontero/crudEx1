import { AddEvent, ConfermaEvent, ModificaEvent, RicercaEvent, AnnullaEvent, RimuoviEvent, SelezionaEvent } from './automa/eventi';
import { Automabile } from './automa/state';
import { Automa } from './automa/automa';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from './prodotto';
import { Event } from './automa/event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Automabile, OnInit {
  prodotto: Prodotto = new Prodotto();
  prodotti: Prodotto[] = [];
  searchCriterion: string = "";
  automa: Automa;

  // proprietà gui
  buttonNuovaVisible: boolean = false;
  formDivVisible: boolean = false;
  campiNonEditabili: boolean = false;
  confAnnVisible: boolean = false;
  searchVisible: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // TODO: caricare lista prodotti all'inizio
    this.aggiorna();
    this.automa = new Automa(this);
  }

  goToAggiungi() {
    this.buttonNuovaVisible = false;
    this.formDivVisible = true;
    this.campiNonEditabili = false;
    this.confAnnVisible = true;
    this.searchVisible = false;
  }

  goToModifica() {
    this.buttonNuovaVisible = false;
    this.formDivVisible = true;
    this.campiNonEditabili = false;
    this.confAnnVisible = true;
    this.searchVisible = false;
  }

  goToRicerca() {
    this.buttonNuovaVisible = true;
    this.formDivVisible = false;
    // this.campiNonEditabili = true;
    // this.confAnnVisible = true;
    this.searchVisible = true;
  }

  goToRimuovi() {
    this.buttonNuovaVisible = false;
    this.formDivVisible = true;
    this.campiNonEditabili = true;
    this.confAnnVisible = true;
    this.searchVisible = false;
  }

  goToVisualizza() {
    this.buttonNuovaVisible = true;
    this.formDivVisible = true;
    this.campiNonEditabili = true;
    this.confAnnVisible = false;
    this.searchVisible = true;
  }

  nuova() {
    this.automa.next(new AddEvent());
  }

  modifica() {
    this.automa.next(new ModificaEvent());
  }

  conferma() {
    this.automa.next(new ConfermaEvent());
  }

  annulla() {
    this.automa.next(new AnnullaEvent());
  }

  rimuovi() {
    this.automa.next(new RimuoviEvent());
  }

  cerca() {
    this.automa.next(new RicercaEvent());
  }

  seleziona(prod: Prodotto) {
    this.automa.next(new SelezionaEvent());
  }

  aggiorna() {
    let oss: Observable<Prodotto[]> = this.http.get<Prodotto[]>('http://localhost:8080/aggiorna');
    oss.subscribe(r => this.prodotti = r);
  }
}
