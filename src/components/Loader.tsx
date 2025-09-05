import { Typography } from "@mui/material";

type Props = {};

const Loader = () => {
  return (
    <div className="flex items-center justify-center fixed z-30 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 backdrop-blur-md">
      <Typography variant="h4" fontWeight={"bold"}>
        Loading...
      </Typography>
    </div>
  );
};

export default Loader;
