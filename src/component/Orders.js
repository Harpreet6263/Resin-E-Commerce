
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import bin from './gallery/bin.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Orders() {
    const [buyData, setbuyData] = useState([]);
   
    const fetchbuyData = async () => {
        try {
            const response = await Axios.get('http://localhost:5001/buydata');
            setbuyData(response.data);
        } catch (error) {
            console.error('Error fetching buy data:', error);
        }
    };

    
    const handleDeleteItem = async (heading) => {
        try {
            await Axios.delete(`http://localhost:5001/deletebuyItem/${heading}`);
           
            fetchbuyData();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    useEffect(() => {
       
        fetchbuyData();
    }, []);
    const totalSum = buyData.reduce((acc, item) => acc + parseFloat(item.Buy), 0);

    const [confirmData, setConfirmData] = useState("");

    const sendDataConfirm = async () => {
        try {
            const response = await Axios.post('http://localhost:5001/setDataConfirm');
           
            setConfirmData(response.data); 
            alert("Your order has been confirmed. We will get in touch with you for order customization.")  
            window.location.reload();
          
 
        } catch (error) {
            console.error('Error sending confirmation data:', error);
        }
    }
    


  return (
    
    <div className='parentCart'>
      <div className="cardHeadParent">
    <h2 id='cartHead'>Orders</h2>
    <Link style={{ textDecoration: 'none' }} to="/confirmedorder"><p id="confiredorder">Confirmed Order -{'>'}</p></Link>
    </div>  
    {buyData.length === 0 ? (
        <p id='emptyCart'>No order yet. Go and shop now..</p>
    ) : (
        <>
            {buyData.map((item, index) => (
                <div className='childCart' key={index}>
                    <div>
                        <div id='cartHeading'>{item.Heading}</div>
                    </div>
                    <div>
                        <div><b>Rs.{item.Buy}</b></div>
                    </div>
                    <div>
                        <img id='trash' src={bin} alt="" onClick={() => handleDeleteItem(item.Heading)} />
                    </div>
                </div>
            ))}
            <div className="bill">
                <b>Total bill:</b> Rs. {totalSum}
            </div>
            <div className="cod">
                <h3 id='cod'>Order will be Cash on Delivery</h3>
            </div>
            <button id='proceedPay' onClick={sendDataConfirm}>Check Out</button>
        </>
    )}
</div>
  )
}
