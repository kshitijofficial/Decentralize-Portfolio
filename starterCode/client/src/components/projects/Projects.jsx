import React, {useState} from 'react'
import { FaDonate } from 'react-icons/fa';
import { Modal, ModalHeader, ModalBody, Row, Button } from "reactstrap"
import img from "../../assets/img1.png"
import "./Projects.css"

const Projects = () => {
    const [modal, setModal] = useState(false);
    return (
        <section className="project-section">
            <h1 className="title">Projects </h1>
            <div className="card-wrapper">
                 {[1,2,3].map((dummyValue)=>{
                    return ( <a href= "#" className="project-card" target='_blank' rel="noopener noreferrer" >
                    <div className="card-img">
                        <img src={img} alt="" /></div>
                    <div className="card-text">
                        <h3>Dapp Name</h3>
                        <p>Dapp Description</p>
                    </div>
                </a>)
                })} 
           
            </div>
 {/*  =========popup bootstrap==========  */}

 <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                        <ModalHeader toggle={() => setModal(!modal)}>
                            Enter the ETH you want to donate!
                        </ModalHeader>
                        <ModalBody>
                            <form >
                                <Row>
                                    <input id="eth" type="text" />
                                        <Button className='mt-4' >
                                            Send
                                        </Button>
                                </Row>
                            </form>
                        </ModalBody>
                    </Modal>
                    {/*  =========popup bootstrap end==========  */}
                    <p className='donate' onClick={() => setModal(true)}>Liked the dummyValue's ? Consider donating Eth's <FaDonate className='icon' /></p>
        </section>
    )
}

export default Projects
