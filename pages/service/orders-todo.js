import Offerts from "@src/modules/Offerts/Offerts";
import { withAuth } from "@src/shared/components";

const OffertsTest = () => {
  return <Offerts />;
};

export default withAuth(OffertsTest);
