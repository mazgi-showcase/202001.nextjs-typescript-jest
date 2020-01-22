import React from 'react'
import X from 'components/atoms/xxx'

type Props = {
  title?: string
  acceptAnonymous?: boolean
  children?: React.ReactNode
}

const Component: React.FC<Props> = (props: Props) => {
  const { title, children } = props
  return (
    <div>
      <p>{title}</p>
      <div>
        <X />
      </div>
      <div>{children}</div>
    </div>
  )
}

Component.defaultProps = {
  title: '(default page)',
  children: <div>(children)</div>
}

export default Component
