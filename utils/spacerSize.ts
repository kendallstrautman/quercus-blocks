export function getSpacerSize(size: string): string {
  let result

  switch (size) {
    case 'Small': {
      result = `var(--sm)`
      break
    }
    case 'Medium': {
      result = `var(--med)`
      break
    }
    case 'Large': {
      result = `var(--lrg)`
      break
    }
    default:
      result = `var(--med)`
  }
  return result
}
