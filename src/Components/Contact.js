import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';

const Contact = () => {
  return (
    <>
        {/* ================ contact section  =================== */}

        <div className="contact_section"  style={{marginTop:"100px"}}>
                <div className="container">
                    <div className="title text-center">
                        <h2 className='mb-5'>Contact Us</h2>
                    </div>
                    <form>
                        <div className="row p-5">
                            <div className="col-lg-6 col-sm-6">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Enter email" required />
                                </Form.Group>

                            </div>
                            <div className="col-lg-6 col-sm-6">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" required />
                                </Form.Group>

                            </div>
                            <div className="col-lg-12">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Subject" required />
                                </Form.Group>

                            </div>
                            <div className="col-lg-12">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <textarea className="form-control" name="message" rows="8" placeholder="Message" required></textarea>
                                </Form.Group>

                            </div>
                            <div className="btn-sub text-center">
                                <Button type='submit' variant="contained" className='btn12 my-2 ' color="secondary">
                                Send Message
                                </Button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
    </>
  )
}

export default Contact;