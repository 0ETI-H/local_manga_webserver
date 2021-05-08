import { GetServerSideProps } from "next";
import { AddLoliForm } from "../../features/lolis/components/AddLoliForm";

interface Props {
  firstName: string;
}

const LoliIndex: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      <AddLoliForm></AddLoliForm>
    </div>
  );
};

// Runs serverside code
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  return {
    props: {
      firstName: "REIMU",
    },
  };
};

export default LoliIndex;
