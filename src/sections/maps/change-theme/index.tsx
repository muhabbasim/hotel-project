import { useState, useCallback, memo } from 'react';

// third-party

// project-imports
import ControlPanel from './control-panel';
import MapControl from 'components/third-party/map/MapControl';

// types
import { MapBoxProps } from 'types/map';

interface Props extends MapBoxProps {
  themes: {
    [key: string]: string;
  };
}

// ==============================|| MAPBOX - THEME ||============================== //

function ChangeTheme({ themes, ...other }: Props) {
  const [selectTheme, setSelectTheme] = useState('streets');
  const handleChangeTheme = useCallback((value: string) => setSelectTheme(value), []);

  return (
    <>


      <ControlPanel themes={themes} selectTheme={selectTheme} onChangeTheme={handleChangeTheme} />
    </>
  );
}

export default memo(ChangeTheme);
