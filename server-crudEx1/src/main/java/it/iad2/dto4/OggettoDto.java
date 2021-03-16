package it.iad2.dto4;

import it.iad2.model4.Oggetto;

public class OggettoDto {
    public Oggetto oggetto;

    public OggettoDto() {
    }

    public OggettoDto(Oggetto oggetto) {
        this.oggetto = oggetto;
    }

    public Oggetto getOggetto() {
        return oggetto;
    }

    public void setOggetto(Oggetto oggetto) {
        this.oggetto = oggetto;
    }

    @Override
    public String toString() {
        return "OggettoDto{" + "oggetto=" + oggetto + '}';
    }
    
     
    
}
