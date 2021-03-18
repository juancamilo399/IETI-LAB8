package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Task;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    private List<Task> tasks = new ArrayList<>();


    @Override
    public List<Task> getTasks() {
        return tasks;
    }

    @Override
    public void createTask(Task task) {
        task.setId(tasks.size());
        tasks.add(task);

    }
}
