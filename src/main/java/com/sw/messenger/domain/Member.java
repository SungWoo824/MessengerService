package com.sw.messenger.domain;

import javax.persistence.*;

@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "member_no")
    private int memberNo;

    @Column(name = "member_email")
    private String memberEmail;

    @Column(name = "member_pw")
    private String memberPw;

    @Column(name = "member_name")
    private String memberName;

    @Column(name = "member_grade")
    private String memberGrade;

    @Column(name = "member_role")
    @Enumerated(value = EnumType.STRING)
    private UserRole memberRole;

    public Member(){

    }
    public Member(int memberNo, String memberEmail, String memberPw, String memberName, String memberGrade, UserRole memberRole) {
        this.memberNo = memberNo;
        this.memberEmail = memberEmail;
        this.memberPw = memberPw;
        this.memberName = memberName;
        this.memberGrade = memberGrade;
        this.memberRole = memberRole;
    }

    public int getMemberNo() {
        return memberNo;
    }

    public void setMemberNo(int memberNo) {
        this.memberNo = memberNo;
    }

    public String getMemberEmail() {
        return memberEmail;
    }

    public void setMemberEmail(String memberEmail) {
        this.memberEmail = memberEmail;
    }

    public String getMemberPw() {
        return memberPw;
    }

    public void setMemberPw(String memberPw) {
        this.memberPw = memberPw;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getMemberGrade() {
        return memberGrade;
    }

    public void setMemberGrade(String memberGrade) {
        this.memberGrade = memberGrade;
    }

    public UserRole getMemberRole() {
        return memberRole;
    }

    public void setMemberRole(UserRole memberRole) {
        this.memberRole = memberRole;
    }
}
