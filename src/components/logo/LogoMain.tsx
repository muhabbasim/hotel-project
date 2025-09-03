import kgpIcon from '/src/assets/images/kgb-logo2.png'
import { Link } from 'react-router-dom';
// ==============================|| LOGO SVG ||============================== //

export default function LogoMain() {

  return (
    <Link to={'/'}>
      <img src={kgpIcon} alt="icon logo" width="90" />
    </Link>
  );
}
