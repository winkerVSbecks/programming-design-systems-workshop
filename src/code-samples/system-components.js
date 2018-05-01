export const tachyonsCard = `const ProfileCard = props => (
  <Card
    width={4}
    p={[3, 4, 4]}
    borderColor="black-10"
  >
    <Box textAlign="center">
      <Avatar
        width={3}
        height={3}
        borderColor="black-05"
        src={props.image}
      />
      <Box p={2}>
        <Heading fontSize={4} mb={2}>
          {props.name}
        </Heading>
        <Text fontSize={2} my={0}>
          {props.title}
        </Text>
      </Box>
    </Box>
  </Card>
);`;

export const responsiveProps = `
<Box
  width={[
    1,    // 100% below the smallest breakpoint
    1/2,  // 50% from the next breakpoint and up
    1/4,   // 25% from the next breakpoint and up
  ]}
/>
`;
