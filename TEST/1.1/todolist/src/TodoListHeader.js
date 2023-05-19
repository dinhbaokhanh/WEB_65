const Header = ({numUndone}, props) => {
    return (
        <div className="header">
            {props.language === 'us' ? `You have ${numUndone} tasks left!` : `Còn ${numUndone} việc còn lại`}
        </div>
    );
};
  
export default Header;