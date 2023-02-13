import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdCancel } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/actions/userAction';

const initialState = {
    productName: '',
    productPrice: '',
    productDescription: ''
}

const customStyles = {
    content: {
        top: '50%',
        width: '500px',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const ModalComponent = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(false)
    const [data, setData] = useState('')
    const dispath = useDispatch()
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!data.productName || !data.productPrice || !data.productDescription) {
            setError(true)
        } else {

            dispath(addProduct(data))
        }
        closeModal()

    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <button className='btn' onClick={openModal}>ADD PRODUCT</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button className='btn' onClick={closeModal}><MdCancel /></button>
                    <section className="form" >
                        <form onSubmit={handleSubmit} >
                            <div className="form-group">
                                <input onChange={(e) => {
                                    setData({ ...data, [e.target.name]: e.target.value })

                                }} style={{ width: '300px', height: '40px' }} type="text"
                                    name='productName'
                                    placeholder='Product Name'
                                    value={data.productName} />
                            </div>
                            <div className="form-group" >
                                <input onChange={(e) => {
                                    setData({ ...data, [e.target.name]: e.target.value })
                                }} style={{ width: '300px', height: '40px' }} type="number"
                                    name='price'
                                    placeholder='Price'
                                    value={data.productPrice} />
                            </div>
                            <div className="form-group" >
                                <input onChange={(e) => {
                                    setData({ ...data, [e.target.name]: e.target.value })
                                }} style={{ width: '300px', height: '40px' }} type="text"
                                    name='description'
                                    placeholder='Description'
                                    value={data.productDescription} />
                            </div>
                            <button className='btn' >ADD PRODUCT</button>
                        </form>
                    </section>
                </Modal>
            </div>
            {
                error && <h1 style={{color:'red'}} >all field is required</h1>
            }
        </>
    )
}

export default ModalComponent