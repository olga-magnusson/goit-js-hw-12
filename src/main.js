import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let currentPage = 1;
let searchQuery = '';

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more-button');

/* FORM */

form.addEventListener('submit', async event => {
    event.preventDefault();
    
    searchQuery = form.elements['search-text'].value.trim();

    if (searchQuery === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter search parameters!',
        });
        hideLoadMoreButton();
        return;
    }
    
    currentPage = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();

    try {
        const data = await getImagesByQuery(searchQuery, currentPage);

        if (!data.hits || data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            hideLoadMoreButton();
            return;
        } 
        
        createGallery(data.hits);
            
        if (currentPage * 15 < data.totalHits){
            showLoadMoreButton();}

    } catch (error) {
        
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images. Please try again later.',
        });
    } finally {
        hideLoader();
    }
});


/*LOAD MORE BUTTON*/

loadMoreButton.addEventListener('click', async () => {
    currentPage++;
    showLoader();
    hideLoadMoreButton();

    try {
        const data = await getImagesByQuery(searchQuery, currentPage);
        
        if(!data.hits || data.hits.length === 0){
            iziToast.info({
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results."
            });
            hideLoadMoreButton();
            return;
        }

        createGallery(data.hits);

        const galleryItems = document.querySelectorAll('.gallery-item');
        const firstNewItem = galleryItems[galleryItems.length - data.hits.length]
        
        if(firstNewItem){
            const imageSize = firstNewItem.getBoundingClientRect().height;
            window.scrollBy(
                {
                    top: imageSize * 2,
                    behavior: "smooth"
                }
            );
        }

        if (currentPage * 15 >= data.totalHits) {

            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
            iziToast.info(
            {
                title: 'Info',
                message: "We're sorry, but you've reached the end of search results.",
            });
        }

    } catch(error){
        
        iziToast.error(
            {
                title: 'error',
                message: "An error occurred while loading more images."
            }
        );
        hideLoadMoreButton();
    } finally {
        hideLoader();
    }
});