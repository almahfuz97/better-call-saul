import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import fist from '../../assets/fist.png'
import 'react-photo-view/dist/react-photo-view.css';

export default function ServiceDetails() {
    return (
        <div>
            <h1>
                <PhotoProvider>
                    <PhotoView src={fist}>
                        <img src={fist} alt="" />
                    </PhotoView>
                </PhotoProvider>

            </h1>
        </div>
    )
}
