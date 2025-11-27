import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('.load-more-button');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

export function createGallery(images) {
    const markup = images.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
            />
            <div class="captions">
            <p>Likes: ${likes}; </p>
            <p>Views: ${views}; </p>
            <p>Comments: ${comments}; </p>
            <p>Downloads: ${downloads}; </p>
            </div>
        </a>
    </li>
    `).join("");
    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}


export function clearGallery() {
    gallery.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove('hidden');
}

export function hideLoader() {
    loader.classList.add('hidden');
}

export function showLoadMoreButton(){
    loadMoreButton.classList.remove('hidden');
}

export function hideLoadMoreButton(){
    loadMoreButton.classList.add('hidden');
}