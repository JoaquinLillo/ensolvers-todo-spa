package spa.repositories;

import java.util.List;
import spa.entities.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import spa.entities.Task;

@Repository
public interface FolderRepository extends JpaRepository<Folder, String> {
    
    @Query("select f from Folder f where f.id like: id")
    public List<Task> findTasks(@Param("id") String id);

}
