import { Artifact } from "../model/Artifact";

export interface GenericRepository<T extends Artifact>  {
  (arg:T): T;
  get(number:string) : T;
  add(data: T): void;
  remove(data: T): void;

}

