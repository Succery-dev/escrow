import Link from "next/link";

const CustomButton = ({
  text,
  styles,
}: {
  text: string;
  styles: string;
}): JSX.Element => {
  return (
    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfFZ5KKZsIOjBRVVDsgkv2YNdhK9nG4nhc5ojgJj2Gf47qs9w/viewform" target="_blank">
      <button className={styles}>{text}</button>
    </Link>
  );
};

export default CustomButton;
