package com.sw.messenger.domain;

import java.util.Arrays;
import java.util.NoSuchElementException;

public enum UserRole {
    ADMIN("ROLE_ADMIN"), USER("ROLE_USER");
    private String roleName;

    UserRole(String roleName){
        this.roleName = roleName;
    }
    public boolean isCorrect(String roleName){
        return roleName.equalsIgnoreCase(this.roleName);
    }

    public static UserRole getRoleByName(String roleName){
        return Arrays.stream(UserRole.values()).filter(r -> r.isCorrect(roleName)).findFirst().orElseThrow(()
                -> new NoSuchElementException("올바르지 않은 권한입니다."));
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
