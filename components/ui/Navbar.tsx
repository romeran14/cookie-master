import NextLink from 'next/link';

import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={ 0 }>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
           <MenuOutlinedIcon/>
            </IconButton>

            <NextLink href="/" >
                
                    <Typography variant='h6' color="white">CookieMaster</Typography>
                
            </NextLink>

            <div style={{ flex: 1 }} />

            <NextLink href="/theme-changer" >
                
                    <Typography variant='h6' color="white">Cambiar Tema</Typography>
                
            </NextLink>

        </Toolbar>
    </AppBar>
  )
}