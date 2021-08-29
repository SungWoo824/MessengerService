package com.sw.messenger.config.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
@RequiredArgsConstructor
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    private final JwtTokenProvider jwtTokenProvider;

    private static final String[] SWAGGER_URI = {
            "/swagger-ui.html", "/v2/api-docs", "/swagger-resources/**", "/webjars/**", "/swagger/**"
    };
    private static final String[] PUBLIC_URI = {
            "/*/signin", "/*/signin/**", "/*/signup", "/*/signup/**"
    };
    private static final String[] PUBLIC_GET_URI = {
            "/exception/**", "/", "/actuator/health"
    };

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .httpBasic().disable() // rest api 이므로 기본설정 사용안함. 기본설정은 비인증시 로그인폼 화면으로 리다이렉트 된다.
            .csrf().disable() // rest api이므로 csrf 보안이 필요없으므로 disable처리.
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // jwt token으로 인증할것이므로 세션필요없으므로 생성안함.
            .and().authorizeRequests() // 다음 리퀘스트에 대한 사용권한 체크(리소스 별 허용 범위 설정)
            .antMatchers(PUBLIC_URI).permitAll() // 가입 및 인증 주소는 누구나 접근가능
            .antMatchers(HttpMethod.GET, PUBLIC_GET_URI).permitAll() // 등록된 GET요청 리소스는 누구나 접근가능 //
//            .antMatchers("/*/users").hasRole("ADMIN") // '/users' api는 ROLE_ADMIN 만 가능함.
            .anyRequest().hasRole("USER") // 그외 나머지 요청은 모두 인증된 회원만 접근 가능
            .and().exceptionHandling().accessDeniedHandler(new CustomAccessDeniedHandler()) // 인증 오류 발생 시 처리를 위한 핸들러 추가
            .and().exceptionHandling().authenticationEntryPoint(new CustomAuthenticationEntryPoint()) // 인증 오류 발생 시 처리를 위한 핸들러 추가
            .and().addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class) // jwt token 필터를 id/password 인증 필터 전에 넣어라.
            .cors().configurationSource(request -> new CorsConfiguration().applyPermitDefaultValues());
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers(SWAGGER_URI);
    }

}
