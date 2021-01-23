import { Box, Typography } from '@material-ui/core';

const Home = () => {
  return (
    <Box pt={4}>
      <Box>
        <Typography variant="h5" color="secondary">
          Lorem Ipsum
        </Typography>
        <Box pt={2}>
          <Typography variant="body1" color="primary">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining es
          </Typography>
        </Box>
      </Box>
      <Box pt={2}>
        <Typography variant="h5" color="primary">
          Lorem Ipsum
        </Typography>
        <Box pt={2}>
          <Typography variant="body1" color="secondary">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that It is a long established fact that a
            reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
