import * as React from 'react'
import cx from 'classnames'

import styles from '../../../index.module.css'
import { ResizableHeadProps } from '../../../types'
import debounce from '../../../utils/debounce'

const ResizableHead: React.FC<ResizableHeadProps> = ({ children, onResize, columnIndex, ...other }) => {
  const [isResizing, setIsResizing] = React.useState(false)

  const handleResize = (x: number, target: Element) => {
    const width = x - target.getBoundingClientRect().left

    if (width > 0) {
      debounce(onResize(columnIndex, width), 1000)
    }
  }

  const onMouseDownHandler = (event: React.MouseEvent) => {
    if (event.button !== 0) {
      return
    }

    const { currentTarget } = event
    const { right } = currentTarget.getBoundingClientRect()
    const offset = right - event.clientX

    if (offset > 11) { // +1px to account for the border size
      return
    }

    const onMouseMove = (event: MouseEvent) => {
      handleResize(event.clientX + offset, currentTarget)
      setIsResizing(true)
    }

    const onMouseUp = () => {
      setIsResizing(false)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    event.preventDefault()
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  const onTouchStartHandler = (event: React.TouchEvent) => {
    const touch = event.changedTouches[0]
    const { identifier } = touch
    const { currentTarget } = event
    const { right } = currentTarget.getBoundingClientRect()
    const offset = right - touch.clientX

    if (offset > 11) { // +1px to account for the border size
      return
    }

    function getTouch(event: TouchEvent) {
      for (const touch of event.changedTouches as any) {
        if (touch.identifier === identifier) return touch
      }
      return null
    }

    const onTouchMove = (event: TouchEvent) => {
      const touch = getTouch(event)
      setIsResizing(true)

      if (touch) {
        handleResize(touch.clientX + offset, currentTarget)
      }
    }

    const onTouchEnd = (event: TouchEvent) => {
      const touch = getTouch(event)
      setIsResizing(false)

      if (!touch) return

      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }

    window.addEventListener('touchmove', onTouchMove)
    window.addEventListener('touchend', onTouchEnd)
  }

  return (
    <div
      className={cx(styles.th, {
        [styles.resizingColumn]: isResizing
      })}
      onMouseDown={onMouseDownHandler}
      onTouchStart={onTouchStartHandler}
      {...other}
    >
      <div>{children}</div>
      <span className={styles.resizableHead} />
    </div>
  )
}

export default ResizableHead
