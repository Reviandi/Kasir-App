import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/Utils";
import { API_URL } from '../utils/Constants';

export default class TotalBayar extends Component {
    submitTotalBayar = (TotalBayar) => {
        const pesanan = {
            total_bayar: TotalBayar,
            menus: this.props.keranjangs
        }

        axios.post(API_URL+"pesanans", pesanan).then((res) => {
            this.props.history.push('/sukses')
        })

    };

  render() {
    const TotalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
     <>
     {/* Web */}
     <div className="fixed-bottom d-none d-md-block">
     <Row>
       <Col md={{ span: 3, offset: 9 }} className="px-4">
         <h4>
           Total Bayar:{" "}
           <strong className="float-right mx-5">
             Rp. {numberWithCommas(TotalBayar)}
           </strong>
         </h4>
         <Button
           bg="primary"
           block
           center
           className="mb-2 mt-4 mx-5 ml-3"
           size="lg"
           onClick={ () => this.submitTotalBayar(TotalBayar)}
         >
           <FontAwesomeIcon icon={faShoppingCart} className="mx-3" />
           <strong>BAYAR</strong>
         </Button>
       </Col>
     </Row>
   </div>
   
      {/* Mobile */}
   <div className="d-sm-block d-md none">
   <Row>
     <Col md={{ span: 3, offset: 9 }} className="px-4">
       <h4>
         Total Bayar:{" "}
         <strong className="float-right mx-5">
           Rp. {numberWithCommas(TotalBayar)}
         </strong>
       </h4>
       <Button d-grid gap variant="primary" size="lg">
         <FontAwesomeIcon icon={faShoppingCart} className="mx-3" />
         <strong>BAYAR</strong>
       </Button>
     </Col>
   </Row>
 </div>
 </>
    );
  }
}
