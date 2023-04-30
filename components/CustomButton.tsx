import Link from "next/link";

const CustomButton = ({
  text,
  styles,
}: {
  text: string;
  styles: string;
}): JSX.Element => {
  return (
    <Link href="/" target="_blank">
      <button className={styles}>{text}</button>
    </Link>
  );
};

export default CustomButton;
