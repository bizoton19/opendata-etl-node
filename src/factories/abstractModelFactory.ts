import { Artifact } from "../model/Artifact";

 export abstract class AbstractModelFactory{
    abstract CreateModel<T extends Artifact>(arg: string): Artifact;
}