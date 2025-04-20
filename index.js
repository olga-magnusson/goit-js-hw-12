import{a as w,S as q,i as s}from"./assets/vendor-Db2TdIkw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const S="49754140-bd1dd51ce5d5c06d761f1a420";async function f(a,r){try{return(await w.get("https://pixabay.com/api/",{params:{key:S,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",p:r}})).data}catch(t){return console.error("Error fetching images:",t),[]}}const y=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".load-more-button"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250});function d(a){y.innerHTML=a.map(({webformatURL:r,largeImageURL:t,tags:c,likes:e,views:o,comments:n,downloads:v})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
            <img
                class="gallery-image"
                src="${r}"
                alt="${c}"
            />
            <div class="captions">
            <p>Likes: ${e}; </p>
            <p>Views: ${o}; </p>
            <p>Comments: ${n}; </p>
            <p>Downloads: ${v}; </p>
            </div>
        </a>
    </li>
    `).join(""),P.refresh()}function m(){y.innerHTML=""}function p(){g.classList.add("loader")}function L(){g.classList.remove("loader")}function b(){h.classList.add("load-more-button")}function i(){h.classList.remove("load-more-button")}let l=1;const u=document.querySelector(".form");u.addEventListener("submit",async a=>{a.preventDefault();const r=u.elements["search-text"].value.trim();if(r===""){s.error({title:"Error",message:"Please enter search parameters!"});return}l=1,m(),i(),p();try{const t=await f(r,l);t.hits.length===0?(m(),s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),i()):(d(t.hits),l*15>=t.totalHits?(i(),s.info({title:"info",message:"We're sorry, but you've reached the end of search results."})):b())}catch{s.error({title:"Error",message:"An error occurred while fetching images. Please try again later."}),i()}finally{L()}u.reset()});const E=document.querySelector(".load-more-button");E.addEventListener("click",async()=>{const a=u.elements["search-text"].value.trim();l++,p();try{const r=await f(a,l);d(r.hits),b();const t=document.querySelector(".gallery-image").getBoundingClientRect();window.scrollBy(0,t*2),r.hits.length===0?(i(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):d(r.hits)}catch{m(),s.error({title:"Error",message:"An error occurred while fetching more images. Please try again later."})}finally{L()}});
//# sourceMappingURL=index.js.map
