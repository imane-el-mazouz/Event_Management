package com.hello.event.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String userNotFound){
        super(userNotFound);
    }


}


