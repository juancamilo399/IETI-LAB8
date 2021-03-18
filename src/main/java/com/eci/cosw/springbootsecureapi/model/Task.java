package com.eci.cosw.springbootsecureapi.model;

public class Task {

    private long id;
    private String description;
    private String responsible;
    private String status;
    private String dueDate;

    public Task(String description, String responsible, String status, String dueDate) {
        this.description = description;
        this.responsible = responsible;
        this.status = status;
        this.dueDate = dueDate;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getResponsible() {
        return responsible;
    }

    public void setResponsible(String responsible) {
        this.responsible = responsible;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    @Override
    public String toString()
    {
        return "Task{" + "id=" + id + ", description='" + description + '\'' + ", responsible='" + responsible + '\'' + ", status='"
                + status + '\''+", dueDate='" + dueDate + '\'' + '}';
    }
}
