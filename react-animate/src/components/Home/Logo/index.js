import LogoS from '../../../assets/images/logo-p.png'
import Animated from '../../Animation/Animation'
import './index.scss'
import Pic from '../../../assets/images/P9190078.svg'

const Logo = () => {
  return (
    <div className="logo-container">
      <Animated />

      <img className="solid-logo" src={Pic} alt="JavaScript,  Developer" />
    </div>
  )
}

export default Logo
