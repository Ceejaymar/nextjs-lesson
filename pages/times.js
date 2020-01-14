import axios from 'axios';

const TrainTimes = (props) => {
  console.log(props);
  return (
    <div>
      {
        props.times.map((time, index) => (
          <p key={index}>{time.time}</p>
        ))
      }
    </div>
  )
}

TrainTimes.getInitialProps = async ({ query }) => {
  console.log(query);
  const res = await axios.get(`https://api.wheresthefuckingtrain.com/by-id/${query.id}`);

  return { times: res.data.data[0].N };
}

export default TrainTimes;
