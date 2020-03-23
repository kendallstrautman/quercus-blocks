interface PositionProps {
  colStart: number
  colEnd: number
}

export function getPosition(
  width: 'narrow' | 'medium' | 'wide' | 'fullwidth',
  align: 'left' | 'right' | 'center'
) {
  // defaults to full width
  const position: PositionProps = {
    colStart: 1,
    colEnd: 5,
  }
  const isLeft = align === 'left'

  // return early if center or full
  if (width === 'fullwidth') return position
  if (align === 'center')
    return {
      colStart: 2,
      colEnd: 4,
    }

  switch (align) {
    case 'left': {
      position.colStart = 1
      break
    }
    case 'right': {
      position.colEnd = 5
      break
    }
  }

  switch (width) {
    case 'narrow': {
      if (isLeft) {
        position.colEnd = 2
      } else {
        position.colStart = 4
      }
      break
    }
    case 'medium': {
      if (isLeft) {
        position.colEnd = 3
      } else {
        position.colStart = 3
      }
      break
    }
    case 'wide': {
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

export function areColumnsSet(colStart, colEnd) {
  return typeof colStart === 'number' && typeof colEnd === 'number'
}
