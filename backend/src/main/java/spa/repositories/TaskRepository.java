

package spa.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import spa.entities.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, String>{
    
//    public List<Task> findCompleted(boolean completed);
    
    

}
