import Navbar from './Navbar';

const Layout = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}

export default Layout;
