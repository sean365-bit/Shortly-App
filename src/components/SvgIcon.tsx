type SvgIconProps = React.SVGProps<SVGSVGElement> & {
  d: string;
};

const SvgIcon: React.FC<SvgIconProps> = ({ d, ...props }) => (
  <svg {...props}>
    <path d={d} />
  </svg>
);

export default SvgIcon;
