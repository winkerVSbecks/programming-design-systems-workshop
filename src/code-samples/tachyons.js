export const tachyonsComponent = `
const Button = ({ className, ...props }) => {

  const cx =
    'bn f6 dim br2 pv3 ph4 white bg-purple ' +
    className;

  return <button className={cx} {...props} />;
};

render(<Button>Update</Button>);`;

export const tachyonsClassNameComponent = `
const Button = ({
  color = 'white',
  bg = 'purple',
  className,
  ...props
}) => {
  const cx = classNames(
    'bn f6 dim br2 pv3 ph4',
    color,
    \`bg-\${bg}\`,
    className
  );

  return <button className={cx} {...props} />;
};

render(
  <div className="flex flex-wrap justify-center">
    <Button className="mb3">
      Update
    </Button>

    <Button bg="moon-gray" color="dark-gray">
      Cancel
    </Button>
  </div>
);`;

export const heading = `<Heading
  level={2}
  f={{ all: 5, m: 4, l: 3 }}
  lh="solid"
  color="navy"
  bg="light-purple"
  mt={0}
  className="flex-auto"
>
  Section Heading
</Heading>`;

export const headingRender = `<h2
  class="f5 f4-m f3-l lh-solid navy bg-light-purple mt0 flex-auto"
>
  Section Heading
<h2/>`;

export const curvedBox = `<CurvedBox w={100} bg="white" topLeft>
  <Box pa={4} bg="transparent" style={[s.flx_i, s.aic, s.jcc]}>
    <Heading3 mb={2}>good morning, matt</Heading3>

    <Text lh="copy" f={5} mb={3}>
      Here is your schedule for today.
    </Text>

    <Stats
      jobs={jobsCount}
      items={items}
      onPressInventory={onPressInventory}
      isInventoryLoaded={isInventoryLoaded}
    />
  </Box>
  {children}
</CurvedBox>
`;

export const tachyonsComponentButton = `
// import styled from 'tachyons-components';

const Button = styled('button')\`
  bn f6 dim br2 pv3 ph4 white bg-purple
\`;

render(
  <div className="flex flex-wrap justify-center">
    <Button mb3>
      Update
    </Button>

    <Button bg-moon-gray dark-gray>
      Cancel
    </Button>
  </div>
);`;
