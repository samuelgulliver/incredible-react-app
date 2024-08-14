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
            {/* Github commit test - button now before hr */}
            <button>Click Me</button>
            <hr/>  
            <button>Github commit test 2</button> 
        </header>
    );
}

export default Headerr