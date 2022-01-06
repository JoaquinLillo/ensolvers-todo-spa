//package spa.controllers;
//
//import java.util.ArrayList;
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import spa.entities.Folder;
//import spa.entities.Task;   
//import spa.services.TaskService;
//import spa.services.FolderService;
//
//@RestController
//@RequestMapping("/api/folder")
//@CrossOrigin
//public class FolderController {
//
//    @Autowired
//    TaskService ts;
//
//    @Autowired
//    FolderService fs;
//
//    @GetMapping("/{id}/tasks")
//    public ResponseEntity<List<Task>> getAllTasks(@PathVariable("id") String id) {
//        try {
//            List<Task> tasks = new ArrayList();
//            tasks = fs.findById(id).getTasks();
//            if (tasks.isEmpty()) {
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            }
//            return new ResponseEntity<>(tasks, HttpStatus.OK);
//
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//    }
//
//    
//
//    @GetMapping("")
//    public ResponseEntity<List<Folder>> listFolders() {
//        try {
//            List<Folder> folders = new ArrayList();
//            folders = fs.listFolders();
//            if (folders.isEmpty()) {
//                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//            } else {
//                return new ResponseEntity<>(folders, HttpStatus.OK);
//            }
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//        }
//
//    }
//
//    @PostMapping("/add")
//    public ResponseEntity<Folder> createFolder(@RequestBody Folder folder) {
//        try {
//            Folder _folder = fs.createFolder(folder.getTitle(), folder.getTasks());
//            return new ResponseEntity<>(_folder, HttpStatus.CREATED);
//        } catch (Exception e) {
//            return new ResponseEntity<>(null, HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//
//    @PutMapping("/{id}")
//    public ResponseEntity<Folder> updateFolder(@PathVariable("id") String id, @RequestBody Folder folder) {
//
//        Folder folderData = fs.findById(id);
//
//        if (folderData != null) {
//            return new ResponseEntity<>(fs.updateFolder(id, folder), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<Folder> deleteFolder(@PathVariable("id") String id) {
//        try {
//            fs.deleteFolder(id);
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } catch (Exception e) {
//            System.err.println(e.getMessage()+ " ---FOLDER EXC");
//            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//
//    @DeleteMapping("/delete")
//    public ResponseEntity<HttpStatus> deleteAllFolders() {
//        try {
//            fs.deleteAllFolders();
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        } catch (Exception e) {
//            return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
//        }
//    }
//    
//
//}
