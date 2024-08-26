import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

 findAll(){

    return "!sss"
 }

 findUserById(id:number){
    return {
        id,
        name:"amir",
        username:"amirnajafi"
    }
 }

 findUserUsername(username:string){
    return {
        id:1,  
        name:"amir",
        username:"amirnajafi"
    }
 }


}
