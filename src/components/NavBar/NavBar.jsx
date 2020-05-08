//Nav Bar component
import React from 'react';
import './NavBar.scss';


const NavBar = () => {
    return (
        <div className="navbar">
                    
                    <ul>
                    <form>
                        <li><p>Filtros:</p></li>
                        <li>
                            <div>
                                <input type="checkbox" />
                                <label> 2° Opção</label>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="checkbox" />
                                <label> 3° Opção</label>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="checkbox" />
                                <label> 4° Opção</label>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="submit" value="Buscar" />
                            </div>
                        </li>
                        <input  className="searchbar" type="submit" value="Buscar" />
                        <input className="searchbar" placeholder="Buscar Pokemon"></input>
                    </form>
                    </ul>
        </div>
    );
};


export default NavBar;