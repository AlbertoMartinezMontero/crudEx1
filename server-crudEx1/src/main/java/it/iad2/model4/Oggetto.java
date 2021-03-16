package it.iad2.model4;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 *
 * @author utente
 */

@Entity
public class Oggetto implements Serializable {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private String codice;
    @Column
    private String descrizione;

    public Oggetto() {
    }

    public Oggetto(String codice, String descrizione) {
        this.codice = codice;
        this.descrizione = descrizione;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodice() {
        return codice;
    }

    public void setCodice(String codice) {
        this.codice = codice;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    @Override
    public String toString() {
        return "Oggetto{" + "id=" + id + ", codice=" + codice + ", descrizione=" + descrizione + '}';
    }
    
    
}
