export class ResponseModel {
    data:any
    has_error:boolean

    constructor(data:any, has_error:boolean){
        this.data = data  
        this.has_error = has_error
    }
}