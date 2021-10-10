import { useParams } from 'react-router';


function PersonalFilmInfo() {

    const {id} = useParams()
    console.log(id)

    return (
      <div>
          
        <h2>Now showing post</h2>
      </div>
    );
}

export default PersonalFilmInfo