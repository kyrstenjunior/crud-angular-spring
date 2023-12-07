package com.junior.crudspring.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity // Caso a tabela tenha o mesmo nome desta classe, posso utilizar apenas o @Entity, senão, é necessário utilizar o @Table(name = "Cursos")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")
    private Long id;

    @Column(length = 200, nullable = false) // Caso o nome da coluna seja diferente do banco com a API posso usar @Column(name = "Nome")
    private String name;

    @Column(length = 10, nullable = false)
    private String category;
}
