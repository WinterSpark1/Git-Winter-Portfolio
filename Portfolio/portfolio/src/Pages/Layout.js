import './Pages.scss';
import './Site/App.css'
import Circle, { Noter } from './Commons';

export const Layout = (className) => {

    return (
      <body>
        <Circle name="My Portfolio"/>
        <div>'</div>
        <Noter name="Main Menu"></Noter>
        <Noter name="About Me"></Noter>
        <Noter name="Projects"></Noter>
        <Noter name="Contacts"></Noter>
      </body>  
    );
}

export default Layout;