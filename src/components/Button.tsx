import * as React from 'react'

type Props = {
    label: string
    onClick: () => void
}

export default (props: Props) => <button onClick={props.onClick}>{props.label}</button>