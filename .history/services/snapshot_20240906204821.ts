import { timeStamp } from "console";
import { db } from "./firebase";
export const saveSnapShot = async (cssData:string,description:string){
    const snapshot={
        cssData,
        description,
        timeStamp:new Date(),
    };
    const docRef = await  db.collection('snapshots').add(snapshot);
return docRef.id;

}
export const 