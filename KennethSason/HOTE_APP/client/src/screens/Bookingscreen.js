import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
const Bookingscreen = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [room, setRoom] = useState();
  let { roomid, fromDate, toDate } = useParams();
  const from = moment(fromDate, "DD-MM-YYYY");
  const to = moment(toDate, "DD-MM-YYYY");
  const totalDays = moment.duration(to.diff(from)).asDays() + 1;
  console.log("Total Days", totalDays);
  const [totalAmount, setTotalAmount] = useState();

  console.log(roomid);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = (
          await axios.post("/api/rooms/getroombyid", {
            roomid: roomid,
          })
        ).data;
        setTotalAmount(data.rentperday * totalDays);
        setRoom(data);
        setLoading(false);
        console.log(data);
      } catch (e) {
        setError(true);
        console.log(e);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const bookRoom = async () => {
    const bookingDetails = {
      room,
      userId: JSON.parse(localStorage.getItem("user"))._id,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
    };
    try {
      const result = (
        await axios.post("/api/bookings/bookroom", bookingDetails)
      ).data;
      console.log(result, "++++++++++++++++++________BOOKING ROOM");
    } catch (e) {
      console.log("ERRPRRRRR", e);
    }
  };
  return (
    <div>
      <h1>Booking screen</h1>
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : error ? (
        <Error />
      ) : (
        <div className="container mt-5">
          <div className="row justify-content-center bs">
            <div className="col-md-5 text-start">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigimg" />
            </div>
            <div className="col-md-5 ms-auto text-end">
              <div>
                <b>
                  <h1>Booking details</h1>
                  <hr />
                  <p>Name:{JSON.parse(localStorage.getItem("user")).name}</p>
                  <p>From Date:{fromDate} </p>
                  <p>To Date: {toDate}</p>
                  <p>Max Count: {room.maxCount}</p>
                </b>
              </div>
              <div>
                <b>
                  <h1>Amount</h1>
                  <hr />
                  <p>Total days:{totalDays} </p>
                  <p>Rent per day: {room.rentperday}</p>
                  <p>Total Amount: {totalAmount}</p>
                </b>
              </div>
              <div>
                <button
                  style={{ float: "right" }}
                  className="btn btn-primary"
                  onClick={bookRoom}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookingscreen;
