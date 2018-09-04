import { Artifact } from "../model/Artifact";

export interface GenericRepository<T extends Artifact>  {
  get(number:string) : Artifact;
  add(data: Artifact): void;
  remove(data: Artifact): void;

}

