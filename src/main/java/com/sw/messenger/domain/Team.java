package com.sw.messenger.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@Builder
@Entity
@Table(name = "team")
@NoArgsConstructor
@AllArgsConstructor
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_no")
    private Long teamNo;

    @Column(name = "team_name", nullable = false)
    private String teamName;

    @Column(name = "team_domain", nullable = false)
    private String teamDomain;

    @Column(name = "team_payment_term")
    private Date teamPaymentTerm;
}
