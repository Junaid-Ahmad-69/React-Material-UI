import {Box, Divider, List, ListItem, ListItemText} from "@mui/material";

const DividerMaterial = () => {
    const style = {
        width: '100%',
        maxWidth: 360
    };
    return (
        <Box sx={{maxWidth: 1200, mx: "auto"}}>
            <h1 style={{margin: "30px auto 30px auto", textAlign: "center"}}>Select From Group</h1>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Inbox"/>
                </ListItem>
                <Divider/>
                <ListItem button divider>
                    <ListItemText primary="Drafts"/>
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Trash"/>
                </ListItem>
                <Divider light/>
                <ListItem button>
                    <ListItemText primary="Spam"/>
                </ListItem>
            </List>
        </Box>
    )
}

export default DividerMaterial
