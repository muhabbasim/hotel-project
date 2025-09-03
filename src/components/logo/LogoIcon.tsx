// material-ui
import kgpIcon from '/src/assets/images/kgb-logo2.png'
import { Link } from 'react-router-dom';


export default function LogoIcon() {

  return (
    <Link to={'/'}>
      <img src={kgpIcon} alt="icon logo" width="60" />
    </Link>
  );
}
