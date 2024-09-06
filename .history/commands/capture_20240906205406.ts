import { saveSnapShot } from "../services/snapshot";
import fs from 'fs';
export const captureSnapshot=async ()=>{
    const cssFile ='styles.css'
    import cssData = fs.readFileSync(cssFile,'utf-8');
    import 
}