import React, { useState } from 'react'
import { MatchStartComponent } from '../../components/match_start_room/MatchStartComponent'
import { NavbarComponent } from '../../components/navbar/NavbarComponent'
import { SecondNavbarComponent } from '../../components/SecondNavbarComponent/SecondNavbarComponent'
import { ModalModifyPredict } from '../../utils/Modals/ModalPredictModify/ModalModifyPredict'

export const MatchesPredicts = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <NavbarComponent />
      <SecondNavbarComponent />
      <div className="matches__list__container__principal">
        <div class="container text-center">
          <div class="row match__list__container__principal">
            <div class="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
            <div class="col-sm-2 col-12" onClick={handleShow}>
                <MatchStartComponent />
            </div>
          </div>
        </div>
      </div>
      <ModalModifyPredict show={show} handleClose={handleClose} />
    </>
  )
}