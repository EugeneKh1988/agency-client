import { ITeamItem } from "./interfaces";

export function to2DArray(workers: ITeamItem[]) {
  const workers2D: ITeamItem[][] = [];
  // convert to 2D
  for (let i = 0; i < 3; i++) {
    workers2D.push([]);
    for (let j = 0; j < 2; j++) {
      if (workers.at(i * 2 + j) !== undefined) {
        workers2D[i].push(workers[i * 2 + j]);
      } else {
        workers2D[i].push({});
      }
    }
  }
  return workers2D;
}