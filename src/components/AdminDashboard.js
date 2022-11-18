import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './styles/Dashboard.css';
import Swal from 'sweetalert2';
import check from '../images/check.svg';
import edit from '../images/edit.svg';
import del from '../images/delete.svg';
import plus from '../images/plus.svg';
import FormInput from './FormInput';
import AdminServices from '../services/AdminServices';
import { Link } from 'react-router-dom';
import { Navbar, Container, Form } from 'react-bootstrap';




function Card({ pack, openModal, isNewCard = false }) {

    function getDescriptionList(desc) {
        return desc.split(' + ');
    }


    const deleteWP = async () => {
        let result = await AdminServices.deleteWashPack(pack.id);
        if (result) {
            console.log(result);
            Swal.fire('Success', 'The order is successfully deleted!', 'success');

        } else {
            Swal.fire('Oh snap!', 'Something went wrong', 'error');
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    return (
        <>

            <div className='cardWrapper'>
                {isNewCard && (
                    <div className='plusWrapper' onClick={() => openModal(null)}>
                        <img src={plus} />
                    </div>
                )}
                {!isNewCard && (
                    <>
                        <div className='cardContent'>
                            <div className='cardHeader'>
                                <div className='title'>{pack.name}</div>
                                <div className='cost'>&#x20B9;{pack.cost}</div>
                            </div>

                            <div className='desc'>
                                {getDescriptionList(pack.description).map(function (desc) {
                                    return (
                                        <div className='descItem'>
                                            <img src={check} />
                                            <span>{desc}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className='cardFooter'>
                            <div className='control' onClick={() => openModal(pack)}>
                                <img src={edit} />
                                <span>Edit</span>
                            </div>
                            <div className='control' onClick={handleShow}>
                                <img src={del} />
                                <span>Remove</span>
                            </div>
                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header>
                                    <Modal.Title>Are you sure?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body><p>Do you want to remove this wash pack?</p></Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleClose}>No</Button>
                                    <Button variant="primary" onClick={deleteWP}>Yes</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </>
                )}
            </div></>
    )
}

function AdminDashboard() {
    const [showBasic, setShowBasic] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPack, setCurrenPack] = useState(null);

    const [isFormInvalid, setIsFormInvalid] = useState(false);

    const [packName, setPackName] = useState('');
    const [packDesc, setPackDesc] = useState('');
    const [packCost, setPackCost] = useState('');

    const [packNameError, setPackNameError] = useState('');
    const [packDescError, setPackDescError] = useState('');
    const [packCostError, setPackCostError] = useState('');

    const [washPacks, setWashPacks] = useState([]);
    useEffect(() => {
        return async () => {
            const data = await AdminServices.getAllWashPacks();
            console.log(data);
            setWashPacks(data);
        }
    }, []);

    const [washPackList, setWashPackList] = useState([]);
    const addWashPack = async () => {
        console.log(data)
        const data = await AdminServices.createWashPack();
        if (data) {
            Swal.fire('Success', 'The wash pack is successfully added!', 'success');

        } else {
            Swal.fire('Oh snap!', 'Something went wrong', 'error');
        }
        console.log(data.washPackList);
        setWashPackList(data.washPackList);
    }

    function openModal(pack) {
        setCurrenPack(pack);
        setPackName('');
        setPackDesc('');
        setPackCost('');
        setIsModalOpen(true);
    }

    function isTextInvalid(text) {
        const specialChars = ['@', '*', '=', '#'];
        return specialChars.some(c => text.indexOf(c) >= 0);
    }

    useEffect(function () {
        if (!packName || packName.length === 0) {
            setPackNameError('Required field');
        } else if (isTextInvalid(packName)) {
            setPackNameError('Invalid name');
        } else {
            setPackNameError('');
        }
    }, [packName]);

    useEffect(function () {
        if (!packDesc || packDesc.length === 0) {
            setPackDescError('Required field');
        } else if (isTextInvalid(packDesc)) {
            setPackDescError('Invalid description text');
        } else {
            setPackDescError('');
        }
    }, [packDesc]);

    useEffect(function () {
        if (!packCost || packCost.length === 0) {
            setPackCostError('Required field');
        } else if (!Number(packCost) || Number(packCost) <= 0 || packCost.toString().indexOf('e') >= 0) {
            setPackCostError('Invalid cost amount');
        } else {
            setPackCostError('');
        }
    }, [packCost]);

    useEffect(function () {
        setIsFormInvalid(packNameError || packDescError || packCostError);
    }, [packNameError, packDescError, packCostError])

    return (
        <>

            <div className='wrapper'>
                <div className='sidebarWrapper'>
                    <div className='item'>Washpacks</div>
                    <div className='item'>
                        <Link to='/logout'>Logout</Link>
                    </div>
                </div>
                <div className='contentWrapper'>
                    {washPacks.map(function (pack) {
                        return <Card key={pack.id} pack={pack} openModal={openModal} />
                    }
                    )}
                    <Card isNewCard openModal={openModal} />
                </div>
            </div>
            {isModalOpen && <div className='modalClass' />}
            {isModalOpen &&
                <div className='modalContent'>
                    <div className='cross' onClick={() => setIsModalOpen(false)}>&times;</div>
                    <FormInput
                        label='Wash Pack Name'
                        placeholder='Wash Pack Name'
                        error={packNameError}
                        value={packName}
                        onChange={setPackName}
                    />
                    <FormInput
                        label='Wash Pack Description'
                        placeholder='Wash Pack Description'
                        error={packDescError}
                        value={packDesc}
                        subLabel="For multiple lines, separate with ' + '"
                        onChange={setPackDesc}
                    />
                    <FormInput
                        label='Wash Pack Cost (in &#x20B9;)'
                        placeholder='Wash Pack Cost'
                        error={packCostError}
                        value={packCost}
                        onChange={setPackCost}
                        inputType='number'
                    />
                    <div className='btnWrapper'>
                        <div className={`saveBtn ${isFormInvalid ? 'disabled' : ''}`} onClick={addWashPack}>
                            Save
                        </div>
                    </div>

                </div>
            }
        </>
    );
}
export default AdminDashboard;