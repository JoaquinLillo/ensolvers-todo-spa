package spa.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spa.entities.Folder;
import spa.entities.Task;
import spa.repositories.TaskRepository;

@Service
public class TaskService {

    @Autowired
    TaskRepository tdao;

    public List<Task> listTasks() {
        return tdao.findAll();
    }

    public Task findById(String id) {
        Optional<Task> task = tdao.findById(id);
        if (task.isPresent()) {
            return task.get();
        } else {
            return null;
        }
    }

    public Task createTask(String taskTitle, boolean completed) {
        Task task = new Task();
        task.setTask(taskTitle);
        task.setCompleted(completed);
        return tdao.save(task);
    }

    public Task updateTask(String id, Task task) {
        Optional<Task> taskData = tdao.findById(id);

        if (taskData.isPresent()) {
            Task _task = taskData.get();
            _task.setTask(task.getTask());
            _task.setCompleted(task.isCompleted());
            return tdao.save(task);
        } else {
            return null;
        }
    }

    public void deleteTask(String id) {
        tdao.deleteById(id);
    }

    public void deleteAllTask() {
        tdao.deleteAll();
    }

}
