

const Header = ({name, cName, subCount}) => {
    return (
        <header className="mainHeader">
            <div className="headerLeft">
                <p>{name}</p>
            </div>
            <div className="headerRight">
                <span className="headerInfo">
                    <span className="cName">{cName}</span>
                    <span className="subCount">{subCount} Subscribers</span>
                </span>
            </div>
        </header>
    );
}

export default Header;