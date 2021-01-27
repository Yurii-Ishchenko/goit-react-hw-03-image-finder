// import { Component } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import fetchImage from '../../servises/Image-api';
import Loaders from '.././Loader/Loader';
import Error from '.././Error/Error';
import { useState, useEffect } from 'react';

export default function ImageInfo({ imageTitle }) {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const handlePageIncrement = () => {
    setPage(page => page + 1);
  };

  useEffect(() => {
    if (!imageTitle) {
      return;
    }

    fetchImages();

    function fetchImages() {
      setStatus('pending');
      fetchImage(imageTitle, page)
        .then(
          images => setImages(i => [...i, ...images.hits]),
          setStatus('resolved'),
        )
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }
  }, [imageTitle, page]);

  if (status === 'idle') {
    return <h1 style={{ textAlign: 'center' }}>Enter image title</h1>;
  }
  if (status === 'pending') {
    return <Loaders />;
  }
  if (status === 'rejected') {
    <Error message={error.message} />;
  }
  if (status === 'resolved') {
    return (
      <>
        <ImageGallery images={images} />
        <Button onLoadMore={handlePageIncrement} />
      </>
    );
  }
}

// export default class ImageInfo extends Component {
//   state = {
//     images: [],
//     page: 1,
//     error: null,
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevImage = prevProps.imageTitle;
//     const nextImage = this.props.imageTitle;

//     if (prevState.page !== this.state.page) {
//       this.fetchImages();
//     }

//     if (prevImage !== nextImage) {
//       this.setState({ images: [], page: 1, error: null });

//       this.fetchImages();
//     }
//   }
//   fetchImages = () => {
//     this.setState({ status: 'pending' });
//     fetchImage(this.props.imageTitle, this.state.page)
//       .then(images =>
//         this.setState(prevState => ({
//           images: [...prevState.images, ...images.hits],
//           status: 'resolved',
//         })),
//       )

//       .catch(error => this.setState({ error, status: 'rejected' }));
//   };
//   handlePageIncrement = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     console.log(this.state.page);
//     const { status, error, images } = this.state;

//     if (status === 'idle') {
//       return <h1 style={{ textAlign: 'center' }}>Enter image title</h1>;
//     }
//     if (status === 'pending') {
//       return <Loaders />;
//     }
//     if (status === 'rejected') {
//       <Error message={error.message} />;
//     }
//     if (status === 'resolved') {
//       return (
//         <>
//           <ImageGallery images={images} />
//           <Button onLoadMore={this.handlePageIncrement} />
//         </>
//       );
//     }
//   }
// }
