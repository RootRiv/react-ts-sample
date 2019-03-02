import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { TypographyProps } from '@material-ui/core/Typography';

const styles = () => {
  return {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
};

// propsの為のインターフェースを作成
interface IProps {
  type: TypographyProps['variant'];
  color: TypographyProps['color'];
};

type headerProps = IProps & WithStyles<typeof styles>;

const Header: React.SFC<headerProps> = ({ type, color, classes }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>.
          <Typography variant={type} color={color} >
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Header);