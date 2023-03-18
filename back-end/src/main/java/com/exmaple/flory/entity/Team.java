package com.exmaple.flory.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "team")
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Team extends BaseTime{

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long teamId;

    @Column(name = "name", length = 30, nullable = false)
    private String name;

    @Builder.Default
    @JsonIgnore
    @OneToMany(mappedBy = "tid", cascade = CascadeType.ALL) //읽기만 가능하다.
    private List<UserTeam> userTeamList = new ArrayList<>();

    public Team updateName(String name) {
        this.name = name;
        return this;
    }

}
