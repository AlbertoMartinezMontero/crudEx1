package it.iad2.service4;

import it.iad2.dto4.ListaOggettiDto;
import it.iad2.dto4.OggettoDto;
import it.iad2.model4.Oggetto;

public interface ServiceQuattro {

    ListaOggettiDto conferma(Oggetto p);

    OggettoDto modifica(Oggetto p);
    // OggettoDto annulla (Oggetto p); Da gestire lato client?

    ListaOggettiDto rimuovi(Oggetto p);

    OggettoDto cerca(String s);
    
    OggettoDto seleziona(Oggetto p);
    
    ListaOggettiDto aggiornaLista();
    

}
