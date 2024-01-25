import { useGlobalContext } from "../../Hooks/useGlobalContext";

const Homepage = () => {
  const {properties} = useGlobalContext()
  return <div>
    {properties.map((p)=>{
      return <h1 key = {p._id}> {p.title} </h1>
    })}
  </div>;
};

export default Homepage;
