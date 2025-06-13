package com.ayoub.ecommerce.customer;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public enum Role {
    CUSTOMER,
    ADMIN;

    public SimpleGrantedAuthority getRole() {
        var authorities = new SimpleGrantedAuthority("ROLE_" + this.name());
        return authorities;
    }

}


