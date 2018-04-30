export const tachyonComponent = `
const Button = ({ className, ...props }) => {

  const cx =
    'bn f6 dim br2 pv3 ph4 white bg-purple ' +
    className;

  return <button className={cx} {...props} />;
};

render(<Button>Save</Button>);`;

export const tachyonClassNameComponent = `
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
  <div className="flex flex-column">
    <Button className="mb3">
      Save
    </Button>

    <Button bg="moon-gray" color="dark-gray">
      Cancel
    </Button>
  </div>
);`;

export const heading = `<Heading
  level={2}
  f={5}
  lh="solid"
  color="navy"
  bg="light-purple"
  mt={0}
  className="flex-auto"
>
  Section Heading
</Heading>`;

export const headingRender = `<h2 class="f5 f4-m f3-ns lh-solid navy bg-light-purple mt0">
  Section Heading
<h2/>`;

export const curvedBlock = `<CurvedBlock w={100} bg="white" topLeft>
  <Block pa={4} bg="transparent" style={[s.flx_i, s.aic, s.jcc]}>
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
  </Block>
  {children}
</CurvedBlock>
`;