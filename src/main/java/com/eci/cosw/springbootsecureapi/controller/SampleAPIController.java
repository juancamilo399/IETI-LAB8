package com.eci.cosw.springbootsecureapi.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SampleAPIController {

    @GetMapping( "/api/test" )
    public String getTestMessage()
    {
        return "Test Message!!";
    }
}
