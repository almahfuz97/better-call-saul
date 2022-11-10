import { Button, Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import checkmark from '../../assets/checkmark.png'
import invalid from '../../assets/invalid.png'


export default function SuccesfulModal({ clicked, str, icon }) {
    const [visible, setVisible] = useState();
    let img, buttonColor;

    // set modal icon and button color based on success failure
    if (icon === '0') {
        img = checkmark;
        buttonColor = 'success';
    }
    else {
        img = invalid;
        buttonColor = 'failure';
    }
    useEffect(() => {
        setVisible(clicked);
    }, [clicked])

    return (
        <React.Fragment>
            <Modal
                show={visible}
                size="md"
                popup={true}
                onClose={() => {
                    setVisible(false)
                }
                }
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <img src={img} className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            {str}
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color={buttonColor}
                                onClick={() => {
                                    setVisible(false)
                                }}
                            >
                                Ok
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}
