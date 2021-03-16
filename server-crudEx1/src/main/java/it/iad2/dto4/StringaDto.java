package it.iad2.dto4;

public class StringaDto {
    public String criterio;

    public StringaDto() {
    }

    public StringaDto(String criterio) {
        this.criterio = criterio;
    }

    public String getCriterio() {
        return criterio;
    }

    public void setCriterio(String criterio) {
        this.criterio = criterio;
    }

    @Override
    public String toString() {
        return "StringaDto{" + "criterio=" + criterio + '}';
    }
    
    
    
}
