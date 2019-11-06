import React, { Fragment} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { IPlatesmaniaCars } from "../../models/Interfaces";
import lang from "../../locale";
import { AppState } from "../../redux";
import { ApplicationStates} from "../../models/Interfaces";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { indigo } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import SendIcon from '@material-ui/icons/Send';

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
    avatar: {
      backgroundColor: indigo[400],
    },
    link: {
        display: 'none',
    },
    pos: {
        marginBottom: 12,
    },
    title: {
        fontSize: 14,
    },
  }),
);

export const ResultPlatesmaniaCard = (props: {item: IPlatesmaniaCars}) => {
    const { item } = props;
    const state: ApplicationStates = useSelector((state: AppState) => state.Item, shallowEqual);
    const classes = useStyles({});
    const handleRedirectClick = (url: string) => {
        window.open(url);
    };
    return (
                <Card className={classes.card}>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            PM
                        </Avatar>
                        }
                        title={lang(state.lang).card_ResultImagesFrom}
                        subheader="http://platesmania.com"        
                    />
                    <CardMedia
                        className={classes.media}
                        image={item.photo.medium}                
                    />
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          {lang(state.lang).card_ImgDate}: {item.date}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton 
                            aria-label="open original image"
                            title={lang(state.lang).card_openOriginalImage}
                            onClick={ () => handleRedirectClick(item.photo.original)}
                        >
                            <SendIcon />
                        </IconButton>
                    </CardActions>
                </Card>
  );
}