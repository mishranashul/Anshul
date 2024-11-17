import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import "../Style/index.css";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => (
    <div className="container text-center my-5">
      <h4 className="p-3 display-5">Your Cart is Empty</h4>
      <Link to="/store" className="btn btn-outline-primary">
        <i className="fa fa-arrow-left"></i> Continue Shopping
      </Link>
    </div>
  );

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">Item List</h5>
                </div>
                <div className="card-body">
                  {state.map((item) => (
                    <div key={item.id}>
                      <div className="row align-items-center">
                        <div className="col-lg-3 col-md-12">
                          <img src={item.image} alt={item.title} className="img-fluid rounded" />
                        </div>
                        <div className="col-lg-5 col-md-6">
                          <h6>{item.title}</h6>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="d-flex align-items-center">
                            <button className="btn btn-secondary" onClick={() => removeItem(item)}>
                              <FaMinus />
                            </button>
                            <span className="mx-2">{item.qty}</span>
                            <button className="btn btn-secondary" onClick={() => addItem(item)}>
                              <FaPlus />
                            </button>
                          </div>
                          <p className="mt-2">
                            <strong>${item.price} x {item.qty} = ${Math.round(item.price * item.qty)}</strong>
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Products ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Shipping<span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <strong>Total amount</strong><strong>${Math.round(subtotal + shipping)}</strong>
                    </li>
                  </ul>
                  <Link to="/checkout" className="btn btn-dark btn-lg btn-block mt-3">
                    Go to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Cart</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
