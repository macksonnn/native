import React from "react";
import { Menu, MenuItem, Button, Switch } from '@material-ui/core';
import Saldo from './Saldo';
import Cartao from './Cartao';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

const TopNavigation = props => {
    const [openMenu, setOpenMenu] = React.useState(null)
    const HandleMenu = () => {
        setOpenMenu(true)
    }
    const closeMenu = () => {
        setOpenMenu(false)
    }


    return (

        <Router>
            <div>
                <Button onClick={HandleMenu}>Menu</Button>
                <Menu open={openMenu} onClose={closeMenu}>
                    <MenuItem onClick={closeMenu}><Link to="/Saldo">Saldo</Link></MenuItem>
                    <MenuItem onClick={closeMenu}><Link to="/Cartao">Saldo</Link></MenuItem>                </Menu>
                <Menu />
                <Route path="/Saldo"><Saldo /> </Route>
                <Route path="/Cartao"><Cartao /> </Route>

            </div>
        </Router>
    )

};


// function SaldoTeste() {
//     return (<h1>saldo teste</h1>)
// }
// function CartaoTeste() {
//     return (<h1>saldo cartao</h1>)
// }
export default TopNavigation;






