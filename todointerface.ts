export interface todoInterface{
    tasks: Array<string>
    addTask(task:string):number
    listAllItems():void;
    deleteTask(task:string):number;
}