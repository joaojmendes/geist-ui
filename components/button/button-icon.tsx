import React from 'react'
import { withPureProps } from '../use-scaleable'

interface Props {
  isRight?: boolean
  isSingle?: boolean
  className?: string
}

const defaultProps = {
  isRight: false,
  className: '',
}

type NativeAttrs = Omit<React.HTMLAttributes<any>, keyof Props>
export type ButtonIconProps = Props & NativeAttrs

const ButtonIcon: React.FC<React.PropsWithChildren<ButtonIconProps>> = ({
  isRight,
  isSingle,
  children,
  className,
  ...props
}: ButtonIconProps & typeof defaultProps) => {
  return (
    <span
      className={`icon ${isRight ? 'right' : ''} ${
        isSingle ? 'single' : ''
      } ${className}`}
      {...withPureProps(props)}>
      {children}
      <style jsx>{`
        .icon {
          position: absolute;
          left: var(--geist-ui-button-icon-padding);
          right: auto;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--geist-ui-button-color);
          z-index: 1;
        }

        .right {
          right: var(--geist-ui-button-icon-padding);
          left: auto;
        }

        .icon :global(svg) {
          background: transparent;
          height: calc(var(--geist-ui-button-height) / 2.35);
          width: calc(var(--geist-ui-button-height) / 2.35);
        }

        .single {
          position: static;
          transform: none;
        }
      `}</style>
    </span>
  )
}

ButtonIcon.defaultProps = defaultProps
ButtonIcon.displayName = 'GeistButtonIcon'
export default ButtonIcon
