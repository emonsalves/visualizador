import { Link, useParams } from 'react-router-dom'

export const ParamPage = () => {
    const { paramId } = useParams();

    return (
        <div className="container">
            <div>Este es el params {paramId}</div>
            <Link to="/">Volver al inicio</Link>
        </div>
    )
}