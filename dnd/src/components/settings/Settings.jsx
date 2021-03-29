import { Drawer, IconButton, Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShareIcon from '@material-ui/icons/Share';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SelectSeeMyClipPads from './SelectSeeMyClipPads'
import useStyles from "./stylesSettings"
import UsersList from './usersBlock/UsersList'
import TextFieldSettings from './TextFieldSettings'
import Privace from './Privace'

export default function Settings({
    isOpenSettings, 
    onClickButtonSettingsHandler,
    handleChange,
    currentClipPadName,
    clipPadNamesList,
    users,
    name, 
    currentClipPad
}) {
    const classes = useStyles()      
    return(
        <Drawer anchor="right" open={isOpenSettings} className={classes.settingsContainer}>
            <div className={`${classes.settingsItem} ${classes.settingsOther}`}>
                <IconButton onClick={onClickButtonSettingsHandler} >
                    <CloseIcon className={classes.closeButton}/>
                </IconButton>
                <p className={classes.settingsTopTitle}>
                {name ? name : currentClipPadName} settings
                </p>
            </div>
            <div className={classes.settingsItem}>
                <TextFieldSettings 
                IconComponent={AssignmentIcon}
                label="Clip pad name"
                defaultValue={name ? name : currentClipPadName}
                />
            </div>
            <div className={classes.settingsItem}>
                <TextFieldSettings 
                IconComponent={MailOutlineIcon}
                label="Send emails to this clip pad"
                defaultValue={currentClipPad[currentClipPadName] && currentClipPad[currentClipPadName].emailSettings}
                />
            </div>
            <div className={classes.settingsItem}>
                <UsersList 
                users={users}
                />
            </div>
            <div className={classes.settingsItem}>
                <SelectSeeMyClipPads  
                clipPadNamesList={clipPadNamesList}
                handleChange={handleChange}
                name={name}
                />
            </div>

            <div className={classes.settingsItem}>
                <Privace/>           
            </div>
            <div>
                <div className={`${classes.settingsFlex} ${classes.settingsItem}`}> 
                    <IconButton className={classes.iconAddUser}>
                        <ShareIcon />
                    </IconButton>
                    <p className={classes.titleAddUser}> Share</p>
                </div>
            </div>
            <Button className={classes.buttonconfirm} variant="contained" color="primary" onClick={onClickButtonSettingsHandler}>
                    Confirm
            </Button>
        </Drawer>
    )
}