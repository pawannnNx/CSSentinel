import {Command} from 'commander';
import { captureSnapshot, compareSnapshots, listSnapshots, optimizeSnapshot } from './commands';
const program = new Command();


program
.version('1.0.0')
.description('CSS CLI - CSS Snapshot Management Tool');
program
.command('capture')
.description('Capture a CSS snapshotCapture a CSS snapshot')
.action(()=>captureSnapshot())
program
.command('compare <id1> <id2>')
.description('Compare two CSS snapshots')
.action((id1,id2)=>captureSnapshot(id1,id2));


program
.command('list')
.description('List all CSS snapshots')
.action(()=>listSnapshots())