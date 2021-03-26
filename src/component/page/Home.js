import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Home  = () => {

const theme = useContext(ThemeContext)


    return (
        <article style={{flex: 3, border: 'solid 1px', padding: '1em', margin: '1em',...theme}}>
            <h1>my home page</h1>
            <p> any text do you like you can write here !!!!!</p>
            <p>
            At lorem interesset vel, veri paulo laboramus ex cum. An minimum nominavi invidunt sea. An dicant consulatu eos. Ut legimus albucius sea.

            </p>
        </article>
    )
}
export default Home;