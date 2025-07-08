import { Button } from "antd";
import { useEffect } from "react";
import { axios } from "../../utils";

const HomePage = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const resp = await axios.get("/users/1");
    console.log(resp.data);
  };
  return (
    <div>
      <Button type="primary">Primary</Button>
    </div>
  );
};

export default HomePage;
