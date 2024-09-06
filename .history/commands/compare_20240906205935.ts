import { getSnapShotBytId } from "../services/snapshot";
export const compareSnapshots  = async(id1:string,id2:string)=>{
    const snapshot1 = await getSnapshotById(id1);
    const snapshot2 = await getSnapshotById(id2);
    console.log('Comparing CSS Snapshots:');
    console.log('Snapshot 1:', snapshot1);
    console.log('Snapshot 2:', snapshot2);
}