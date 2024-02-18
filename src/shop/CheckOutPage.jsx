import React, { useState } from 'react'

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    // handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    


  return (
    <div className='ModalCard'>
        
    </div>
  )
}

export default CheckOutPage
