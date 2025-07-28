import { findLastKey, isDate } from "lodash"

type Task = {
    id: number ,
    title: string ,
    isDone: boolean
}

interface IToDoList {
    addTask: (title: string) => Task;
    showTasks: () => Task[];
    filter: (fn: Function) => Task[];
    deleteTask: (id: string) => void;
    changeStatus: (id: boolean, status: boolean) => void;
    search: (text: string) => Task[];
}


class TodoList implements IToDoList{
    id = 0
    tasks:Task[] = []

    addTask(title: string){
        const newtask : Task = {
            id : this.id ,
            title : title,
            isDone : false
        }
        this.id ++;
        this.tasks.push(newtask)
        return newtask
    }
    
    showTasks(): Task[]{
        return this.tasks;
    }

    filter(fn: Function): Task[] {
        let isfilter = this.tasks.filter(fn);
        return isfilter;
    }


    deleteTask(id: string) : Task[] {
        let deletetask = this.tasks.filter(tasks => tasks.id !== Number(id))

        return deletetask;   
    }

    changeStatus(id: number , status: boolean) : void {
        
        for(let task of this.tasks){
            if(task.id === id){
            task.isDone = status;
            }
            break;
        }
        
    }
    

}