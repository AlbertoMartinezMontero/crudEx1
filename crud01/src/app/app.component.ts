import { AddEvent, ConfermaEvent, ModificaEvent, RicercaEvent, AnnullaEvent, RimuoviEvent, SelezionaEvent } from './automa/eventi';
import { Automabile } from './automa/state';
import { Automa } from './automa/automa';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Prodotto } from './prodotto';
import { Event } from './automa/event';
import { OggettoDto } from './oggetto-dto';
import { ListaOggettiDto } from './lista-oggetti-dto';
import { StringaDto } from './stringa-dto';

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
    if (this.prodotto.codice != null && this.prodotto.descrizione != null) {

      let dto: OggettoDto = new OggettoDto();
      dto.prodotto = this.prodotto;

      let oss: Observable<ListaOggettiDto> = this.http.post<ListaOggettiDto>(
        "http://localhost:8080/conferma", dto);

      oss.subscribe(o => this.prodotti = o.listaProdotti);
    }
  }

  annulla() {
    this.automa.next(new AnnullaEvent());
    this.prodotto.codice = "";
    this.prodotto.descrizione = "";
    
  }

  rimuovi() {
    this.automa.next(new RimuoviEvent());
    this.automa.next(new AnnullaEvent());
    let dto: OggettoDto = new OggettoDto();
    dto.prodotto = this.prodotto;

    let oy: Observable<ListaOggettiDto> = this.http.post<ListaOggettiDto>("http://localhost:8080/rimuovi", dto);
    oy.subscribe(r => this.prodotti = r.listaProdotti);
  }

  

  cerca() {
    this.automa.next(new RicercaEvent());
    let dto: StringaDto = new StringaDto();
    dto.criterio = this.searchCriterion;
    let oc: Observable<OggettoDto> = this.http.post<OggettoDto>("http://localhost:8080/cerca", dto);
    oc.subscribe(c => this.prodotto = c.prodotto);

  }

  seleziona(prod: Prodotto) {
    this.automa.next(new SelezionaEvent());
  }

  aggiorna() {

    let oss: Observable<ListaOggettiDto> = this.http.get<ListaOggettiDto>('http://localhost:8080/aggiorna');
    oss.subscribe(r => this.prodotti = r.listaProdotti);
  }
}
