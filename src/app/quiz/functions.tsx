import { Profile, profiles } from "./data";

export function findProfileByCombination(
  combination: number[]
): Profile | undefined {
  return profiles.find(
    (profile) =>
      profile.combination.length === combination.length &&
      profile.combination.every((value, index) => value === combination[index])
  );
}
