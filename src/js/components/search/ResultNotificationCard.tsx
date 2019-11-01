import React, { Fragment} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Item } from "../../models/Interfaces";
import lang from "../../locale";
import { regions } from "../../data/Data";
import { AppState } from "../../store";
import { ApplicationStates} from "../../models/Interfaces";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { itemFetchDataForPlate, addToFavorites, removeFromFavorites } from "../../store/actions";
import { URLs } from "../../data/Data";
import Utils from "../../utils/Utils";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { ShareDialog } from "../share/ShareDialog";
import CardHeader from '@material-ui/core/CardHeader';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { orange, grey, yellow, green, brown, blue, purple, red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme: Theme) => createStyles({
    card: {
      maxWidth: 500,
      marginTop: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    link: {
        display: 'none',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
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
  }),
);

const shapeUrlPlate = (value: string, url: string): string => {
    return Utils.shapeUrlPlate(url, value, Utils.extractPartitionKey(value));
  }

export const ResultNotificationCard = (props: {item: Item}) => {    
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);    

    const classes = useStyles({});
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [anchorEl1, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const openSettingsMenu = Boolean(anchorEl1);

    const isItemAlreadyAdded = Utils.isItemAlreadyAdded(state.favorites, props.item.n_reg_new);
    const [favorite, setFavorite] = React.useState(isItemAlreadyAdded);

    const dispatch = useDispatch();
    const history = useHistory();    

    const primary = `${props.item.brand}/${props.item.model} (${props.item.make_year})`;
    const secondary = `${props.item.n_reg_new}, ${regions[props.item.PartitionKey]}`;
    
    const body = `${lang(state.lang).body}: ${props.item.body}`;
    const capacity = `${lang(state.lang).capacity}: ${props.item.capacity}`;
    const color = `${lang(state.lang).color}: ${props.item.color}`;
    const weight = `${lang(state.lang).weight}: ${props.item.own_weight}/${props.item.total_weight}`;
    const fuel = `${lang(state.lang).fuel}: ${props.item.fuel}`;

    const kind = `${lang(state.lang).kind}: ${props.item.kind}`;
    const purpose = `${lang(state.lang).purpose}: ${props.item.purpose}`;
    const person = `${lang(state.lang).person}: ${props.item.person === "P" ? lang(state.lang).person_private : lang(state.lang).person_company}`;
    const d_reg = `${lang(state.lang).d_reg}: ${props.item.d_reg}`;
    const oper_name = `${lang(state.lang).oper_name}: ${props.item.dep} (${props.item.dep_code}), ${props.item.oper_name} (${props.item.oper_code})`;
    const reg_addr_koatuu = `${lang(state.lang).reg_addr_koatuu}: ${props.item.reg_addr_koatuu}`;

    const url = `${window.location.origin}/#/${props.item.n_reg_new}`;
    const serviceUrl = process.env.AZURE_TABLE_SERVICE_URL || URLs.getDataByPlateUrl;

    const colorClass = Utils.detectColor(props.item.color, classes);

    const handleClose = () => {
        setOpen(false);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleShareClick = () => {
        setAnchorEl(null);
        setOpen(true);
    };
    const handleAddToFavs = () => {
        setAnchorEl(null);
        favorite === true
            ? dispatch(removeFromFavorites(props.item))
            : dispatch(addToFavorites(props.item))
    };
    const handleClose1 = (): void => {
        setAnchorEl(null);
    };
    const handleSearchMenuClick = (): void => {
        setAnchorEl(null);
        const value = props.item.n_reg_new;
        const url = shapeUrlPlate(value, serviceUrl);
        dispatch(itemFetchDataForPlate(value, url));
        handleAddResultToHash(value);
    };
    const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleAddResultToHash = (value: string) => {
        history.push(`/`);
    };

    return(
        <Fragment>
            <Card className={classes.card}>
                <CardActionArea>
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
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
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
                </CardActionArea>
            </Card>
        </Fragment>
    )
}