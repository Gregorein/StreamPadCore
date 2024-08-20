import { ReactNode } from "react"

export interface Props {
	onClick?: () => void
}

const Component = ({ onClick }: Props): ReactNode => <button onClick={onClick}>Click Me</button>

export default Component
