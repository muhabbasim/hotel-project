import { useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { I18n } from 'types/config';
import useConfig from 'hooks/useConfig';
import { ThemeMode } from 'config';
import { ConfigContextUpdate } from 'contexts/ConfigContextUpdate';

export default function Language() {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, i18n } = useConfig();

  const { onChangeLocalization } = ConfigContextUpdate()

  
  const iconBackColorOpen = mode === ThemeMode.DARK ? 'background.paper' : 'secondary.200';
  const iconBackColor = mode === ThemeMode.DARK ? 'background.default' : 'secondary.100';

  const anchorRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListItemClick = (lang: I18n) => {
    onChangeLocalization(lang)
    setOpen(false);
    location.reload();
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.5 }}>
      <List
        component="nav"
        sx={{
          p: 1,
          width: '100%',
          minWidth: 200,
          maxWidth: 290,
          color: theme.palette.grey[800],
          [theme.breakpoints.down('md')]: { maxWidth: 250 }
        }}
      >
        <ListItemButton selected={i18n === 'en'} onClick={() => handleListItemClick('en')}>
          <ListItemText
            primary={
              <Grid container>
                <Typography color="gray.100">English</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                  (UK)
                </Typography>
              </Grid>
            }
          />
        </ListItemButton>
        <ListItemButton selected={i18n === 'ar'} onClick={() => handleListItemClick('ar')}>
          <ListItemText
            primary={
              <Grid container>
                <Typography color="gray.100">عربي</Typography>
                <Typography variant="caption" color="text.secondary" sx={{ ml: '8px' }}>
                  (AR)
                </Typography>
              </Grid>
            }
          />
        </ListItemButton>
      </List>
    </Box>
  )
}
