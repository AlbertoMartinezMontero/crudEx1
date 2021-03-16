package it.iad2.controller4;

import it.iad2.dto4.ListaOggettiDto;
import it.iad2.dto4.OggettoDto;
import it.iad2.dto4.StringaDto;
import it.iad2.service4.ServiceQuattro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class ContollerQuattro {

    @Autowired
    ServiceQuattro servizio;

    @ResponseBody
    @RequestMapping("/conferma")
    public ListaOggettiDto conferma(@RequestBody OggettoDto dto) {
        return servizio.conferma(dto.getOggetto());
    }

    @ResponseBody
    @RequestMapping("/rimuovi")
    public ListaOggettiDto rimuovi(@RequestBody OggettoDto dto) {
        return servizio.rimuovi(dto.getOggetto());
    }

    @ResponseBody
    @RequestMapping("/modifica")
    public OggettoDto modifica(@RequestBody OggettoDto dto) {
        return servizio.modifica(dto.getOggetto());
    }

    @ResponseBody
    @RequestMapping("/cerca")
    public OggettoDto cerca(@RequestBody StringaDto dto) {
        return servizio.cerca(dto.getCriterio());

    }

    @ResponseBody
    @RequestMapping("/aggiorna")
    public ListaOggettiDto aggiornaLista() {
        return servizio.aggiornaLista();
    }
}
