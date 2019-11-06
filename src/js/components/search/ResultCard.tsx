import React, { Fragment} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Item } from "../../models/Interfaces";
import lang from "../../locale";
import { regions } from "../../data/Data";
import { AppState } from "../../redux";
import { ApplicationStates} from "../../models/Interfaces";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { itemFetchDataForPlate, addToFavorites, removeFromFavorites } from "../../redux/actions";
import { URLs } from "../../data/Data";
import Utils from "../../utils/Utils";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { ShareDrawerBottom } from "../share/ShareDrawerBottom";
import CardHeader from '@material-ui/core/CardHeader';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
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
}));

const shapeUrlPlate = (value: string, url: string): string => {
    return Utils.shapeUrlPlate(url, value, Utils.extractPartitionKey(value));
}

export const ResultCard = (props: {item: Item}) => {    
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
                        <MenuItem 
                            onClick={handleAddToFavs}
                        >
                            {favorite === true 
                                ? lang(state.lang).card_removeFromToFavs
                                : lang(state.lang).card_addToFavs}
                        </MenuItem>
                        <MenuItem 
                            onClick={handleShareClick}
                        >
                            {lang(state.lang).card_share}
                        </MenuItem>
                    </Menu>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {body}
                    </Typography>
                    <Typography variant="h6" component="h2">
                        {capacity}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {weight}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {fuel}
                    </Typography>
                    <Typography variant="button" color="textSecondary" gutterBottom>
                        {color}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton 
                        aria-label="share"
                        title={favorite === true 
                            ? lang(state.lang).card_removeFromToFavs
                            : lang(state.lang).card_addToFavs}
                        onClick={handleAddToFavs}
                    >
                        {favorite === true
                            ? <FavoriteIcon />
                            : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton 
                        aria-label="share"
                        title={lang(state.lang).card_share}
                        onClick={handleShareClick}
                    >
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        title={lang(state.lang).card_showMore}
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body2" component="p">
                        {kind}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {purpose}
                        </Typography>
                        <Typography variant="body2" component="p">
                        {person}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {d_reg}
                        </Typography>
                        <Typography variant="body2" component="p">
                        {oper_name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {reg_addr_koatuu}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <ShareDrawerBottom open={open} onClose={handleClose} url={url} />
        </Fragment>
    )
}