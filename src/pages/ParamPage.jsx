import { Link, useParams } from 'react-router-dom'

export const ParamPage = () => {
    const { testerId } = useParams();

    return (
        <div className="container">
            <div>Este es el params {testerId}</div>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}