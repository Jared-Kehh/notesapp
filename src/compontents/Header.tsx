
import { AppBar, Toolbar, Typography } from '@mui/material';

import { logo } from '../constants/constants';

const Header: React.FunctionComponent = () => {

    return (
        <AppBar color="transparent" position='static'>
            <Toolbar>
                <Typography variant="h6">NoteTakers</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;