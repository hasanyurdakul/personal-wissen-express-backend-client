import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { emptyCart, removeFromCart } from "../store/features/cartSlice";
import YesNoModal from "../components/YesNoModal";
import { toast } from "react-toastify";

const CartDetail = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.success("Product removed from cart.", {
      autoClose: 2000,
    });
  };
  const onYes = () => {
    dispatch(emptyCart());
    setIsModalVisible(false);
    toast.success("Cart is emptied.", {
      autoClose: 2000,
    });
  };
  const onNo = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="max-w-[72rem] min-w-[72rem]   min-h-[calc(100vh-68.579px)]  p-2 gap-5">
      <div className="flex justify-end mb-2">
        <button
          onClick={() => setIsModalVisible(true)}
          className="bg-slate-900 text-slate-400 uppercase font-semibold text-sm py-1 px-2 rounded-lg flex justify-center items-center "
        >
          <span> Empty Cart</span>
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartProducts.map((product, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    src={product.image}
                    alt=""
                    className="w-12"
                    width={"3rem"}
                  />
                </TableCell>
                <TableCell align="left">{product.name}</TableCell>
                <TableCell align="left">
                  <p className="line-clamp-1">{product.description}</p>
                </TableCell>
                <TableCell align="left">{product.quantity}</TableCell>
                <TableCell align="left">₺{product.price}</TableCell>
                <TableCell align="right">
                  <button onClick={() => handleRemoveFromCart(product)}>
                    <DeleteIcon color="error" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <YesNoModal
        onYes={onYes}
        onNo={onNo}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        title={"Are You Sure You Want To Empty Cart?"}
        text={"This action cannot be undone."}
      />
    </div>
  );
};

export default CartDetail;
