/**
 * Assumes the block naming convention doesn't change in Tina
 * And will only work with non-nested blocks
 *  */

export function getBlockIndex({ name }: { name: string }): string {
  return name.split('.')[1]
}
