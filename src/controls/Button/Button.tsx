import { ReactNode } from "react"

interface Props {
	onClick?: () => void
}

const Component = ({ onClick }: Props): ReactNode => <button onClick={onClick}>Click Me</button>

export default Component
