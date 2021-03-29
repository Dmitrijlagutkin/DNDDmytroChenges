import useStyles from "../styleClipBoard"
import { Draggable } from 'react-beautiful-dnd';
import { Paper, IconButton, TextareaAutosize, Avatar, TextField } from "@material-ui/core"
import CreateIcon from '@material-ui/icons/Create';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ActionModal from '../../common/ActionModal'

export default function ClipColumnItem({
    item, 
    index,
    itemText,
    onChangeFile,
    onChangeText,
    onClickCancelEditItem,
    isEditItem,
    onCLickToggleEditItem,
    isOpenModal,
    onOpenHandler,
    onCloseHandler,
    onChangeTitle,
    itemTitle,
    onAcceptChenges,
    onCloseAndAcceptDeleteItem
}) {
    const classes = useStyles()

    return(
        <>
        <Draggable draggableId={item.id} index={index}>
            {(provided)=>(
                <Paper  className={classes.clipColumnItem} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}> 
                    <IconButton className={classes.deleteItemButton} onClick={onOpenHandler}>
                        <DeleteForeverIcon />
                    </IconButton>
                    <div className={classes.imgContainer}>
                        {item.img ?
                            <Avatar variant="rounded" src={item.img} className={classes.itemImg}/> :
                            <Avatar variant="rounded" className={classes.itemImg}>
                                Add your image
                            </Avatar>
                        }
                        <IconButton className={classes.changeImgButton}>
                            <CreateIcon />
                            <input type="file" className={classes.inputFile} onChange={onChangeFile}/>
                        </IconButton>
                    </div>
                    <div className={classes.itemTitle}>
                        {!isEditItem ? 
                        <>
                        <h5>{itemTitle}</h5> 
                        <IconButton className={classes.editItemTileButton} onClick={onCLickToggleEditItem}>
                            <CreateIcon />
                        </IconButton>
                        </>
                        :
                        <TextField 
                        className={classes.inputItemTitle}
                        defaultValue={itemTitle}
                        label="Edit Item"
                        variant="outlined"
                        onChange={onChangeTitle}
                        />
                        }
                    </div>
                    <div className={classes.itemText}>
                        {!isEditItem ? <p>{itemText}</p> :
                        <>
                            <TextareaAutosize
                            rowsMax={4}
                            style={{width:"220px"}}
                            defaultValue={itemText}
                            onChange={onChangeText}
                            />
                            <div className={classes.buttonSection} >
                                <IconButton onClick={onAcceptChenges}>
                                    <DoneIcon />
                                </IconButton>
                                <IconButton onClick={onClickCancelEditItem}>
                                    <BlockIcon />
                                </IconButton>
                            </div>
                        </>
                        }
                    </div>
                </Paper>
            )}
        </Draggable>
        <ActionModal open={isOpenModal} handleClose={onCloseHandler} onCloseAndAcceptDeleteItem={onCloseAndAcceptDeleteItem} attentionTitle={"Are you sure"} attentionMessage={"Do you want delete Item?"}/>
        </>
    )
}