import React, { Fragment} from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { INotification } from "../../models/Interfaces";
import lang from "../../locale";
import { regions } from "../../data/Data";
import { AppState } from "../../redux";
import { IApplicationStates, IEnvConfig } from "../../models/Interfaces";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { itemFetchDataForPlate  } from "../../redux/actions";
import Utils from "../../utils/Utils";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { orange, grey, yellow, green, brown, blue, purple, red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
/* tslint:disable no-var-requires */
const config: IEnvConfig = require("../../../../env.json");

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
    avatarBeige: {
        backgroundColor: orange[100],
    },
    avatarWhite: {
        backgroundColor: grey[200],
    },
    avatarYellow: {
        backgroundColor: yellow[500],
    },
    avatarGreen: {
        backgroundColor: green[500],
    },
    avatarBrown: {
        backgroundColor: brown[500],
    },
    avatarOrange: {
        backgroundColor: orange[500],
    },
    avatarBlue: {
        backgroundColor: blue[500],
    },
    avatarGrey: {
        backgroundColor: grey[500],
    },
    avatarPurple: {
        backgroundColor: purple[500],
    },
    avatarRed: {
        backgroundColor: red[500],
    },
    avatarBlack: {
        backgroundColor: grey[900],
    },
}));

const shapeUrlPlate = (value: string, url: string): string => {
    return Utils.shapeUrlPlate(url, value, Utils.extractPartitionKey(value));
};

export const ResultNotificationCard = (props: INotification) => {
    const state: IApplicationStates = useSelector((stateInternal: AppState) => stateInternal.Item, shallowEqual);
    const classes = useStyles({});
    const [anchorEl1, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openSettingsMenu = Boolean(anchorEl1);
    const dispatch = useDispatch();
    const history = useHistory();
    const primary = `${props.item.brand}/${props.item.model} (${props.item.make_year})`;
    const secondary = `${props.item.n_reg_new}, ${regions[props.item.PartitionKey]}`;
    const serviceUrl = /*process.env.AZURE_TABLE_SERVICE_URL ||*/config.AZURE_TABLE_SERVICE_URL || "";
    const colorClass = Utils.detectColor(props.item.color, classes);

    const handleClose1 = (): void => {
        setAnchorEl(null);
    };
    const handleSearchMenuClick = (): void => {
        setAnchorEl(null);
        const value = props.item.n_reg_new;
        const url = shapeUrlPlate(value, serviceUrl);
        dispatch(itemFetchDataForPlate(value, url));
        handleAddResultToHash();
    };
    const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleAddResultToHash = () => {
        history.push(`/`);
    };

    return(
        <Fragment>
            <Card className={classes.card}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={colorClass}>
                            <DirectionsCarIcon />
                        </Avatar>
                        }
                        action={
                        <IconButton
                            aria-label="settings"
                            title={lang(state.lang).card_settings}
                            onClick={handleSettingsClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={`${primary}`}
                        subheader={`${secondary}`}
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
                        <MenuItem
                            onClick={handleSearchMenuClick}
                        >
                            {lang(state.lang).url_search}
                        </MenuItem>
                    </Menu>
                    <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                        {props.timestamp}
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    );
};
