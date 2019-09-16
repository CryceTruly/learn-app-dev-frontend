import React from 'react'


function Lesson(props) {
    return (
           
                 <div className="card">
                  <img src={props.lesson.thumbnail} width={'100%'} className="card-img-top thumbnail" />
                 <div className="card-body">
                  <h5 className="card-title text-truncate">{props.lesson.title}</h5>
                  <p className="card-text"  dangerouslySetInnerHTML={{ __html:props.lesson.body}}></p>
                  <a href="" className="btn btn-primary">Detail</a>
                </div>
              </div>    
    )
}

export default Lesson
