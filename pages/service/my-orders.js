import Orders from "@src/modules/orders";
import { withAuth } from "@src/shared/components";

const MyOrders = () => {
  return <Orders />;
};

export default withAuth(MyOrders);