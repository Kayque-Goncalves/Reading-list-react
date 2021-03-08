import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

class Navbar extends Component {
    // Acessa o contexto de tema da aplicação. 
    static contextType = ThemeContext
    render() { 
        // Retorna o componente. 
        return ( 
            <ThemeContext.Consumer>{(context) => {
                // Desestrutura as propriedades do contexto.
                const { isLightTheme, light, dark } = context
                // Define qual tema estara ativo com base no estado de isLightTheme.
                const theme = isLightTheme ? light : dark

                return(
                    // Define as propriedades dentro do estilo dinamicamente para ficar de acordo com o tema.
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1> Context app </h1>
                        <ul>
                            <li> Home </li>
                            <li> About </li>
                            <li> Contact </li>
                        </ul>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>
         )
    }
}
 
export default Navbar