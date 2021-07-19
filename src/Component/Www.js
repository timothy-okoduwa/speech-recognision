import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import t from "./tt.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  avatar: {
    backgroundColor: red[500],
  },
}));

const WWW = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        color: "black",
      }}
    >
      <Card
        className={classes.root}
        style={{
          backgroundColor: "black",
          borderRadius: "10px",
          color: "white",
          width: "260px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              style={{ backgroundColor: "purple", color: "white" }}
            >
              T
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon style={{ color: "white" }} />
            </IconButton>
          }
          title="Timothy Okoduwa"
        />
        {/* <CardMedia className={classes.media} src={t} /> */}
        <div
          style={{
            height: "220px",
            width: "100vw",

            objectFit: "cover",
          }}
        >
          <img
            src={t}
            style={{ height: "220px", width: "30vw", objectFit: "cover" }}
          />
        </div>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ color: "white" }}
          >
            timothy card and all you need to know..
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {/* <FavoriteIcon /> */}
          </IconButton>
          <IconButton aria-label="share">{/* <ShareIcon /> */}</IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon style={{ color: "white" }} />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>firstly</Typography>
            <Typography paragraph>amen</Typography>

            <Typography paragraph>good</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default WWW;
