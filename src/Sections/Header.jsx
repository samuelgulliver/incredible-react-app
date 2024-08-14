// Within this function we can write a combination of javascript and html

function Header({title}) {
    return(
        <header>
            <h1>{title}</h1>
            <nav>          
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href = '#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href = '#'>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

// Header.defaultProps = {
//     title: "Default Website Title"
//   }

export default Header