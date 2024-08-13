// Within this function we can write a combination of javascript and html

function Headerr() {
    return(
        <header>
            <h1>My Website</h1>
            <nav>          
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href = '#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href = '#'>Contact</a></li>
                </ul>
            </nav>
            <hr/>
            <button>Click Me</button>
        </header>
    );
}

export default Headerr