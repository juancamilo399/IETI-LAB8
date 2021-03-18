package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Task;
import com.eci.cosw.springbootsecureapi.service.TaskService;
import com.eci.cosw.springbootsecureapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping( "/api/tasks" )
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping()
    public ResponseEntity<Object> getTasks()  {
        List<Task> tasks = taskService.getTasks();

        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Object> addTask(@RequestBody Task task) {
        taskService.createTask(task);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
