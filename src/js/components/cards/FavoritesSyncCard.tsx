import React, {Fragment} from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AppState } from "../../redux";
import { IApplicationStates} from "../../models/Interfaces";
import { manualSync } from "../../redux/actions";
import lang from "../../locale";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
      maxWidth: 500,
      marginTop: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    link: {
        display: "none",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export const FavoritesSyncCard = () => {
    const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
    const classes = useStyles({});
    const dispatch = useDispatch();
    const [anchorEl1, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openSettingsMenu = Boolean(anchorEl1);
    const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose1 = (): void => {
        setAnchorEl(null);
    };
    const handleManuallySyncDataAction = () => {
        setAnchorEl(null);
        dispatch(manualSync(state.loggedIn, state.favorites));
    };
    return (
        <Fragment>
            {state.loggedIn.vendor === 0
            ?
                <Card className={classes.card}>
                    <CardHeader
                        subheader={lang(state.lang).login_sync_text}
                    />
                </Card>
            :
                <Card className={classes.card}>
                    <CardHeader
                        action={
                            <IconButton
                                aria-label="settings"
                                title={lang(state.lang).card_settings}
                                onClick={handleSettingsClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        subheader={lang(state.lang).logined_sync_text}
                    />
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl1}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted={true}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={openSettingsMenu}
                        onClose={handleClose1}
                    >
                        <MenuItem onClick={handleManuallySyncDataAction}>{lang(state.lang).syncManually}</MenuItem>
                    </Menu>
                </Card>
            }
        </Fragment>
    );
};
