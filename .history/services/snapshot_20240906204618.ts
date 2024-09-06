import { db } from "./firebase";
export const saveSnapShot = async (cssData:string,description:string){
    const snapshot={
        cssData,
        description,
    }
}