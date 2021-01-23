import { Box, Divider } from '@material-ui/core';
import PageLinks from '../PageLinks';
import Title from '../Title';

const Header = () => {
  return (
    <Box textAlign="center">
      <Title />
      <PageLinks />
      <Divider />
    </Box>
  );
};

export default Header;
