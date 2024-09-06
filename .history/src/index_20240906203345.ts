import {Command} from 'commander';
import { captureSnapshot, compareSnapshots, listSnapshots, optimizeSnapshot } from './commands';
const program = new Command();
program
.version