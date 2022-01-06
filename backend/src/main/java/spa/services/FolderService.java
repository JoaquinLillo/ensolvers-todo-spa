package spa.services;

import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spa.entities.Folder;
import spa.entities.Task;
import spa.repositories.FolderRepository;

@Service
public class FolderService {

    @Autowired
    TaskService ts;

    @Autowired
    FolderRepository fdao;

    public List<Folder> listFolders() {
        return fdao.findAll();
    }

    public Folder findById(String id) {
        Optional<Folder> folder = fdao.findById(id);
        if (folder.isPresent()) {
            return folder.get();
        } else {
            return null;
        }
    }

    public Folder createFolder(String title, List<Task> tasks) {
        Folder folder = new Folder();
        folder.setTasks(tasks);
        folder.setTitle(title);
        return fdao.save(folder);
    }

    public Folder updateFolder(String id, Folder folder) {
        Optional<Folder> folderData = fdao.findById(id);
        if (folderData.isPresent()) {
            Folder _folder = folderData.get();
            _folder.setTasks(folder.getTasks());
            _folder.setTitle(folder.getTitle());
            return fdao.save(_folder);
        } else {
            return null;
        }
    }

    public void deleteFolder(String id) {
        fdao.deleteById(id);
    }

    public void deleteAllFolders() {
        fdao.deleteAll();
    }

    public List<Task> listTasks(String id) {
        return fdao.findTasks(id);
    }

    public void deleteTask(String id) {

        Task task = ts.findById(id);

        for (Folder folder : fdao.findAll()) {
            if (folder.getTasks().contains(task)) {
                folder.getTasks().remove(task);
                fdao.save(folder);
                ts.deleteTask(id);
                }
            }
        }
        

    }


