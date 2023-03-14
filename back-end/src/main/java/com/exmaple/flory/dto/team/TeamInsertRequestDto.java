package com.exmaple.flory.dto.team;

import com.exmaple.flory.entity.Team;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TeamInsertRequestDto {

    private String name; //그룹 이름
    private List<Long> participant; //그룹 참가자

    public Team toGroup() {
        return Team.builder()
                .name(name)
                .build();
    }
}
