import polygon from "../assets/icons/polygon.png";
import user from "../assets/icons/user.png";

export default function JoinCommunity () {
    return (
        <>
            <div className="joinCommunity">
                <h4>¿Ya tienes cuenta? Iniciar sesión</h4>
                <h1>¡Únete a la comunidad!</h1>
                <h4>Para empezar, dinos qué te gustaría abrir.</h4>
                <div className="joinCommunity__accountType">
                    <img src={polygon} alt="polygon" />
                    <img src={user} alt="user" />
                    <h4>Developers</h4>
                    <h4>Cuenta personal para entrar en el mundo dev</h4>
                </div>
                    <img src={polygon} alt="polygon" />
                    <img src={user} alt="user" />
                    <h4>Business</h4>
                    <h4>Tienes o perteneces a una compañía</h4>
                <div>
                </div>
            </div>
        </>
    )
}
