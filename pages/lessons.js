import axios from 'axios';
import Lesson from '../components/Lesson'
const Lessons = props => (
    <div className="row container-fluid mt-3 pl-5">
               {props.lessons.length==0?(<h2>No Lessons to show</h2>):(
                (props.lessons.map(lesson=>(
                    <div className="col-sm-6 col-md-4 col-lg-3" key={lesson.id}>
                    <Lesson lesson={lesson}/>
                    </div>
                ))
                )
            )}
           
             </div>
);

Lessons.getInitialProps = async() =>{
  const url='https://makethat-app-staging.herokuapp.com/lessons/';
  const res = await axios.get(url);
  const data = await res.data;
  return {
    lessons: data
  };
};

export default Lessons;