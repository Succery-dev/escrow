const CustomButton = ({
  text,
  styles,
}: {
  text: string;
  styles: string;
}): JSX.Element => {
  return <button className={styles}>{text}</button>;
};

export default CustomButton;
