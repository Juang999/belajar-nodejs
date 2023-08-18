export class TodolistService {
    todolist = ["Bangkit", "Juang", "Raharjo"];

    getJsonTodolist(){
        return JSON.stringify({
            code: 200,
            status: 'OK!',
            data: this.todolist.map((value, index) => {
                return {
                    id: index,
                    value: value
                }
            })
        })
    }

    getTodolist(request, response) {
        response.write(this.getJsonTodolist());
        response.end();
    }

}