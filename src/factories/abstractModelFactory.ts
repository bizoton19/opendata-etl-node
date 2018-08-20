import { Artifact } from "../model/Artifact";

 export abstract class abstractModelFactory{
    abstract CreateModel<T extends Artifact>(arg: T): T;
}