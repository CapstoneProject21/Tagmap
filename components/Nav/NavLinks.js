import classNames from 'classnames'
import { Link } from 'react-router-i18n'
import FeedbackBubble from '../FeedbackBubble'
import FeedbackIcon from '../Icons/Feedback'

const NavLink = ({ href, title, className, onClick, fallback }) =>
  fallback ? (
    <a
      href={href}
      onClick={onClick}
      className={classNames(className, {
        'text-white font-sans flex items-center justify-center text-sm hover:text-gray-500 focus:text-gray-600':
          !className,
      })}
    >
      {title}
    </a>
  ) : (
    <Link
      to={href}
      onClick={onClick}
      className={classNames(className, {
        'text-white font-sans flex items-center justify-center text-sm hover:text-gray-500 focus:text-gray-600':
          !className,
      })}
    >
      {title}
    </Link>
  )

const NavLinks = ({
  className,
  onNavLinkClick,
  navLinkClasses,
  fallbackLinks = false,
}) => {
  return (
    <div className={className}>
      <NavLink
        href="/hotspots"
        title="TagMatch"  //link to the tagmatch page for to continue the game
        className={navLinkClasses}
        onClick={onNavLinkClick}
        fallback={fallbackLinks}
      />
      
      
      
      
      
      
        
    </div>
  )
}

export default NavLinks
