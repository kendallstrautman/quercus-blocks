export function getBlockIndex({ name }: { name: string }): string {
  return name.split('.')[1]
}
