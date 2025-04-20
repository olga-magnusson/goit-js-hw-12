import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let currentPage = 1;

/* FORM */

const form = document.querySelector('.form');

form.addEventListener('submit', async event => {
    event.preventDefault();
    
    const query = form.elements['search-text'].value.trim();

    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter search parameters!',
        });
        return;
    }

    currentPage = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(query, currentPage);

        if (data.hits.length === 0) {
            clearGallery();

            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });

            hideLoadMoreButton();
        } else {
            createGallery(data.hits);
            if (currentPage*15>= data.totalHits){
                hideLoadMoreButton();
                iziToast.info({
                    title: 'info',
                    message: "We're sorry, but you've reached the end of search results.",
                    });
            }else{
            showLoadMoreButton();
            }
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images. Please try again later.',
        });
        hideLoadMoreButton();
    } finally {
        hideLoader();
    }

    form.reset();
});


/*LOAD MORE BUTTON*/

const loadMoreButton = document.querySelector('.load-more-button');
loadMoreButton.addEventListener('click', async () => {

    const query = form.elements['search-text'].value.trim();

    currentPage++;
    showLoader();

    try {
        const data = await getImagesByQuery(query, currentPage);
        
        createGallery(data.hits);
        showLoadMoreButton();

        const imageSize = document.querySelector('.gallery-image').getBoundingClientRect();
        window.scrollBy(0, imageSize*2);

        if (data.hits.length === 0) {
            hideLoadMoreButton();
            iziToast.info({
                title: 'Info',
                message: 'We\'re sorry, but you\'ve reached the end of search results.',
            });
        } else {
            createGallery(data.hits);
        }
    } catch (error) {
        clearGallery();
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching more images. Please try again later.',
        });
    } finally {
        hideLoader();
    }
});