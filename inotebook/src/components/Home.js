import Addnote from './Addnote';
import Notes from './Notes';

const Home = (props) => {
  const {showalert}=props;
  return (
    <div>
      <Addnote/>
      <Notes showalert={showalert}/>
    </div>
  )
}

export default Home