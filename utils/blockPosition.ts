export interface BlockPositionProps {
  width: 'Narrow' | 'Medium' | 'Wide' | 'Fullwidth'
  align: 'Left' | 'Right' | 'Center'
}

export interface GridColumnProps {
  colStart: number
  colEnd: number
}

export function getPosition({
  width,
  align,
}: BlockPositionProps): GridColumnProps {
  // defaults to full width
  const position = {
    colStart: 1,
    colEnd: 5,
  }
  const isLeft = align === 'Left'

  // return early if center or full
  if (width === 'Fullwidth') return position
  if (align === 'Center')
    return {
      colStart: 2,
      colEnd: 4,
    }

  switch (align) {
    case 'Left': {
      position.colStart = 1
      break
    }
    case 'Right': {
      position.colEnd = 5
      break
    }
  }

  switch (width) {
    case 'Narrow': {
      if (isLeft) {
        position.colEnd = 2
      } else {
        position.colStart = 4
      }
      break
    }
    case 'Medium': {
      if (isLeft) {
        position.colEnd = 3
      } else {
        position.colStart = 3
      }
      break
    }
    case 'Wide': {
      if (isLeft) {
        position.colEnd = 4
      } else {
        position.colStart = 2
      }
      break
    }
  }

  return position
}
