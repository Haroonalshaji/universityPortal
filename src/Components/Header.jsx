import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
    return (
        <div>
            <>
                <MDBNavbar light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>
                            <img
                                src='https://t3.ftcdn.net/jpg/02/38/94/20/360_F_238942076_DJbUIy5fOoMApByluw1fZggTVuUaMwTQ.jpg'
                                height='60'
                                alt=''
                                loading='lazy'
                                style={{borderRadius:'50%'}}
                            />
                            <h3>KNOWLEDGE UNI PORTAL</h3>
                        </MDBNavbarBrand>
                    </MDBContainer>
                </MDBNavbar>
            </>
        </div>
    )
}

export default Header