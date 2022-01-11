package com.sw.messenger.config.websocket;


import com.sw.messenger.config.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Order(Ordered.HIGHEST_PRECEDENCE + 99)
@Component
public class FilterChannelInterceptor implements ChannelInterceptor {

    private final JwtTokenProvider jwtTokenProvider;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {
        StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(message);
        System.out.println("full message:" + message);
        System.out.println("auth:" + headerAccessor.getNativeHeader("Authorization"));
        System.out.println(headerAccessor.getHeader("nativeHeaders").getClass());
        if (StompCommand.CONNECT.equals(headerAccessor.getCommand())) {
            System.out.println("msg: " + "conne");
            jwtTokenProvider.validateToken(headerAccessor.getFirstNativeHeader("token"));
        }

        return message;
    }
}
