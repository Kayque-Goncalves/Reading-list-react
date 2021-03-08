import React, { createContext, Component } from 'react'

export const ThemeContext = createContext()

class ThemeContextProvider extends Component {
    // Define os stados que serão passados globalmente dentro da aplicação. 
    state = { 
        isLightTheme: true, 
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
     }

     toggleTheme = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme })
     }

    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme }}>
                {/* Define as propriedades que estão dentro do contexto (navbar e booklist). */}
                { this.props.children }
            </ThemeContext.Provider>
         )
    }
}
 
export default ThemeContextProvider