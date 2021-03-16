package it.iad2.repository4;

import it.iad2.model4.Oggetto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryQuattro extends JpaRepository<Oggetto, Long> {

    public Oggetto findByCodice(String s);

}
