export interface SpacerSize {
  mobile: string
  desktop: string
}

export function getSpacerSize(size: string): SpacerSize {
  const result: SpacerSize = {
    mobile: 'var(--med)',
    desktop: 'var(--lrg)',
  }

  switch (size) {
    case 'Small': {
      result.mobile = `var(--xs)`
      result.desktop = `var(--sm)`
      break
    }
    case 'Medium': {
      result.mobile = `var(--sm)`
      result.desktop = `var(--med)`
      break
    }
    case 'Large': {
      result.mobile = `var(--med)`
      result.desktop = `var(--lrg)`
      break
    }
  }
  return result
}
