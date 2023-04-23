import { useEffect, useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => { // { nomeUsuario } define uma propriedade da tag <ReposList/>
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState(false)

    useEffect(() => {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => {
                if (!res.ok) {
                    setTimeout(() => {
                        setDeuErro(true)
                        setEstaCarregando(false)
                        throw new Error(`O usuário ${nomeUsuario} não foi encontrado`)
                    }, 3000);
                }
                return res.json()
            })
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJson)
                }, 3000);
            })
    }, [nomeUsuario])

    return (
        <>
            {deuErro ? (
                <div className="container">
                    {estaCarregando ? (
                        <h1>Carregando...</h1>
                    ) : (
                        <h1>Usuário não encontrado, tente novamente.</h1>
                    )}
                </div>
            ) : (
                <div className="container">
                    {estaCarregando ? (
                        <h1>Carregando...</h1>
                    ) : (
                        <ul className={styles.list}>
                            {repos.map(({ id, name, language, html_url }) => ( // 'repos' é o array em useState([])
                                <li className={styles.listItem} key={id}>
                                    <div className={styles.itemName}>
                                        <b>Nome:</b>
                                        {name}
                                    </div>
                                    <div className={styles.itemLanguage}>
                                        <b>Linguagem:</b>
                                        {language}
                                    </div>
                                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </>
    )
}

export default ReposList