import { useState, useEffect } from "react"

const Formulario = () => { // Caso use 'props' como argumento, é possível usa-lo como dependencia para o useEffect(). Exemplo: props.nome  (nome é a propriedade da tag)
    // const [variável, função] = useState(valor inicial da variável). Exemplos abaixo;
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log('O componente iniciou')

        return () => {
            console.log('O componente finalizou')
        }
    }, []) // Array vazio: irá retornar a função apenas quando o componente iniciar.

    // useEffect() chama uma função assim que o estado for alterado.

    useEffect(() => { // função useEffect() executa uma função.
        console.log('O estado nome mudou!')
    }, [nome]) // Dependencias do useEffect(); Quando uma dependencia for alterada, useEffect() será acionado.

    useEffect(() => {
        console.log('Materia A mudou para: ' + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = parseInt(materiaA) + parseInt(materiaB) + parseInt(materiaC)
        const media = soma / 3

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(target.value)} />
            <input type="number" placeholder="Nota matéria B" onChange={({ target }) => setMateriaB(target.value)} />
            <input type="number" placeholder="Nota matéria C" onChange={({ target }) => setMateriaC(target.value)} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario