import { NavLink } from "react-router-dom"
import { IconButton, Menu, MenuItem } from "@material-ui/core"
import useStyles from "./stylesNavbar"
import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
import ShareIcon from '@material-ui/icons/Share';
import SettingsContainer from "../settings/SettingsContainer"

export default function Navbar({
    isDisabled, 
    onClickSetDisable, 
    onClickMenuItemHandler, 
    onClickButtonSettingsHandler, 
    isOpenSettings,
    isOpenMenuPadsList,
    onClickToggleMenu,
    anchorEl,
    data
}) {
    const classes = useStyles()
    return(
        <>
            <nav className={classes.navbar}>
                <ul className={classes.navbarList}>
                    <li>
                        <NavLink to="/search" onClick={onClickSetDisable}> 
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </NavLink>   
                    </li>
                    <li>
                        <IconButton disabled={isDisabled} onClick={onClickButtonSettingsHandler}>
                            <SettingsIcon />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton  onClick={onClickToggleMenu}>
                            <ListIcon/>
                        </IconButton>
                        <Menu
                            id="lock-menu"
                            anchorEl={anchorEl}
                            open={isOpenMenuPadsList}
                        >
                            {Object.keys(data).map((item) => (
                            <NavLink 
                            className={classes.link}
                            activeClassName={classes.activeLink}  
                            key={item} 
                            to={`/clip-board/${item}`} 
                            onClick={onClickMenuItemHandler}
                            >
                                <MenuItem>
                                    {item}
                                </MenuItem>
                            </NavLink>
                            ))}
                        </Menu>
                    </li>
                    <li>
                        <IconButton>
                            <ShareIcon/>
                        </IconButton>
                    </li>
                </ul>
            </nav>
            <SettingsContainer 
            isOpenSettings={isOpenSettings} 
            onClickButtonSettingsHandler={onClickButtonSettingsHandler} 
            />
        </>
    )
}