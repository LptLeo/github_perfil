import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario }) => {
    // const { endereco, nome } = props

    return (
        <header className={styles.header}>
            {/* {JSON.stringify(props)} */}
            {/* <img className='perfil-avatar' src={props.endereco}/>
            <h3 className='perfil-titulo'>{props.nome}</h3> */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil