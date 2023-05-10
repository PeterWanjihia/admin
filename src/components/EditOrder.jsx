import { useDispatch } from "react-redux";
import { toggleOrder } from "../redux/features/ModalSlice";
import { MdCancel } from "react-icons/md";

function EditOrder() {
  const dispatch = useDispatch();
  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(toggleOrder());
  };
  return (
    <section className="flex item-center justify-center w-full h-screen bg-[#00000019]">
      <form className="p-5 rounded-sm bg-white w-full max-w-[500px] my-auto mx-auto flex flex-col relative mx-3">
        <p className="text-xl border-b-[1px] border-bcolor py-2">
          Update order -
          <span className="text-red font-bold text-lg ml-3">HF47BUBB689w</span>
          <MdCancel
            onClick={() => dispatch(toggleOrder())}
            className="ml-auto text-3xl absolute right-5 top-5 cursor-pointer text-lblack"
          />
        </p>
        <p className="text-lg mt-5 font-bold">
          Order ID :
          <span className="text-[15px] text-lblack font-[400] ml-5">
            DSDS435763GCJ
          </span>
        </p>
        <p className="text-lg mt-5 font-bold">
          Order Date :
          <span className="text-[15px] text-lblack font-[400] ml-5">
            22/03/2023
          </span>
        </p>
        <p className="text-lg mt-5 font-bold">
          Deliver By :
          <span className="text-[15px] text-lblack font-[400] ml-5">
            30/03/2023
          </span>
        </p>
        <p className="text-lg mt-5 font-bold">
          Delivery fee :
          <span className="text-[16px] text-green ml-5 font-bold">Ksh 400</span>
        </p>
        <p className="text-lg mt-5 font-bold">
          Status :
          <select className="px-5 ml-5 font-[400]">
            <option value="approaving">Approaving</option>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
            <option value="failed">Failed</option>
          </select>
        </p>
        <button
          onClick={handleUpdate}
          className="bg-red h-[40px] px-10 text-md font-bold text-white ml-auto cursor pointer"
        >
          Update
        </button>
      </form>
    </section>
  );
}

export default EditOrder;
