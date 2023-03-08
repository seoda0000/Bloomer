package com.exmaple.flory.service;

import com.exmaple.flory.dto.garden.GardenRequestDto;
import com.exmaple.flory.dto.garden.GardenResponseDto;
import com.exmaple.flory.entity.Garden;
import com.exmaple.flory.entity.Member;
import com.exmaple.flory.exception.CustomException;
import com.exmaple.flory.exception.error.ErrorCode;
import com.exmaple.flory.repository.GardenRepository;
import com.exmaple.flory.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class GardenService {

    private final GardenRepository gardenRepository;
    private final MemberRepository memberRepository;

    public GardenResponseDto getDetail(Long id) {

        return gardenRepository.findById(id)
                .map(Garden::toResponseDto)
                .orElseThrow(()-> new CustomException(ErrorCode.INVALID_GARDEN));
    }

    public GardenResponseDto insert(GardenRequestDto gardenRequestDto) {

        Long memberId = gardenRequestDto.getUserId();

        Optional<Member> result = memberRepository.findById(memberId);

        //계정이 없다면
        if(!result.isPresent()) {
            throw new CustomException(ErrorCode.NO_USER);
        }

        LocalDateTime today = LocalDateTime.now();

        Garden garden = new Garden();
        garden.setMember(result.get());
        //1개월뒤 마감날짜
        garden.setDeadLine(today.plusMonths(1));
        Garden res = gardenRepository.save(garden);

        return res.toResponseDto();
    }

    public GardenResponseDto update(GardenRequestDto gardenRequestDto) {

        log.info(" user id  {}",gardenRequestDto.getUserId());

        return gardenRepository.findById(gardenRequestDto.getGardenId())
                .map(g -> {
                    g.setPath(gardenRequestDto.getImgSrc());
                    return g;
                })
                .map(gardenRepository::save)
                .map(Garden::toResponseDto)
                .orElseThrow(()-> new CustomException(ErrorCode.INVALID_GARDEN));
    }
}
