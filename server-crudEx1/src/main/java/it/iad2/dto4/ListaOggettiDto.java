package it.iad2.dto4;

import it.iad2.model4.Oggetto;
import java.util.List;

public class ListaOggettiDto {

    public List<Oggetto> listaOggetti;

    public ListaOggettiDto() {
    }

    public ListaOggettiDto(List<Oggetto> listaOggetti) {
        this.listaOggetti = listaOggetti;
    }

    public List<Oggetto> getListaOggetti() {
        return listaOggetti;
    }

    public void setListaOggetti(List<Oggetto> listaOggetti) {
        this.listaOggetti = listaOggetti;
    }

}
