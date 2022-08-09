const Home = () => {
    return(
        <div className="home">
            <form>
                <input type="text" placeholder="eth address"/>
                <input type="text" placeholder="amount"/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Home;