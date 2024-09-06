import {Command} from 'commander';
import { captureSnapshot, compareSnapshots, listSnapshots, optimizeSnapshot } from './commands';
const program = new Command();
program
.version('1.0.0')