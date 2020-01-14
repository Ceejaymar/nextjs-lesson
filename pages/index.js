import axios from 'axios';
import Link from 'next/link';
const Index = (props) => {
  return (
    <div>
      {
        props.stations.map((station) => (
          <Link href={`/times?id=${station.id}`} as={`/t/${station.id}`}>
            <a key={station.id}>{station.name}</a>
          </Link>
        ))
      }
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await axios.get('  https://raw.githubusercontent.com/jonthornton/MTAPI/master/data/stations.json');

  const stations = [];

  for(const station in res.data) {
    stations.push(res.data[station]);
  }

  return { stations };
}

export default Index;
