import React, { useState } from "react";
import axios from "axios";
import FileBase64 from 'react-file-base64';

import base64 from "base-64"


export default function ImageUploader() {
    const [postImage, setPostImage] = useState(null);

    const [auth, setAuth] = useState(JSON.parse(localStorage.getItem('auth')))
    const [dec, setDec] = useState(null)
    const [im, setIm] = useState(null)
    // console.log(auth)

    const url = "http://localhost:5000/uploads";

    // const createImage = (newImage) => 

    const createPost = async (post) => {
        try {
            await axios.post(`user/update/profile/image/${auth.user._id}`, post)
                .then((res) => {
                    console.log(res)
                });
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // createPost(postImage);
        await axios.put(`user/update/profile/image/${auth.user._id}`, {
            myFile: postImage
        })
            .then((res) => {
                console.log(res.data)
            }).catch(err => (console.log(err.message)));
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const handleFileUpload = async (e) => {
        console.log(e.target.files)
        const file = e.target.files[0];
        const enc = base64.encode(file)
        console.log(enc)
        // const base6 = await convertToBase64(file);
        // setPostImage(enc);
        setPostImage(enc);
    };


    const getHandler = async (e) => {
        e.preventDefault();
        // createPost(postImage);
        await axios.get(`user/profile/image/${auth.user._id}`)
            .then((res) => {
                console.log(res.data.picture)
                setDec(base64.decode(res.data.picture))
                // setIm(URL.createObjectURL(dec))
                // getUrl();
                previewFile()
            }).catch(err => (console.log(err.message)));


    }

    function previewFile() {
        const preview = document.getElementById('#profile');
        // const file = document.getElementById('#filo').arrayBuffer;
        // const f = new File().arrayBuffer
        const reader = new FileReader();

        reader.addEventListener("load", function () {
          // convert image file to base64 string
          preview.src = reader.result;
        }, false);

        if (dec.blob) {
          reader.readAsDataURL(dec.blob);
        }
      }


    const getUrl = () => {
        let ima = new Image()
        const url = window.URL.createObjectURL(dec)
        ima.src = url
        setIm(ima.src)
    }

    console.log(dec)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                id="filo"
                    type="file"
                    label="Image"
                    name="myFile"
                    accept=".jpeg, .png, .jpg"
                    onChange={(e) => handleFileUpload(e)}
                />

                <button type="submit">Submit</button>
            </form>
            <button onClick={getHandler}>
                get
            </button>
            {
                dec &&
                <img id="profile" src={im} alt="logo" />
            }
        </div>
    );
}

// const ImageUploader = () => {
//     const [state, setState] = useState([]);
//     const [im, setIm] = useState(null);

//     // console.log(state)

//     const getFile = (file) => {
//         console.log(file)
//         const preview = document.getElementById('profile');
//         // const file = document.querySelector('input[type=file]').files[0];
//         const reader = new FileReader();

//         reader.addEventListener("load", function () {
//             // convert image file to base64 string
//             preview.src = reader.result;
//         }, false);

//         if (file && file.type.match('image.*')) {
//             reader.readAsDataURL(file);
//         }
//         // setIm(await URL.createObjectURL(new Blob([file.base64], {type: 'image/png'})))
//     }

//     function previewFile() {
//         const preview = document.querySelector('img');
//         const file = document.querySelector('input[type=file]').files[0];
//         const reader = new FileReader();

//         reader.addEventListener("load", function () {
//             // convert image file to base64 string
//             preview.src = reader.result;
//         }, false);

//         if (file) {
//             reader.readAsDataURL(file);
//         }
//     }


//     return (
//         <div>
//             <FileBase64
//                 multiple={false}
//                 onDone={getFile} />

//             <img id="profile" src="" width="100px" heigh alt="" />
//         </div>
//     )

// }

// export default ImageUploader