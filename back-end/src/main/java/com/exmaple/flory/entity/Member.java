package com.exmaple.flory.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "member")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "nickname", length = 20, nullable = false)
    private String nickname;

    @Column(name = "password", length = 50, nullable = false)
    private String password;

    @Column(name = "img")
    private String img;

    @Column(name="email", nullable = false)
    private String email;

    @Enumerated(EnumType.STRING)
    private Authority authority;

}