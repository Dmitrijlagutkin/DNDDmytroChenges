import React from "react";
import ImageUploader from "react-images-upload";

export default function UploadImg () {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  }

  return (
    <div >
      <ImageUploader
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div>
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} >
                <img src={image.data_url} alt="" width="100" />
                <div >
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploader>
    </div>
  );
}

// 	const [images, setImages] = React.useState([]);
//   const maxNumber = 69;
//   const onChange = (image) => {
//     // data for submit
//     console.log(image);
//     setImages(image);
//   };

//  return (
// 	 <div>
// 			IMG
// 			<ImageUploader
// 		withIcon={true}
// 		buttonText='Choose images'
// 		onChange={onChange}
// 		imgExtension={['.jpg', '.gif', '.png', '.gif']}
// 		maxFileSize={5242880}
// 		/>
// 	 </div>
	
//  )

