import { useParams } from "react-router-dom";
import "./TrackDetails.css";

function TrackDetails({data}) {
const { id } = useParams();
    return ( 

    <div className="route-details">
            <h1>Route details - {id}</h1>
            <p>{data.title}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci consequat tortor tellus neque mauris rhoncus, accumsan. Dictum imperdiet feugiat dis id massa feugiat. A id diam, magnis purus. Mi neque sem ultrices phasellus mauris nibh ipsum nibh. Ut felis arcu tristique urna ut egestas elit, duis viverra.</p>
    </div>

     );
}

export default TrackDetails;