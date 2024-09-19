import { useParams } from 'react-router-dom'

export const Test = () => {
    const { testerId } = useParams();

    return (
        <div>Este es el params {testerId}</div>
    )
}