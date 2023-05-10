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
    <form className="bg-white rounded-md p-5 w-full max-w-[500px] flex flex-col mx-5 relative">
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
        Delivery fee :<span className="text-lblack ml-5 font-[450]">Ksh</span>
        <input
          type="text"
          value={500}
          className="text-[16px] text-green ml-2 font-bold bg-input px-5 w-[100px] h-[40px]"
        />
      </p>
      <p className="text-lg mt-5 font-bold">
        Status :
        <select className="px-5 ml-5 font-[400] h-[40px] text-lblack">
          <option value="approaving">Approaving</option>
          <option value="pending">Pending</option>
          <option value="delivered">Delivered</option>
          <option value="failed">Failed</option>
        </select>
      </p>
      <button
        onClick={handleUpdate}
        className="bg-red self-end h-[45px] rounded-md w-[60%] text-md font-bold text-white mt-10"
      >
        Update
      </button>
    </form>
  );
}

export default EditOrder;
