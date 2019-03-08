import { MoreVertIcon, FavoriteTwoTone } from '@material-ui/icons';
import {
  Card,
  Avatar,
  CardHeader,
  IconButton,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  CardMedia, 
} from '@material-ui/core';

function ImageCard() {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar></Avatar>
        }
        title=""
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardContent>
        <CardMedia image="" />
      </CardContent>
      <CardActions>
        <IconButton>
        </IconButton>
        <IconButton>

        </IconButton>
        <IconButton>

        </IconButton>

      </CardActions>
    </Card>
  );
};

export default ImageCard;