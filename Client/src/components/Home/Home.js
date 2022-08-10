import './Home.scss'

const Home = () => {
    return(
        <div className="home">
            <div className='home-header'>
            <h2>Simplicity All In One</h2>
            <p>Send, swap, transactions, and learn all in one. Simplicity at its finest</p>
            </div>
            <form className='home-form'>
                <input type="text" placeholder="eth address"/>
                <input type="text" placeholder="amount"/>
                <button className='form-button'>Send</button>
            </form>
        </div>
    )
}

export default Home;