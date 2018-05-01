export const tachyonsCard = `const ProfileCard = props => (
  <Card width={5} borderRadius={2}>
    <Box p={3} textAlign="center">
      <Avatar w={3} h={3} src={props.image} />

      <Heading>{props.name}</Heading>

      <Heading is="h2" color="gray" fw={4}>
        {props.title}
      </Heading>
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
